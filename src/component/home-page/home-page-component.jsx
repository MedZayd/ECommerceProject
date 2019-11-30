// @flow

import { Container } from "@material-ui/core";
import MenuList from "./menu";
import React from "react";

function HomePage() {
  return (
    <Container>
      <h4>Home Page Component</h4>
      <MenuList />
    </Container>
  );
}

export default HomePage;
