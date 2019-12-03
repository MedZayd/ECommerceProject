// @flow

import {Link} from "react-router-dom";
import MenuList from "../menu-list";
import React from "react";
import { Typography } from "@material-ui/core";
import {useStyles} from "./styles";

function HomePage() {
  const classes= useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h4" component="h4" gutterBottom>
          Home Page
        </Typography>
        <Link to='/shop' className={classes.link}>
          <Typography variant="h5" component="h5" gutterBottom>
            Shop
          </Typography>
        </Link>
      </div>
      <MenuList />
    </div>
  );
}

export default HomePage;
