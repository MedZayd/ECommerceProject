import React, { Component } from "react";
import Header from "../Header";
import FieldInput from "../../common/FieldInput";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import CustomButton from "../../common/CustomButton";
import GoogleIcon from "../../../images/icons/google.svg";
import GoogleFilledIcon from "../../../images/icons/google-filled.svg";

type Props = {
  classes: Object
};

type State = {
  email: string,
  password: string,
  googleIconHover: boolean
};

const DEFAULT_STATE = {
  email: "",
  password: "",
  googleIconHover: false
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

  handleOnHover = () => {
    this.setState(prevState => ({googleIconHover: !prevState.googleIconHover}));
  }

  render() {
    const { classes } = this.props;
    const { email, password, googleIconHover } = this.state;
    return (
      <div>
        <Header
          title="I already have an account"
          subTitle="Sign in with your email and password Or with Google"
        />
        <form className={classes.container}>
          <FieldInput
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={event =>
              this.onFieldInputChange("email", event.target.value)
            }
            required
          />
          <FieldInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={event =>
              this.onFieldInputChange("password", event.target.value)
            }
            required
          />
          <div className={classes.signInButtons}>
            <CustomButton variant="outlined">Sign IN</CustomButton>
            <CustomButton
              variant="outlined"
              onMouseEnter={this.handleOnHover}
              onMouseLeave={this.handleOnHover}
              startIcon={
                googleIconHover
                  ? <img src={GoogleFilledIcon} className={classes.googleIcon} alt="" />
                  : <img src={GoogleIcon} className={classes.googleIcon} alt="" />
              }
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
