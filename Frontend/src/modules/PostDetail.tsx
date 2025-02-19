import { Button, Card, Form, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = ({ postId }: { postId: number | null }) => {
  const [post, setPost] = useState<{ title: string; body: string }>({ title: "", body: "" });
  const [editing, setEditing] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => setPost(response.data))
      .catch(() => setPost({ title: "", body: "" }));
  }, [postId]);

  const handleEdit = () => {
    setEditing(true);
    form.setFieldsValue({ title: post.title, content: post.body });
  };

  const handleSave = (values: { title: string; content: string }) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, values).then(() => {
      setPost({ ...post, title: values.title, body: values.content });
      setEditing(false);
    });
  };

  return (
    <div>
      {editing ? (
        <Form form={form} onFinish={handleSave} layout="vertical">
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Content" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      ) : post ? (
        <Card title={post.title}>
          <p>{post.body}</p>
          <Button type="primary" onClick={handleEdit}>
            Edit
          </Button>
          {`    `}
          <Button type="primary" onClick={() => {}}>
            Delete
          </Button>
        </Card>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default PostDetail;
