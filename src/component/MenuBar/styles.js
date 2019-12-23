import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../styles/colors";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "JosefinSans-Light",
    height: "50px",
    color: colors.white,
    margin: "10px 0",
    paddingLeft: 40,
    paddingRight: 60
  },
  logoImg: {
    cursor: "pointer",
    width: 100,
    height: 50
  },
  links: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  },
  linkHolder: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    height: "100%",
    "&:hover": {
      fontFamily: "JosefinSans-Regular"
    }
  },
  link: {
    textDecoration: "none",
    fontSize: 20,
    margin: "auto auto",
    color: colors.white
  }
}));
