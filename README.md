# django-rest-framework-project

## Details
### Estimated Time
Backend: 2 hours
Frontend: 5 hours

Total: 7 hours

### Possible improvments with more time

If I were to spend more time I would add better error handling for input data that would surface to the user why the form submit might have failed. I would also make it so possible filtering was client side so there wouldnt need to fetch the data every time the filter changes if its already all in memory.

### Assumptions & Trade offs

I made it so each change to filters in the list page would make a new request to showcase the filter on the api but would have done some client side filtering. I used built in support since it would be whats used most likely and didnt need to recreate the wheel like the django filter and react-router-dom.

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

navigate to folder:

```bash
cd backend
```
#### Using uv

```bash
uv sync
```

navigate into /core:

```bash
cd /core
```

run migration:

```bash
uv run manage.py migrate
```

run the backend server:

```bash
uv run python manage.py runserver
```
#### Using Pip

```bash
pip install .
```

navigate into /core:

```bash
cd /core
```

run migration:

```bash
python manage.py migrate
```

run the backend server:

```bash
python manage.py runserver
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
