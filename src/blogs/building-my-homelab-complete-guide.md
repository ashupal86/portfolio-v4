---
title: Building My Homelab - A Complete Guide
date: 2024-12-01
tags: [DevOps, Homelab, Proxmox, Tutorial]
---

# Building My Homelab: A Complete Guide

Setting up a homelab has been one of the most rewarding learning experiences in my tech journey. In this post, I'll share how I built my Proxmox-based homelab and what I learned along the way.

## What is a Homelab?

A homelab is a personal setup of servers, virtual machines, and networking equipment used for learning, testing, and self-hosting services. Think of it as your own mini data center at home!

## Why Build a Homelab?

### Learning Opportunities
- Hands-on experience with enterprise technologies
- Safe environment to break things and learn
- Understanding of networking, virtualization, and system administration

### Practical Benefits
- Self-host your own services
- Control your data privacy
- Save money on cloud services
- Always-available development environment

## My Homelab Setup

### Hardware Specifications

| Component | Specification |
|-----------|--------------|
| CPU | AMD Ryzen 5 5600G |
| RAM | 32GB DDR4 |
| Storage | 512GB NVMe (OS) + 2TB HDD (Data) |
| GPU | NVIDIA GTX 1650 (Passthrough) |
| Network | Gigabit Ethernet |

### Software Stack

```
Proxmox VE (Hypervisor)
├── Windows 11 Pro VM (GPU Passthrough)
│   └── Daily Driver with Native Performance
├── TrueNAS Scale
│   ├── File Storage
│   ├── Photo Backup
│   └── Media Server
├── Ubuntu Server VMs
│   ├── Docker Host
│   ├── Development Environment
│   └── Testing Playground
└── Debian VMs
    ├── Web Services
    └── Database Servers
```

## Step-by-Step Setup Guide

### 1. Installing Proxmox VE

First, download Proxmox VE ISO and create a bootable USB:

```bash
# On Linux, use dd to create bootable USB
sudo dd if=proxmox-ve.iso of=/dev/sdX bs=1M status=progress
```

**Installation Tips:**
- Use the entire disk for Proxmox
- Set a strong root password
- Configure static IP for management interface
- Enable hardware virtualization in BIOS

### 2. GPU Passthrough Configuration

This was the trickiest part! Here's how I got it working:

#### Enable IOMMU

Edit GRUB configuration:

```bash
# /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on iommu=pt"
```

Update GRUB and reboot:

```bash
update-grub
reboot
```

#### Load VFIO Modules

```bash
# /etc/modules
vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
```

#### Blacklist GPU Drivers

```bash
# /etc/modprobe.d/blacklist.conf
blacklist nouveau
blacklist nvidia
```

### 3. Creating the Windows 11 VM

VM Configuration:
- **OS**: Windows 11 Pro
- **CPU**: 6 cores (host type)
- **RAM**: 16GB
- **Storage**: 256GB (VirtIO SCSI)
- **GPU**: NVIDIA GTX 1650 (Passthrough)
- **Network**: VirtIO

**Result**: Native performance! I use this as my daily driver with display directly connected to the GPU.

### 4. Setting Up TrueNAS Scale

TrueNAS provides enterprise-grade storage:

```yaml
Configuration:
  - Storage Pool: 2TB HDD
  - Datasets:
      - Documents
      - Photos
      - Backups
      - Media
  - Services:
      - SMB Shares
      - NFS Exports
      - S3-compatible API
```

### 5. Docker Host Setup

Created a dedicated Ubuntu VM for Docker:

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose

# Create docker-compose.yml for services
version: '3.8'
services:
  portainer:
    image: portainer/portainer-ce
    ports:
      - "9000:9000"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data
```

## Services I'm Running

### Self-Hosted Applications

1. **Portainer** - Docker management UI
2. **Nextcloud** - Personal cloud storage
3. **Jellyfin** - Media server
4. **GitLab** - Private Git repository
5. **Pi-hole** - Network-wide ad blocking
6. **Nginx Proxy Manager** - Reverse proxy

### Development Environments

- Python development with Flask/FastAPI
- Node.js for React projects
- Database servers (PostgreSQL, MySQL)
- Redis for caching
- Testing environments with snapshots

## Snapshot and Restore

One of the best features of Proxmox is VM snapshots:

```bash
# Create snapshot via CLI
qm snapshot <vmid> <snapshot-name>

# Restore snapshot
qm rollback <vmid> <snapshot-name>
```

**Use Cases:**
- Before system updates
- Testing new configurations
- Experimenting with software
- Quick recovery from mistakes

## Networking Setup

### VLAN Configuration

| VLAN | Purpose | Subnet |
|------|---------|--------|
| 10 | Management | 192.168.10.0/24 |
| 20 | Production | 192.168.20.0/24 |
| 30 | Development | 192.168.30.0/24 |
| 40 | Guest | 192.168.40.0/24 |

### Firewall Rules

```bash
# Allow SSH from management VLAN only
iptables -A INPUT -p tcp --dport 22 -s 192.168.10.0/24 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j DROP

# Allow web traffic
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

## Lessons Learned

### What Worked Well

✅ **GPU Passthrough**: Native performance for daily use
✅ **Snapshots**: Saved me countless times
✅ **Resource Allocation**: Easy to adjust VM resources
✅ **Learning Platform**: Hands-on experience with enterprise tech

### Challenges Faced

❌ **Initial GPU Passthrough**: Took 3 days to get working
❌ **Network Configuration**: VLANs were confusing at first
❌ **Storage Planning**: Wish I had bought more storage initially
❌ **Power Consumption**: Server runs 24/7

## Cost Breakdown

| Item | Cost (INR) |
|------|-----------|
| CPU + Motherboard | ₹25,000 |
| RAM (32GB) | ₹8,000 |
| Storage (NVMe + HDD) | ₹12,000 |
| GPU (Used) | ₹15,000 |
| Case + PSU | ₹6,000 |
| **Total** | **₹66,000** |

**Monthly Electricity**: ~₹500 (24/7 operation)

## Future Plans

- [ ] Add more storage (4TB HDD)
- [ ] Set up Kubernetes cluster
- [ ] Implement proper backup solution
- [ ] Add UPS for power protection
- [ ] Expand to 64GB RAM
- [ ] Set up monitoring with Grafana

## Tips for Building Your Homelab

### 1. Start Small
You don't need expensive hardware. An old laptop or mini PC works great for learning.

### 2. Plan Your Network
Proper network planning saves headaches later. Document everything!

### 3. Use Snapshots Liberally
Before any major change, take a snapshot. It's saved me countless times.

### 4. Monitor Resources
Keep an eye on CPU, RAM, and storage usage. Proxmox has great built-in monitoring.

### 5. Document Everything
Write down configurations, passwords, and procedures. Future you will thank you.

## Conclusion

Building a homelab has been an incredible learning experience. It's given me hands-on experience with technologies I'd only read about before:

- Virtualization and hypervisors
- Storage management
- Networking and VLANs
- GPU passthrough
- Self-hosting services
- Backup and disaster recovery

The best part? I have a powerful, flexible environment for learning and experimentation. Every mistake is a learning opportunity, and every success builds confidence.

If you're considering building a homelab, I highly recommend it. Start small, learn as you go, and don't be afraid to break things!

---

**Questions about homelab setup? Feel free to reach out on [GitHub](https://github.com/ashupal86) or [LinkedIn](https://linkedin.com/in/ashish-pal-5725a6257)!**
