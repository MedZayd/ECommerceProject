import React from "react";
import { useStyles } from "./styles";

type Props = {
  title: string,
  subTitle: string
};

const Header = ({ title, subTitle }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}> {title} </div>
      <div className={classes.subtitle}> {subTitle} </div>
    </div>
  );
};

export default Header;
