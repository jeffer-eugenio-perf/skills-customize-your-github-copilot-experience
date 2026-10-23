import json

DATA_FILE = "students.json"

students = [
    {"id": 1, "name": "Ava", "score": 92},
    {"id": 2, "name": "Leo", "score": 88},
]


def save_students():
    with open(DATA_FILE, "w", encoding="utf-8") as file:
        json.dump(students, file, indent=2)
    print(f"Saved {len(students)} students to {DATA_FILE}")


def load_students():
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        print(f"File not found: {DATA_FILE}")
        return []


# Example usage
save_students()
print(load_students())
