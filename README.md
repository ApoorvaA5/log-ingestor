# Log API and Frontend

This project consists of a backend API built with Node.js and Express, using MongoDB as the database, and a React.js frontend for fetching and displaying logs.

## Table of Contents

- [Getting Started](#getting-started)
- [System Design](#system-design)
- [Features](#features)
- [How to Run](#how-to-run)
- [Why-MongoDb] (#why-MongoDb)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed on your machine
- Postman for API testing

### Installation

Clone the repository:

1. Backend Setup

    cd log-api
    npm install

2. Frontend Setup
    cd log-frontend
    npm install

## System Design
The backend is a Node.js application built with Express, utilizing MongoDB as the database. The frontend is a React.js application with Ant Design components.

Folder Structure

log-api/
|-- src/
|   |-- controllers/
|   |   |-- logController.js
|   |-- models/
|   |   |-- logModel.js
|   |-- routes/
|   |   |-- logRoutes.js
|   |-- app.js
|-- package.json

log-frontend/
|-- src/
|   |-- components/
|   |   |-- LogTable.js
|   |-- App.js
|-- package.json

Features
Log Ingestion API: Ingest logs into the MongoDB database via a POST request.
Fetch Logs API: Retrieve all logs from the database via a GET request.
Frontend Log Viewer: React.js frontend to display logs in a table with search and filter capabilities.

### How to Run

1. Backend:
    cd log-api
    node app.js

Ensure that MongoDB is running.
replace MONGODB_URL in .env

2. Frontend 
    cd log-frontend
    npm start

Visit http://localhost:3000 in your browser to view the frontend.

## Why MongoDb

## Why MongoDB?

Several considerations led to the choice of MongoDB as the database solution for this project:

### 1. Hybrid Database Solutions:

MongoDB, as a NoSQL database, provides a hybrid solution suitable for handling both structured and unstructured data. This flexibility is advantageous when dealing with log data, which often varies in structure.

### 2. Efficient Search Capabilities:

MongoDB offers powerful query capabilities and supports indexing. This ensures efficient search operations, a crucial aspect for log data where quick retrieval based on various criteria is essential.

### 3. Database Indexing:

MongoDB's indexing mechanisms enhance query performance. Fields such as `timestamp`, `level`, and `resourceId` can be indexed to optimize read operations.

### 4. Sharding:

While sharding might not be immediately necessary for a small-scale project, MongoDB's support for sharding provides scalability options for handling large datasets and increasing read and write throughput in the future.

### 5. Scalability with Distributed Systems:

MongoDB is designed for horizontal scalability, making it well-suited for distributed environments. In scenarios where future scalability is anticipated, MongoDB can be deployed across multiple nodes or clusters.

### 6. JSON-Like Documents:

MongoDB stores data in BSON format, a binary representation of JSON-like documents. This aligns well with the log data structure, facilitating seamless storage and retrieval.

### 7. Developer-Friendly Schema-less Design:

MongoDB's schema-less design allows for flexibility in data modeling. This is particularly beneficial in logging systems where the log structure may evolve over time without requiring changes to the entire schema.

It's important to note that the choice of MongoDB was made based on the specific requirements and considerations of this project. The flexibility, search capabilities, and scalability features of MongoDB align with the needs of a logging system.
