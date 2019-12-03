import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    margin: "10px auto",
    width: "90%",
    minWidth: 300,
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  link: {
    textDecoration: "none",
    color: "#000066"
  }
}));