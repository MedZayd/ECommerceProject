import React, { Component } from "react";
import Header from "../Header";
import FieldInput from "../../common/FieldInput";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import CustomButton from "../../common/CustomButton";
import GoogleFilledIcon from "../../../images/icons/google-filled.svg";
import { signInWithGoogle } from "../../../firebase/firebase.utils";

type Props = {
  classes: Object
};

type State = {
  email: string,
  password: string
};

const DEFAULT_STATE = {
  email: "",
  password: ""
};

class SignIn extends Component<Props, State> {
  state = DEFAULT_STATE;

  onFieldInputChange = (id: string, value: string) => {
    switch (id) {
      case "email":
        this.setState({ email: value });
        break;
      case "password":
        this.setState({ password: value });
        break;
      default:
        break;
    }
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(this.state);
    this.setState(DEFAULT_STATE);
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <div>
        <Header
          title="I already have an account"
          subTitle="Sign in with your email and password Or with Google"
        />
        <form className={classes.container}>
          <FieldInput
            id="sign_email"
            label="Email"
            type="email"
            value={email}
            onChange={event =>
              this.onFieldInputChange("email", event.target.value)
            }
            required
          />
          <FieldInput
            id="sign_password"
            label="Password"
            type="password"
            value={password}
            onChange={event =>
              this.onFieldInputChange("password", event.target.value)
            }
            required
          />
          <div className={classes.signInButtons}>
            <CustomButton variant="outlined" onClick={this.handleSubmit}>
              <span>Sign IN</span>
            </CustomButton>
            <CustomButton
              variant="outlined"
              onClick={signInWithGoogle}
              startIcon={
                <img
                  src={GoogleFilledIcon}
                  className={classes.googleIcon}
                  alt=""
                />
              }
            >
              <span>Sign in with Google</span>
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
