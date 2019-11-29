// @flow

import MenuLine from "./MenuLine.component";
import type { MenuListType } from "../../../types/home-page/home-page.types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const topMenuList: MenuListType = [
  {
    id: 1,
    title: "hats",
    imgPath: "https://i.ibb.co/cvpntL1/hats.png",
    cols: 1
  },
  {
    id: 2,
    title: "jackets",
    imgPath: "https://i.ibb.co/px2tCc3/jackets.png",
    cols: 1
  },
  {
    id: 3,
    title: "sneakers",
    imgPath: "https://i.ibb.co/0jqHpnp/sneakers.png",
    cols: 1
  }
];

const bottomMenuList: MenuListType = [
  {
    id: 4,
    title: "women",
    imgPath: "https://i.ibb.co/GCCdy8t/womens.png",
    cols: 1
  },
  {
    id: 5,
    title: "mens",
    imgPath: "https://i.ibb.co/R70vBrQ/men.png",
    cols: 1
  }
];

const useStyles = makeStyles(() => ({
  container: {
    boxShadow: "5px 5px 15px 2px rgba(0,0,0,0.30)"
  }
}));

export default function MenuList() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <MenuLine menuItems={topMenuList} cellHeight={200} columns={3} />
      <MenuLine menuItems={bottomMenuList} cellHeight={400} columns={2} />
    </div>
  );
}
