import ButtonBase from "@material-ui/core/ButtonBase";
import React from "react";
import Typography from "@material-ui/core/Typography";
import {menuList} from "../../utils/menu-list-properties";
import {useStyles} from "./styles";

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
              {menuItem.title.toUpperCase()}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
