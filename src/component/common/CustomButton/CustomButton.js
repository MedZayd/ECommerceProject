import React from "react";
import { StyledButton } from "./styles";

type Props = {
  children: any
};

const CustomButton = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default CustomButton;
