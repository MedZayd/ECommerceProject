// @flow

import { GridList, GridListTile } from "@material-ui/core";

import type { MenuListType } from "../../../types/home-page/home-page-types.jsx";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const topRow: MenuListType = [
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

const botRow: MenuListType = [
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
  },
  gridList: {
    display: "flex",
    justifyContent: "space-between"
  },
  gridListTile: {
    padding: 10,
    border: "1px solid #E4E4E4",
    background: "blue"
  },
  content: {
    cursor: "pointer",
    maxWidth: "100%",
    maxHeight: "100%",
    webkitTransition: "0.5s ease",
    transition: "0.5s ease",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.03)"
    },
    "& img": {
      backgroundSize: "cover"
    }
  }
}));

export default function MenuList() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridList cellHeight={200} cols={3}>
        {topRow.map(item => (
          <GridListTile key={item.id} cols={1} className={classes.gridListTile}>
            {item.title}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
