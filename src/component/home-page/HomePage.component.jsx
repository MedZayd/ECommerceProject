// @flow

import React from "react";
import { Container } from "@material-ui/core";
import MenuList from "./menu/MenuList.component";
import type { MenuListType } from "../../types/home-page/home-page.types";

const menuList: MenuListType = [
  {
    id: 1,
    title: "menu 1",
    imgPath: ""
  },
  {
    id: 2,
    title: "menu 2",
    imgPath: ""
  },
  {
    id: 3,
    title: "menu 3",
    imgPath: ""
  }
];

function HomePage() {
  return (
    <Container maxWidth={false}>
      <h4>Home Page Component</h4>
      <MenuList menuList={menuList} />
    </Container>
  );
}

export default HomePage;
