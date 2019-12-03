import CustomButtonBase from "../common/CustomButtonBase";
import {Paper} from "@material-ui/core";
import React from "react";
import {menuList} from "../../utils/menu-list-properties";
import {withRouter} from "react-router-dom";

type Props = {
  history: any,
  match: any
}

const MenuList = ({history, match}: Props) => {
  return (
    <Paper elevation={5}>
      {menuList.map(menuItem => (
        <CustomButtonBase
          key={menuItem.id}
          {...menuItem}
          onClick={() => history.push(`${match.url}${menuItem.title}`)}
        />
      ))}
    </Paper>
  );
}

export default  withRouter(MenuList);