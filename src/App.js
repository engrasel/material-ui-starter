import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./App.css";

const useStyles = makeStyles({
  root: {
    background: "green",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "red",
    height: 48,
    padding: "0 30px",
  },
  s4: {
    color: "#222",
    background: "orange",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography variant="h4" className={classes.s4}>
        This is React Material UI Starter
      </Typography>
    </div>
  );
}

export default App;
