import React from 'react';

import { useStyles } from "./styles";
import { Link } from "react-router-dom";

const MenuBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Link to="/">Crown Clothing</Link>
            </div>
            <div className={classes.links}>
                <div className={classes.linkHolder}>
                    <Link to="/" className={classes.link}>Home Page</Link>
                </div>
                <div className={classes.linkHolder}>
                    <Link to="/shop" className={classes.link}>Shop</Link>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;