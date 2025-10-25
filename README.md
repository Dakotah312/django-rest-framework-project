# django-rest-framework-project

## Extentions

### How would the system process and interpret the content of the uploaded PDF?

By taking the binary data and converting to a string of text then parsing.
I could use a pdf parser to find relavent data we would want to populate the fields with.
Another way would be to let AI parce the data.

### What is the proposed method for handling the actual file upload?

A simple post request with the file in the form data if we limit to small pdf sizes otherwise we would have to stream it in chunks.
The file path could be stored on the professionals table and the the actual file stored in some file based storage like s3 or google bucket

### What additional functionalities or elements would be incorporated into the frontend for this feature?

A file input component on the form that allows the user to select and upload a file
A file download icon per user in the table view if you want to be able to download the file, this could make a request to the path on the professionals table to fetch the file.

## Setup

### Backend

1. Go to the backend folder:

```bash
cd backend
```

2. install dependancies using uv:

```bash
uv sync
```

4. navigate into /core:

```bash
cd /core
```

5. run migration

```bash
uv run manage.py migrate
```

6. Run the backend server:

```bash
uv run python manage.py runserver
```

The backend will be available at `http://localhost:8000/api/professionals/`.

---

## Frontend

1. Go to the frontend folder:

```bash
cd frontend/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173/`.

---
