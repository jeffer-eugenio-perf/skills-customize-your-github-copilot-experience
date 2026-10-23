# 📘 Assignment: Working with Files and JSON

## 🎯 Objective

Learn how to read and write data from files in Python, using JSON to store structured information for a small project.

## 📝 Tasks

### 🛠️ Save Data to a JSON File

#### Description
Create a Python program that stores a list of records in a JSON file so they can be saved between runs.

#### Requirements
Completed program should:

- Use Python's `json` module to write data to a file
- Store data in a dictionary or list structure
- Save at least three records with meaningful fields such as `name`, `score`, or `completed`
- Write the data using a `.json` file in the same project folder
- Print a message confirming the file was saved

### 🛠️ Read Data Back from a File

#### Description
Load the saved JSON data back into Python and display it in a user-friendly format.

#### Requirements
Completed program should:

- Open the JSON file using Python
- Read the stored contents and convert them into Python objects
- Display the data in a readable way to the user
- Handle a missing file gracefully with a clear error message

### 🛠️ Update and Search the Stored Data

#### Description
Add a small feature that lets the user update one record or search for data by a specific value.

#### Requirements
Completed program should:

- Allow the user to update an existing record or add a new one
- Search for a record by a field such as `name` or `id`
- Save the updated data back to the same JSON file
- Show the final list of records after the update
