// @flow

import React from "react";
import type { MenuItemType } from "../../../types/home-page/home-page.types";

type Props = {
  menuItem: MenuItemType
};

export default function MenuItem(props: Props) {
  return <li key={props.menuItem.id}>{props.menuItem.title}</li>;
}
