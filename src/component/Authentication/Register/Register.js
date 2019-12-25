import React, { Component } from "react";
import Header from "../Header";
import FieldInput from "../../common/FieldInput";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import CustomButton from "../../common/CustomButton";

type Props = {
  classes: Object
};

type State = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
};

const DEFAULT_STATE = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

class Regiter extends Component<Props, State> {
  state = DEFAULT_STATE;

  onFieldInputChange = (id: string, value: string) => {
    switch (id) {
      case "name":
        this.setState({ name: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "password":
        this.setState({ password: value });
        break;
      case "confirmPassword":
        this.setState({ confirmPassword: value });
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
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div>
        <Header
          title="I don't have an account"
          subTitle="Sign up with your email and password"
        />
        <form className={classes.container}>
          <FieldInput
            id="register_name"
            label="Display Name"
            type="text"
            value={name}
            onChange={event =>
              this.onFieldInputChange("name", event.target.value)
            }
            required
          />
          <FieldInput
            id="register_email"
            label="Email"
            type="email"
            value={email}
            onChange={event =>
              this.onFieldInputChange("email", event.target.value)
            }
            required
          />
          <FieldInput
            id="register_password"
            label="Password"
            type="password"
            value={password}
            onChange={event =>
              this.onFieldInputChange("password", event.target.value)
            }
            required
          />
          <FieldInput
            id="register_confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={event =>
              this.onFieldInputChange("confirmPassword", event.target.value)
            }
            required
          />
          <div className={classes.signInButtons}>
            <CustomButton variant="outlined" onClick={this.handleSubmit}>
              <span>Sign UP</span>
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Regiter);
