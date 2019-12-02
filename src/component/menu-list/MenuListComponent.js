import ButtonBase from "@material-ui/core/ButtonBase";
import type {MenuListType} from "../../types/home-page/home-page-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const menuList: MenuListType = [
  {
    url: "https://i.ibb.co/cvpntL1/hats.png",
    title: "hats",
    width: "33.33%",
    height: 200
  },
  {
    url: "https://i.ibb.co/px2tCc3/jackets.png",
    title: "jackets",
    width: "33.33%",
    height: 200
  },
  {
    url: "https://i.ibb.co/0jqHpnp/sneakers.png",
    title: "sneakers",
    width: "33.33%",
    height: 200
  },
  {
    url: "https://i.ibb.co/GCCdy8t/womens.png",
    title: "women",
    width: "50%",
    height: 400
  },
  {
    url: "https://i.ibb.co/R70vBrQ/men.png",
    title: "mens",
    width: "50%",
    height: 400
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
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
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
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

export default function MenuList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {menuList.map(menuItem => (
        <ButtonBase
          focusRipple
          key={menuItem.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: menuItem.width,
            height: menuItem.height
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${menuItem.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {menuItem.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}