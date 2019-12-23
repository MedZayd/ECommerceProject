import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../styles/colors";

export const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "rgba(255, 255, 255, .7)",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    color: colors.black
  },
  signIn: {
    width: "40%",
    margin: 40
  },
  register: {
    width: "40%",
    margin: 40
  }
}));
