import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "../axios";

const Post = () => {
  const [posts, setPosts] = useState([]);

  const getData = async() => {
    const response = await axios.get('/');
    console.log(response.data);
    setPosts(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <div key={post.id}>
          <p>title: {post.title}</p>
          <p>content: {post.content}</p>
          <p>createdAt: {post.created_at}</p>
          <p>---------------------</p>
        </div>
      ))}
    </Container>
  );
}

export default Post;