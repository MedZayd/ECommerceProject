// @flow

import React from "react";
import MenuItem from "./MenuItem.component";
import type { MenuListType } from "../../../types/home-page/home-page.types";

type Props = {
  menuList: MenuListType
};

export default function MenuList(props: Props) {
  return (
    <div>
      <ul>
        {props.menuList.map(menuItem => (
          <MenuItem menuItem={menuItem} />
        ))}
      </ul>
    </div>
  );
}
