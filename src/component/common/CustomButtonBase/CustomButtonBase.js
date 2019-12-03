import ButtonBase from "@material-ui/core/ButtonBase";
import React from 'react';
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./styles";

type Props = {
	url: string,
	title: string,
	width: string,
	height: number,
  onClick: Function,
}

export default function CustomButtonBase({url, title, width, height, onClick}: Props) {
	const classes = useStyles();
	return (
		<ButtonBase
          focusRipple
          key={title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: width,
            height: height
          }}
          onClick={onClick}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${url})`
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
              {title.toUpperCase()}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
	)
}
