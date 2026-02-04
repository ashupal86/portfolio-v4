---
title: My Journey into Self-Taught Development
date: 2024-12-15
tags: [Personal, Learning, Development]
---

# My Journey into Self-Taught Development

Five years ago, I made a decision that would change my life forever: I decided to teach myself programming. As a Computer Science student at NIET, I wasn't satisfied with just classroom learning. I wanted to build real things, solve real problems, and learn at my own pace.

## The Beginning

It all started with Python. I was fascinated by how a few lines of code could automate tasks, process data, and create something useful. I spent countless hours on YouTube, following tutorials, breaking code, and fixing it again.

```python
# My first "Hello World" - simple but magical
def greet(name):
    return f"Hello, {name}! Welcome to programming."

print(greet("World"))
```

## The Challenges

Learning to code on your own isn't easy. There were moments of frustration:

- **Debugging for hours** only to find a missing semicolon
- **Imposter syndrome** when comparing myself to others
- **Decision paralysis** - which language? which framework?
- **Lack of structure** - what should I learn next?

But each challenge taught me something valuable: **persistence**.

## My Learning Strategy

Over time, I developed a learning strategy that worked for me:

1. **Project-Based Learning**: Instead of just watching tutorials, I built projects
2. **Documentation Reading**: Learning to read docs made me self-sufficient
3. **Community Engagement**: GitHub, Stack Overflow, and Discord became my classrooms
4. **Teaching Others**: As Technical Head at Ekume Club, teaching reinforced my learning

## The Breakthrough Projects

### My Manager App

Building an Android app for shop owners was my first major project. It taught me:

- Java and Android development
- SQLite database management
- Real-world problem solving
- User-centric design

### Notes API

Creating a REST API from scratch taught me backend development:

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/notes', methods=['GET'])
def get_notes():
    # Fetch notes from database
    return jsonify({"notes": notes_list})
```

This project made me understand:
- RESTful architecture
- Database design
- API security
- Error handling

## Current Focus: DevOps

Now I'm diving deep into DevOps. My homelab setup with Proxmox has been an incredible learning experience:

- **Virtualization**: Running multiple VMs and containers
- **Docker**: Containerizing applications
- **Linux**: Daily driver is a Windows 11 VM with GPU passthrough
- **Self-Hosting**: TrueNAS for storage, various services

## Advice for Aspiring Self-Taught Developers

If you're starting your journey, here's what I wish I knew earlier:

### 1. Start Small, Think Big
Don't try to build Facebook on day one. Start with a calculator, then a todo app, then something bigger.

### 2. Embrace the Struggle
That error message? It's not your enemy. It's teaching you something.

### 3. Build in Public
Share your projects on GitHub. Write about your learning. The feedback is invaluable.

### 4. Consistency > Intensity
One hour every day beats 10 hours once a week.

### 5. Join Communities
Find your tribe. Whether it's a Discord server, a local meetup, or a college club.

## The Road Ahead

I'm currently in my final year at NIET, and the journey continues. My goals for the next year:

- [ ] Master Docker and Kubernetes
- [ ] Contribute more to open source
- [ ] Build a SaaS product
- [ ] Get a DevOps internship (Update: Got one at GreenTree China! 🎉)
- [ ] Help more students start their coding journey

## Conclusion

Being self-taught doesn't mean being alone. It means taking ownership of your learning. It means being curious, persistent, and humble.

Three years in, I've built Android apps, web applications, REST APIs, and a homelab. But more importantly, I've built the confidence that I can learn anything.

> "The expert in anything was once a beginner." - Helen Hayes

If you're reading this and thinking about starting your own journey, this is your sign. Start today. Start small. But start.

---

**What's your learning story? Connect with me on [LinkedIn](https://linkedin.com/in/ashish-pal-5725a6257) or [GitHub](https://github.com/ashupal86)!**
