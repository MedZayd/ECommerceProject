import { withStyles } from "@material-ui/core/styles";
import { colors } from "../../../styles/colors";
import { Button } from "@material-ui/core";

export const StyledButton = withStyles({
  root: {
    color: colors.black,
    fontFamily: "JosefinSans-Regular",
    width: "48%",
    "&:hover": {
      color: colors.black,
      backgroundColor: colors.white,
      fontFamily: "JosefinSans-Bold"
    }
  },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 2
  }
})(Button);
