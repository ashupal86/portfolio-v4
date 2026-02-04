---
title: Flask vs FastAPI - My Experience Building REST APIs
date: 2024-11-30
tags: [Python, Flask, FastAPI, Backend, API]
---

# Flask vs FastAPI: My Experience Building REST APIs

As someone who's built multiple REST APIs with both Flask and FastAPI, I often get asked: "Which one should I use?" In this post, I'll share my hands-on experience with both frameworks and help you decide which one fits your needs.

## My Background with Both Frameworks

I started with **Flask** about 2 years ago. It was my introduction to web development in Python. I've built:
- A Notes API for cross-device synchronization
- A Blog platform with authentication
- Multiple internal tools and microservices

Recently, I've been exploring **FastAPI** and I'm impressed. Here's my honest comparison.

## Flask: The Veteran

### What I Love About Flask

#### 1. Simplicity and Flexibility

Flask is incredibly simple to get started with:

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/hello')
def hello():
    return jsonify({"message": "Hello, World!"})

if __name__ == '__main__':
    app.run(debug=True)
```

That's it! You have a working API.

#### 2. Mature Ecosystem

Flask has been around since 2010. This means:
- Tons of extensions (Flask-SQLAlchemy, Flask-Login, Flask-CORS)
- Extensive documentation
- Large community
- Answers to almost any question on Stack Overflow

#### 3. Learning Curve

Perfect for beginners. You can start building without understanding decorators, type hints, or async programming.

### What Could Be Better

#### 1. Manual Data Validation

```python
from flask import request, jsonify

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    
    # Manual validation - tedious!
    if not data:
        return jsonify({"error": "No data provided"}), 400
    if 'name' not in data:
        return jsonify({"error": "Name is required"}), 400
    if 'email' not in data:
        return jsonify({"error": "Email is required"}), 400
    if not isinstance(data['age'], int):
        return jsonify({"error": "Age must be an integer"}), 400
    
    # Finally, create user
    user = create_user_in_db(data)
    return jsonify(user), 201
```

This gets repetitive and error-prone.

#### 2. No Built-in API Documentation

You need to manually write API docs or use extensions like Flask-RESTX or Flasgger.

#### 3. Async Support

While Flask 2.0+ supports async, it's not as natural as FastAPI.

## FastAPI: The Modern Challenger

### What I Love About FastAPI

#### 1. Automatic Data Validation

Using Pydantic models, validation is automatic:

```python
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class User(BaseModel):
    name: str
    email: EmailStr
    age: int

@app.post("/api/users")
async def create_user(user: User):
    # Data is already validated!
    # user.name, user.email, user.age are guaranteed to be correct types
    return {"message": f"User {user.name} created successfully"}
```

FastAPI automatically:
- Validates data types
- Returns detailed error messages
- Converts data to the right types

#### 2. Automatic Interactive Documentation

Visit `/docs` and you get Swagger UI for free:

```python
from fastapi import FastAPI

app = FastAPI(
    title="My API",
    description="A cool API built with FastAPI",
    version="1.0.0"
)

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    """
    Get an item by ID.
    
    - **item_id**: The ID of the item
    - **q**: Optional query parameter
    """
    return {"item_id": item_id, "q": q}
```

No extra work needed! You get:
- Interactive API documentation
- Request/response examples
- Try-it-out functionality

#### 3. Type Hints and Editor Support

```python
from typing import List, Optional
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_available: bool = True
    tags: List[str] = []

@app.get("/items", response_model=List[Item])
async def get_items(skip: int = 0, limit: int = 10) -> List[Item]:
    # Your editor knows the exact types!
    # Autocomplete works perfectly
    return get_items_from_db(skip, limit)
```

VS Code and PyCharm provide amazing autocomplete and error detection.

#### 4. Performance

FastAPI is built on Starlette and Pydantic, making it one of the fastest Python frameworks:

| Framework | Requests/sec |
|-----------|-------------|
| FastAPI | ~20,000 |
| Flask | ~3,000 |
| Django | ~2,000 |

*Benchmarks vary, but FastAPI is consistently faster*

#### 5. Async/Await Native Support

```python
import httpx
from fastapi import FastAPI

app = FastAPI()

@app.get("/fetch-data")
async def fetch_data():
    async with httpx.AsyncClient() as client:
        response = await client.get("https://api.example.com/data")
        return response.json()
```

Perfect for I/O-bound operations!

### What Could Be Better

#### 1. Learning Curve

You need to understand:
- Type hints
- Pydantic models
- Async/await
- Dependency injection

This can be overwhelming for beginners.

#### 2. Smaller Ecosystem

FastAPI is newer (2018), so:
- Fewer third-party extensions
- Smaller community (but growing fast!)
- Less Stack Overflow answers

## Real-World Comparison

Let me show you the same API endpoint in both frameworks:

### Flask Version

```python
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    
    # Manual validation
    if not data or 'username' not in data or 'email' not in data:
        return jsonify({"error": "Missing required fields"}), 400
    
    # Check if user exists
    if User.query.filter_by(username=data['username']).first():
        return jsonify({"error": "Username already exists"}), 400
    
    # Create user
    user = User(username=data['username'], email=data['email'])
    db.session.add(user)
    db.session.commit()
    
    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email
    }), 201
```

### FastAPI Version

```python
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from database import get_db, User

app = FastAPI()

class UserCreate(BaseModel):
    username: str
    email: EmailStr

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    
    class Config:
        from_attributes = True

@app.post("/api/users", response_model=UserResponse, status_code=201)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # Validation is automatic!
    
    # Check if user exists
    if db.query(User).filter(User.username == user.username).first():
        raise HTTPException(status_code=400, detail="Username already exists")
    
    # Create user
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    return db_user
```

## My Recommendation

### Choose Flask if:

✅ You're a beginner learning web development
✅ You need a simple, small API
✅ You want maximum flexibility
✅ You're working on a project with existing Flask codebase
✅ You don't need automatic documentation

### Choose FastAPI if:

✅ You're building a production API
✅ You need automatic data validation
✅ You want built-in API documentation
✅ Performance is important
✅ You're comfortable with type hints and async
✅ You're starting a new project

## My Current Stack

For new projects, I'm using **FastAPI**. Here's why:

1. **Automatic validation** saves so much time
2. **Interactive docs** make testing easier
3. **Type hints** catch bugs before runtime
4. **Performance** is noticeably better
5. **Modern Python** features feel natural

But I still use **Flask** for:
- Quick prototypes
- Simple internal tools
- Projects where I need specific Flask extensions

## Migration Tips

If you're thinking of migrating from Flask to FastAPI:

### 1. Start with New Endpoints

Don't rewrite everything at once. Add new endpoints in FastAPI.

### 2. Learn Pydantic First

Understanding Pydantic models is key to using FastAPI effectively.

### 3. Embrace Type Hints

```python
# Instead of this
def get_user(user_id):
    return user

# Write this
def get_user(user_id: int) -> User:
    return user
```

### 4. Use Dependency Injection

FastAPI's dependency injection is powerful:

```python
from fastapi import Depends

def get_current_user(token: str = Depends(oauth2_scheme)):
    # Verify token and return user
    return user

@app.get("/profile")
async def get_profile(user: User = Depends(get_current_user)):
    return user
```

## Conclusion

Both Flask and FastAPI are excellent frameworks. Flask is battle-tested and beginner-friendly. FastAPI is modern, fast, and feature-rich.

My journey:
1. **Started with Flask** - Learned web development basics
2. **Built production apps** - Understood API design
3. **Discovered FastAPI** - Fell in love with modern Python
4. **Now using both** - Right tool for the right job

The best framework is the one that helps you ship your project. Don't get stuck in analysis paralysis!

---

**What's your experience with Flask and FastAPI? Let's discuss on [LinkedIn](https://linkedin.com/in/ashish-pal-5725a6257)!**
