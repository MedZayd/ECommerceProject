import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../styles/colors";

export const useStyles = makeStyles(() => ({
  title: {
    color: colors.white,
    borderBottom: `1px solid ${colors.white}`,
    marginBottom: 20,
    paddingBottom: 20,
    fontSize: 20
  },
}));