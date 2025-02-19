import { Button, Card, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../UserContext";
import { BlogsProps, PostProp } from "../model/BlogType";

// Import static image from assets (if stored in src/assets/)
import blogThumbnail from "../assets/Blog_image.jpg";

export default function Blogs({ onPostSelect, title }: BlogsProps) {
  const userId = useUserData()?.id;
  const [posts, setPosts] = useState<PostProp[]>([]);
  const { Title } = Typography;

  useEffect(() => {
    if (!userId) return; // Prevents fetching until userId set

    axios
      .get(`${import.meta.env.VITE_API_BASE_URI}/users/${userId}/posts`)
      .then((response) => setPosts(response.data))
      .catch(() => setPosts([]));
  }, [userId]); // Triggers only when `userId` changes

  return (
    <div>
      <Title level={2}>{title}</Title>
      {posts.map((post) => (
        <Card key={post.postId} style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Static Image on the Left */}
            <img
              src={blogThumbnail}
              alt="Blog Thumbnail"
              style={{ width: "80px", height: "80px", borderRadius: "8px", objectFit: "cover" }}
            />

            {/* Blog Content */}
            <div style={{ flex: 1 }}>
              <Title level={4} style={{ margin: 0 }}>
                {post.title}
              </Title>
              <p>{post.content}</p>
              <Link to={`/posts/${post.postId}`}>
                <Button
                  type="text"
                  style={{ color: "#1677ff" }}
                  onClick={() => onPostSelect(post.postId)}
                >
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
