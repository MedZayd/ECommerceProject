import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../styles/colors";

export const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "JosefinSans-Regular",
        height: "50px",
        color: colors.white,
        marginTop: 10,
        padding: "0 20px"
    },
    logo: {
        fontSize: 30,
        cursor: "pointer",
        "& a": {
            color: colors.white,
            textDecoration: "none"
        }
    },
    links: {
        display: "flex",
        alignItems: "center",
        height: "100%",
    },
    linkHolder: {
        display: "flex",
        alignItems: "center",
        marginLeft: "20px",
        height: "70%",
        "&:hover": {
            color: colors.blue,
            borderBottom: `2px solid ${colors.white}`
        }
    },
    link: {
        textDecoration: "none",
        fontSize: 20,
        margin: "auto auto",
        color: colors.white
    }
}));