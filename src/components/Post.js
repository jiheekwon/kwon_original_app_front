import { Container } from "@mui/system";

const Post = (props) => {
  return (
    <Container>
      {props.posts.map((post) => (
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