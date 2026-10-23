# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a simple REST API using FastAPI that exposes endpoints for managing a small in-memory resource. Students will practice creating routes, handling JSON data, and validating request and response payloads.

## 📝 Tasks

### 🛠️ Set Up the FastAPI Application

#### Description
Create a FastAPI app that starts with a root endpoint and a basic in-memory data store for a collection like books, tasks, or students.

#### Requirements
Completed program should:

- Import and create a `FastAPI` application instance
- Add a health or root route that returns a JSON response
- Store data in a simple Python list or dictionary in memory
- Run the app locally with `uvicorn` or a similar ASGI server

### 🛠️ Implement CRUD Endpoints

#### Description
Create endpoints that allow clients to create, read, update, and delete items from your API.

#### Requirements
Completed program should:

- Add a `GET /items` route to list all items
- Add a `GET /items/{item_id}` route to fetch a single item
- Add a `POST /items` route to create a new item
- Add a `PUT /items/{item_id}` route to update an existing item
- Add a `DELETE /items/{item_id}` route to remove an item
- Return JSON responses with clear data structures
- Handle missing IDs or invalid requests gracefully

### 🛠️ Add Validation and Response Models

#### Description
Use FastAPI’s request and response validation features to make your API more reliable and easier to use.

#### Requirements
Completed program should:

- Define a Pydantic model for the resource being created or updated
- Validate incoming data before saving it
- Return structured responses to the client
- Include at least one field such as `id`, `title`, or `completed` with sensible validation
- Demonstrate proper use of HTTP status codes such as `200`, `201`, and `404`
