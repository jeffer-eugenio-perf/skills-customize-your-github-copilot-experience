from fastapi import FastAPI

app = FastAPI(title="FastAPI Practice API")

# In-memory storage for your application data
items = [
    {"id": 1, "title": "Sample Item", "completed": False},
]


@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI assignment!"}


@app.get("/items")
def get_items():
    return items


# Add your CRUD endpoints here
