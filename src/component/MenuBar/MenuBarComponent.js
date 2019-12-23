import React from "react";

import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../images/icons/crown.svg";

const MenuBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={logo} alt="crown-icon" className={classes.logoImg} />
        </Link>
      </div>
      <div className={classes.links}>
        <div className={classes.linkHolder}>
          <Link to="/shop" className={classes.link}>
            Shop
          </Link>
        </div>
        <div className={classes.linkHolder}>
          <Link to="/signin" className={classes.link}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
