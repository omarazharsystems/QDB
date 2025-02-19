# React QDB Application

## Overview
This project is a React-based application featuring a sidebar with user details and navigation links to a **Dashboard** and **Blogs** section. The application dynamically fetches user details and blog posts using a mock API.

## Features

### **Frontend**
1. **Sidebar with User Profile**: Displays the logged-in user's details fetched from an API.
2. **Fixed Sidebar with Navigation**: The sidebar remains visible across different pages.
3. **Dynamic API Calls**:
   - Fetch user details on app load from `http://localhost:6000/users/{random user between 1-10}`.
   - Fetch user-specific blog posts from `http://localhost:6000/users/{random user}/posts`.
4. **Custom Hook**: A custom React hook (`useUserData`) is used to fetch and manage user data.
5. **Routing**:
   - **Dashboard Route (`/dashboard`)**: Displays user-related content.
   - **Blogs Route (`/blogs`)**: Displays blog posts for the user.
   - **Post Details (`/posts/:postId`)**: Shows full blog post details.
6. **Edit and Delete Posts**:
   - Clicking **Edit** loads the post in a form.
   - Changes are saved via a **PUT** request to `https://jsonplaceholder.typicode.com/posts`.
   - Posts can be deleted.
7. **Styled Components & Ant Design**:
   - **Ant Design** components are used for layout and UI elements.
   - **Styled Components** are used for consistent design.
8. **Unit Testing**:
   - A simple unit test is implemented for the sidebar to ensure user details are correctly fetched.

### **Backend**
- A simple **Node.js** backend with static sample data.
- API Endpoints:
  - `GET /users`: Fetches a list of users.
  - `GET /users/:id`: Fetches details of a specific user.
  - `GET /users/:id/posts`: Fetches posts for a specific user.
  - `POST /users/:id/post/:postId`: Accepts and updates a post payload.

## Installation & Setup

### **Requirements**
- Node.js
- Yarn
- React (with TypeScript)
- Styled Components
- Ant Design

### **Steps to Run the Project**
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. **Install Dependencies**
   ```sh
   yarn install
   ```
3. **Start the Backend Server**
   ```sh
   cd backend
   node server.js
   ```
   The server will run on `http://localhost:6000`.
4. **Set Up Environment Variables**
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     VITE_API_BASE_URI=http://localhost:6000
     ```
5. **Start the Frontend Application**
   ```sh
   yarn start
   ```
   The React app will run on `http://localhost:3000`.

## Folder Structure
```
📁 project-root
│── 📁 src
│   ├── 📁 assets          # Static images
│   ├── 📁 components      # Reusable UI components
│   ├── 📁 modules         # Dashboard, Blogs, Sidebar, etc.
│   ├── 📁 hooks           # Custom hooks (e.g., useUserData)
│   ├── 📁 context         # React Context API for global state
│   ├── 📁 utils           # Helper functions
│   ├── 📄 App.tsx         # Main entry component
│   ├── 📄 Router.tsx      # React Router setup
│   ├── 📄 index.tsx       # Application entry point
│── 📁 backend            # Node.js mock backend
│── 📄 .env               # Environment variables
│── 📄 package.json       # Project dependencies
│── 📄 README.md          # Documentation
```

## API Reference
### **User API**
- **Get User List**: `GET /users`
- **Get User Details**: `GET /users/:id`

### **Posts API**
- **Get User's Posts**: `GET /users/:id/posts`
- **Update Post**: `PUT https://jsonplaceholder.typicode.com/posts`
- **Delete Post**: `DELETE https://jsonplaceholder.typicode.com/posts/:id`

## Technologies Used
- **React (TypeScript)**: Frontend framework
- **React Router**: Navigation
- **Styled Components**: Styling
- **Ant Design**: UI components
- **Axios**: API calls
- **Node.js + Express.js**: Backend
- **Jest**: Unit testing

## Future Enhancements
- Add authentication & user sessions
- Improve form validation
- Implement a proper backend with a database
- Improve UI/UX with animations

---

### **Contributors**
- Omar Azhar


Happy Coding! 🚀

