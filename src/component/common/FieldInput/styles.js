import { withStyles } from "@material-ui/core/styles";
import { colors } from "../../../styles/colors";
import { TextField } from "@material-ui/core";

export const CustomTextField = withStyles({
  root: {
    color: colors.black,
    margin: "15px 0",
    width: "100%",
    fontFamily: "JosefinSans-Regular",
    "& label": {
      fontFamily: "JosefinSans-Bold"
    },
    "& label.Mui-focused": {
      fontFamily: "JosefinSans-Bold",
      color: colors.black
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: colors.black
    },
    "& .MuiInput-input": {
      fontFamily: "JosefinSans-Regular",
      fontSize: 18
    }
  }
})(TextField);
