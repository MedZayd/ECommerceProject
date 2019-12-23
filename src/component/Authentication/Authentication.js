import React from "react";
import { useStyles } from "./styles";
import Register from "./Register";
import SignIn from "./SignIn";

const Authentication = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.signIn}>
        <SignIn />
      </div>
      <div className={classes.register}>
        <Register />
      </div>
    </div>
  );
};

export default Authentication;
