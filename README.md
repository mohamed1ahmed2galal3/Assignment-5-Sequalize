# Assignment 5 — Sequelize & Express.js

A backend development assignment built with **Node.js, Express.js, Sequelize ORM, and MySQL**.

## Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/) or XAMPP
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate to the project folder:

```bash
cd "Assignment 5"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the database

Create a MySQL database named:

```sql
CREATE DATABASE squelize_assignment;
```

Update your database connection settings in the connection configuration file to match your local MySQL credentials.

Make sure MySQL is running before starting the server.

### 4. Run the development server

```bash
npm run dev
```

The server will start using the development script configured in `package.json`.

If your project uses port `3000`, the base URL will be:

```text
http://localhost:3000
```

Check your terminal for the actual port number.

## API Endpoints

### Users

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/signup` | Create a new user |
| PUT | `/api/users/:id` | Create or update a user by primary key |
| GET | `/api/users/by-email?email=user1@gmail.com` | Find a user by email |
| GET | `/api/users/:id` | Retrieve a user by ID, excluding the role field |

### Posts

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/posts` | Create a new post |
| DELETE | `/api/posts/:postId` | Delete a post (owner only) |
| GET | `/api/posts/details` | Retrieve posts with user and comment details |
| GET | `/api/posts/comment-count` | Retrieve posts with their comment counts |

### Comments

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/comments` | Create multiple comments |
| PATCH | `/api/comments/:commentId` | Update a comment (owner only) |
| POST | `/api/comments/find-or-create` | Find an existing comment or create one |
| GET | `/api/comments/search?word=the` | Search comments by content and return the count |
| GET | `/api/comments/newest/:postId` | Retrieve the 3 most recent comments for a post |
| GET | `/api/comments/details/:id` | Retrieve a comment with its user and post information |

> **Note:** The `/api` prefix assumes that the routers are mounted under `/api` in the Express application. Adjust the URLs if your application uses a different prefix.

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- mysql2
- JavaScript

## Bonus

The `bonus.js` file contains the solution to the **Remove Element** problem on LeetCode.

## Author

Mohamed Ahmed Galal
