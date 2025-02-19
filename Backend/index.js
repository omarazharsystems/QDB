const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Sample data
const users = [
  { id: 1, name: "Omar Malik", email: "omar11@gmail.com" },
  { id: 2, name: "Ahmad Khan", email: "ahmad2@gmail.com" },
  { id: 3, name: "Sara Ali", email: "sara.ali@example.com" },
  { id: 4, name: "Zainab Ahmed", email: "zainab.ahmed@example.com" },
  { id: 5, name: "Bilal Hussain", email: "bilal.hussain@example.com" },
  { id: 6, name: "Ayesha Khan", email: "ayesha.khan@example.com" },
  { id: 7, name: "Usman Tariq", email: "usman.tariq@example.com" },
  { id: 8, name: "Fatima Noor", email: "fatima.noor@example.com" },
  { id: 9, name: "Ali Raza", email: "ali.raza@example.com" },
  { id: 10, name: "Hina Siddiqui", email: "hina.siddiqui@example.com" },
];

const posts = {
  1: [
    { postId: 1, title: "Post 1", content: "Content for post 1" },
    { postId: 2, title: "Post 2", content: "Content for post 2" },
  ],
  2: [{ postId: 3, title: "Janes Post", content: "Content for Janes post" }],
  3: [{ postId: 4, title: "Janes Post", content: "Content for Janes post" }],
  4: [{ postId: 5, title: "Janes Post", content: "Content for Janes post" }],
  5: [{ postId: 6, title: "Janes Post", content: "Content for Janes post" }],
  6: [{ postId: 7, title: "Janes Post", content: "Content for Janes post" }],
  7: [{ postId: 8, title: "Janes Post", content: "Content for Janes post" }],
  8: [{ postId: 9, title: "Janes Post", content: "Content for Janes post" }],
  9: [{ postId: 10, title: "Janes Post", content: "Content for Janes post" }],
};

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET user details
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// GET posts for a user
app.get("/users/:id/posts", (req, res) => {
  const userPosts = posts[req.params.id];
  if (userPosts) {
    res.json(userPosts);
  } else {
    res.status(404).json({ message: "No posts found for this user" });
  }
});

// POST a new post for a user
app.post("/users/:id/post/:postId", (req, res) => {
  const { title, content } = req.body;
  const userId = req.params.id;
  const postId = req.params.postId;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  if (!posts[userId]) {
    posts[userId] = [];
  }

  posts[userId].push({ postId, title, content });
  res.status(201).json({ message: "Post added successfully", post: { postId, title, content } });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
