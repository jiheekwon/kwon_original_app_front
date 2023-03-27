import { Container } from "@mui/system";
import axios from "../axios";
// import { useState } from "react";

const Post = async() => {
  // const [posts, setPosts] = useState([]);

  const response = await axios.get('/');
  console.log(response.data[0].title);
  const data = response.data[0].title;

  return (
    <Container>
      <p>{data}</p>
    </Container>
  );
}

export default Post;