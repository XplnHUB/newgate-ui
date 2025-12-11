# REST API Demo with NewgateJS

This project demonstrates a simple REST API built using the [NewgateJS](../README.md) framework.

## Setup

1.  Navigate to this directory:
    ```bash
    cd Project
    ```
2.  Install dependencies (links local newgatejs):
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm start
    ```

## API Endpoints

The server runs on `http://localhost:3000`.

### 1. List Users
**GET** `/users`

```bash
curl http://localhost:3000/users
```

### 2. Get User
**GET** `/users/:id`

```bash
curl http://localhost:3000/users/1
```

### 3. Create User (Multi-format Support)

NewgateJS automatically parses the body based on the `Content-Type`.

**JSON:**
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Charlie", "email": "charlie@example.com"}'
```

**CSV:**
```bash
echo "name,email\nDavid,david@example.com" > users.csv
curl -X POST http://localhost:3000/users \
  -H "Content-Type: text/csv" \
  --data-binary "@users.csv"
```

**XML:**
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/xml" \
  --data "<user><name>Eve</name><email>eve@example.com</email></user>"
```

### 4. Delete User
**DELETE** `/users/:id`

```bash
curl -X DELETE http://localhost:3000/users/1
```
