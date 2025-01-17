import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Alert from "@mui/material/Alert";

function App() {
  let handelClick = () => {
    console.log("Button was Cliked!!!!!!");
  };

  return (
    <>
      <h1>Material UI</h1>
      <Button variant="contained" disabled onClick={handelClick}>
        Click
      </Button>
      <br /> <br />
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={handelClick}
      >
        Error <Fingerprint />
      </Button>
      <br /> <br />
      <Button color="secondary" endIcon={<DeleteIcon />} onClick={handelClick}>
        Delete this <SendIcon />
      </Button>
      <br /> <br />
      <Button
        color="success"
        endIcon={<SendIcon />}
        variant="contained"
        onClick={handelClick}
      >
        Send
      </Button>
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <Alert severity="success" variant="filled">
        Sent
      </Alert>
    </>
  );
}

export default App;
