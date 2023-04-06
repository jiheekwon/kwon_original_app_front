import { useEffect, useState } from "react";
import axios from "./axios";
import { TextField, Button, Container } from "@mui/material";
import Post from "./components/Post";

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [change, setChange] = useState(false);

  const getData = async() => {
    const response = await axios.get('/');
    console.log(response.data);
    setPosts(response.data);
  }

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

  useEffect(() => {
    getData();
  }, []);
  
  if(change) {
    getData();
    setChange(false);
  }

  return (
    <Container>
        <div className="title-box">
          <TextField fullWidth id="out-lined-basic fullWidth" label="Title" value={title} variant="outlined" onChange={(e) => {setTitle(e.target.value)}}></TextField>
        </div>
        <br/>
        <div className="content-box">
          <TextField multiline fullWidth id="outlined-multiline-static fullWidth" label="content" value={content} rows={4} onChange={(e) => {setContent(e.target.value)}}></TextField>
        </div>
        <br/>
        <div className="submit-button">
          <Button variant="contained" onClick={submit}>Submit</Button>
        </div>
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

export default App;
