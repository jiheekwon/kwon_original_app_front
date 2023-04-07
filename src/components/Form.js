import { TextField, Button, Container } from "@mui/material";

const Form = (props) => {
  return (
    <Container>
      <div className="title-box">
          <TextField fullWidth id="out-lined-basic fullWidth" label="Title" value={props.title} variant="outlined" onChange={(e) => {props.setTitle(e.target.value)}}></TextField>
        </div>
        <br/>
        <div className="content-box">
          <TextField multiline fullWidth id="outlined-multiline-static fullWidth" label="content" value={props.content} rows={4} onChange={(e) => {props.setContent(e.target.value)}}></TextField>
        </div>
        <br/>
        <div className="submit-button">
          <Button variant="contained" onClick={props.submit}>Submit</Button>
        </div>
    </Container>
  );
}

export default Form;