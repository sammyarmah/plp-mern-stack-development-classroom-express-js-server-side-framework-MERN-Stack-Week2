Perfect ⚡ Let’s make a **professional `README.md`** for your submission — one that will impress your instructor and make your project crystal clear.

Here’s a full version you can **copy and paste directly** into your repository’s `README.md` file 👇

---

# 🚀 Express.js RESTful API – Product Management

## 📘 Overview

This project is a **RESTful API built with Express.js** that manages a collection of products.
It implements **CRUD operations**, **middleware**, **error handling**, and **advanced features** like filtering, pagination, and search.

---

## 🧠 Learning Objectives

By completing this project, you’ll demonstrate:

* Building an Express.js server from scratch
* Creating RESTful routes (CRUD)
* Using middleware for logging, authentication, and validation
* Handling errors professionally with custom classes
* Implementing filtering, pagination, and search
* Structuring a Node.js project like a professional backend developer

---

## 🛠️ Setup Instructions

### 1️⃣ Requirements

* Node.js v18+
* npm (comes with Node)

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
npm start
```

Server runs on:
👉 `http://localhost:3000`

---

## 📁 Project Structure

```
project-folder/
│
├── server.js
├── routes/
│   └── productsRoutes.js
├── models/
│   └── products.js
├── middleware/
│   ├── auth.js
│   ├── logger.js
│   ├── validation.js
│   └── errorHandler.js
├── utils/
│   └── errors.js
├── package.json
└── README.md
```

---

## 🔐 Environment Variables

You can create a `.env` file if you want to manage your API key dynamically.
For now, you can just use the header below in Postman:

**`.env.example`**

```bash
PORT=3000
API_KEY=mysecretkey
```

---

## ⚙️ API Endpoints

### 🔹 Root

**GET /**
Returns a welcome message.

---

### 🔹 Get All Products

**GET /api/products**

**Example:**
`http://localhost:3000/api/products`

**Optional Query Parameters:**

| Parameter  | Example     | Description                 |
| ---------- | ----------- | --------------------------- |
| `category` | electronics | Filter products by category |
| `search`   | phone       | Search by product name      |
| `page`     | 1           | Page number for pagination  |
| `limit`    | 5           | Number of products per page |

**Example Request:**

```
GET /api/products?category=electronics&search=laptop&page=1&limit=2
```

**Example Response:**

```json
{
  "total": 2,
  "page": 1,
  "limit": 2,
  "data": [
    {
      "id": "1",
      "name": "Laptop",
      "description": "High-performance laptop with 16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    }
  ]
}
```

---

### 🔹 Get Product by ID

**GET /api/products/:id**

**Example:**
`GET /api/products/1`

**Response:**

```json
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
```

---

### 🔹 Create Product (Protected)

**POST /api/products**

✅ Requires Header:
`x-api-key: mysecretkey`

**Body Example:**

```json
{
  "name": "Wireless Mouse",
  "description": "Ergonomic mouse with Bluetooth connectivity",
  "price": 25,
  "category": "electronics",
  "inStock": true
}
```

**Response:**

```json
{
  "id": "c93dffba-43f0-41ea-948e-1b5d6f88a42a",
  "name": "Wireless Mouse",
  "description": "Ergonomic mouse with Bluetooth connectivity",
  "price": 25,
  "category": "electronics",
  "inStock": true
}
```

---

### 🔹 Update Product (Protected)

**PUT /api/products/:id**

✅ Requires Header:
`x-api-key: mysecretkey`

**Body Example:**

```json
{
  "price": 30,
  "inStock": false
}
```

**Response:**

```json
{
  "id": "2",
  "name": "Smartphone",
  "description": "Latest model with 128GB storage",
  "price": 30,
  "category": "electronics",
  "inStock": false
}
```

---

### 🔹 Delete Product (Protected)

**DELETE /api/products/:id**

✅ Requires Header:
`x-api-key: mysecretkey`

**Response:**

```json
{
  "message": "Product deleted",
  "deleted": [
    {
      "id": "2",
      "name": "Smartphone",
      "description": "Latest model with 128GB storage",
      "price": 800,
      "category": "electronics",
      "inStock": true
    }
  ]
}
```

---

### 🔹 Get Product Statistics

**GET /api/products/stats**

**Example Response:**

```json
{
  "electronics": 2,
  "kitchen": 1
}
```

---

## 🧩 Middleware Overview

| Middleware        | Location                      | Description                                    |
| ----------------- | ----------------------------- | ---------------------------------------------- |
| **Logger**        | `/middleware/logger.js`       | Logs every request method, URL, and timestamp  |
| **Auth**          | `/middleware/auth.js`         | Checks for a valid `x-api-key` header          |
| **Validation**    | `/middleware/validation.js`   | Ensures required product fields exist          |
| **Error Handler** | `/middleware/errorHandler.js` | Handles errors globally with friendly messages |

---

## ⚠️ Error Handling Example

**Invalid product ID:**

```json
{
  "error": "Product not found"
}
```

**Missing required fields:**

```json
{
  "error": "Missing required fields: name, price, or category"
}
```

**Unauthorized (wrong API key):**

```json
{
  "error": "Unauthorized - Invalid API Key"
}
```

---

## 🧪 Testing Tools

You can test your endpoints using:

* **Postman**
* **Insomnia**
* **curl**

---

## 🏁 Final Notes

✅ All CRUD routes implemented
✅ Proper middleware and validation
✅ Error handling with custom classes
✅ Advanced filtering, search, and pagination
✅ Professional project structure

---

**Author:** *Samuel Armah*
**Course:** Software Engineering – Week 2 Assignment (Express.js)

---
