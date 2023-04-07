import { useEffect, useState } from "react";
import axios from "./axios";
import { Container } from "@mui/material";
import Form from "./components/Form"
import Post from "./components/Post";

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [change, setChange] = useState(false);

  const submit = async() => {
    await axios.post('/create', {
      title: title,
      content: content
    }).then(() => {
      setTitle('');
      setContent('');
      setChange(true);
    }).catch((err) => {
      console.log(err);
    });
  }

  const getData = async() => {
    const response = await axios.get('/');
    console.log(response.data);
    setPosts(response.data);
  }

  useEffect(() => {
    getData();
  }, []);
  
  if(change) {
    getData();
    setChange(false);
  }

  return (
    <Container>
        <Form submit={submit} title={title} setTitle={setTitle} content={content} setContent={setContent}/>
        <Post posts={posts}/>
    </Container>
  );
}

export default App;
