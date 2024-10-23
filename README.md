# React To-Do App - Coding Challenge

## Overview

Welcome to the **React To-Do App Challenge**! This repository contains the base setup for a simple to-do application. The goal of this challenge is to assess your skills in React and state management. Additionally, we'll be looking at your ability to implement clean code, scalable architecture, and handle asynchronous data flows effectively.

## What We Expect

1. **React**: Efficient use of components, hooks, and state management.
2. **State Management**: Choose a state management library (e.g., Redux, Mobx, etc.) and explain your decision.
3. **User Experience**: Ensure the app is user-friendly with a clean and intuitive UI.
4. **Clean Code**: Follow best practices for code organization and readability.
5. **API Integration**: Fetch, create, update, and delete tasks using the provided API.

## Features to Implement

Please follow the order below to complete the tasks:

1. [ ] Add the ability to create, read, update, and delete tasks. (CRUD)
2. [ ] Page with the todo details, including options to update and delete.
3. [ ] Use pagination to display the to-do list and allow the user to change the number of items per page.
4. [ ] Enable sorting of the to-do list by at least two fields.
5. [ ] Enable filtering of the to-do list by at least two fields.

## Instructions

1. Fork this repository and clone it to your local machine.
2. Set up the app and install dependencies using `npm install` on the app root.
3. Start client
   ```bash
   cd client
   npm start
   ```
4. Start server
   ```bash
   cd server
   npm start
   ```
5. Complete the tasks as outlined.

## Tools & Technologies

- **React** (Latest version)
- **State Management**: Your choice (Redux, Context API, Mobx, etc.)
- **API**: [JSON Server v0.17.4](https://github.com/typicode/json-server/tree/v0.17.4)
- **Styling**: Optional (You can use any library or custom styles)

## Server Documentation

### Base URL

The JSON Server is running at: `http://localhost:8089`

### Resources

#### Todos

- **Endpoint:** `/todos`

##### GET `/todos`

- **Description:** Retrieve all todos.

- **Pagination:**

  - Use `_page` and optionally `_limit` to paginate the returned data.
  - Default is 10 items per page.

  **Example Requests:**

  - `GET /todos?_page=1`
  - `GET /todos?_page=2&_limit=20`

  **Response Headers:**

  - The response will include the header `X-Total-Count` that have the number total of items

- **Sorting:**

  - Use `_sort` and `_order` to sort the results.
  - Defaults to ascending order if `_order` is not specified.
  - The available values for `_order` is: `asc` or `desc`

  **Example Requests:**

  - `GET /todos?_sort=priority&_order=asc`
  - `GET /todos?_sort=dueDate&_order=desc`

  - For sorting by multiple fields, use the following format:
    - `GET /todos?_sort=createdAt,title&_order=desc,asc`

- **Operators**

  - **Range Filters:**

    - Use `_gte` (greater than or equal to) or `_lte` (less than or equal to) for getting a range.
      - **Example Request:** `GET /todos?dueDate_gte=1729569243&dueDate_lte=1729624443`

  - **Exclusion:**

    - Use `_ne` (not equal) to exclude a specific value.
      - **Example Request:** `GET /todos?id_ne=1`

  - **Pattern Matching:**

    - Use `_like` to filter results based on a regular expression.
      - **Example Request:** `GET /todos?title_like=task`

  - **Full-text Search:**

    - Use `q` for full-text search queries.
      - **Example Request:** `GET /todos?q=important`

  - **Exact Match:**

    - For exact matches, use the schema key and the value directly in the query.
      - **Example Requests:**
        - `GET /todos?completed=false`
        - `GET /todos?visual.fontWeight=normal`

- **Response:**
  ```json
  [
    {
      "id": "1",
      "title": "Sample Todo",
      "description": "This is a sample todo.",
      "completed": false,
      "createdAt": 1729569243,
      "updatedAt": 1729569243,
      "dueDate": 1729624443,
      "priority": 0,
      "tags": [],
      "visual": {
        "color": "#ff0000",
        "fontWeight": "bold"
      }
    },
    ...
  ]
  ```

##### GET `/todos/:id`

- **Description:** Retrieve a todo by ID
- **Response:**
  ```json
  {
    "id": "1",
    "title": "Sample Todo",
    "description": "This is a sample todo.",
    "completed": false,
    "createdAt": 1729569243,
    "updatedAt": 1729569243,
    "dueDate": 1729624443,
    "priority": 0,
    "tags": [],
    "visual": {
      "color": "#ff0000",
      "fontWeight": "bold"
    }
  }
  ```

##### POST `/todos`

- **Description:** Create a new todo.
- **Request Body:**
  ```json
  {
  	"title": "string",          // Required
  	"description": "string",    // Required
  	"completed": boolean,
  	"dueDate": timestamp,
  	"priority": number,
  	"tags": [],
  	"visual": {
  		"color": "string",
  		"fontWeight": "string"
  	}
  }
  ```
- **Response** New todo with ID

##### PUT /todos/:id

- **Description:** Update an existing todo by ID.
- **Request Body:**
  ```json
  {
  	"title": "string",
  	"description": "string",
  	"completed": boolean,
  	"dueDate": timestamp,
  	"priority": number,
  	"tags": [],
  	"visual": {
  		"color": "string",
  		"fontWeight": "string"
  	}
  }
  ```
- **Response** Return the updated todo item

##### DELETE /todos/:id

- **Description:** Delete a todo by ID
- **Response:**
  ```json
  {}
  ```

## Good Luck!

We're excited to see how you approach this challenge! Feel free to be creative and go beyond the base requirements if you want to showcase more of your skills.

## JSON Server Docs:

https://github.com/typicode/json-server/tree/v0.17.4
