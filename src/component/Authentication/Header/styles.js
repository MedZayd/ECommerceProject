import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: 30,
    fontFamily: "JosefinSans-Bold",
    marginBottom: 10
  },
  subtitle: {
    fontFamily: "JosefinSans-Regular",
    fontSize: 20
  }
}));
