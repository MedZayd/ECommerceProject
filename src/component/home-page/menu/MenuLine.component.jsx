import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

import type { MenuListType } from "../../../types/home-page/home-page-types.jsx";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  gridList: {
    display: "flex",
    justifyContent: "space-between"
  },
  gridListTile: {
    padding: 10,
    border: "1px solid #E4E4E4"
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

type Props = {
  menuItems: MenuListType,
  cellHeight: number,
  columns: number
};

export default function MenuLine({ menuItems, cellHeight, columns }: Props) {
  const classes = useStyles();
  return (
    <GridList
      cellHeight={cellHeight}
      spacing={1}
      cols={columns}
      className={classes.gridList}
    >
      {menuItems.map(menuItem => (
        <GridListTile
          key={menuItem.id}
          cols={menuItem.cols}
          className={classes.gridListTile}
        >
          <div className={classes.content}>
            <img src={menuItem.imgPath} alt={menuItem.title} />
            <GridListTileBar title={menuItem.title.toUpperCase()} />
          </div>
        </GridListTile>
      ))}
    </GridList>
  );
}
