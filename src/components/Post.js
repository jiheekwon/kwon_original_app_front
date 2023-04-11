import { Container } from "@mui/system";

const Post = (props) => {
  const fixDate = (rowDate) => {
    const date = new Date(rowDate);
    const y = date.getFullYear();
    const m = ("00" + (date.getMonth()+1)).slice(-2);
    const d = ("00" + (date.getDate())).slice(-2);
    const noTimeDate = `${y}/${m}/${d}`;
    return noTimeDate;
  }

  return (
    <Container>
      {props.posts.map((post) => (
        <div key={post.id}>
          <p>Title: {post.title}</p>
          <p>Content: {post.content}</p>
          <p>StudyDate: {post.study_date ? fixDate(post.study_date) : "未登録" }</p>
          <p>---------------------</p>
        </div>
      ))}
    </Container>
  );
}

export default Post;