import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    border: "1px solid #fff",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 200
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 50%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));