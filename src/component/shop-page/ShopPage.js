import {Paper, Typography} from "@material-ui/core";
import React, { Component } from 'react'

import CollectionPreview from "./CollectionPreview";
import {Link} from "react-router-dom";
import SHOP_DATA from "../../utils/shop-data";
import type {ShopItemListType} from "../../types/shop-page";
import {styles} from "./styles";
import {withStyles} from "@material-ui/core/styles";

type State = {
	collections: ShopItemListType
}

type Props = {
	classes: Object,
}

class ShopPage extends Component<Props, State> {
	state = {
		collections: SHOP_DATA
	}
	render() {
		const { collections } = this.state;
		const { classes } = this.props;
		return (
			<div className={classes.container} >
				<div className={classes.header}>
					<Typography variant="h4" component="h4" >
						Shop
					</Typography>
					<Link to="/" className={classes.link}>
						<Typography variant="h5" component="h5" >
							Home Page
						</Typography>
					</Link>
				</div>
				{/*<Paper elevation={5} className={classes.paper}>
					{collections.map(({id, ...otherCollectionProps}) => (
						<CollectionPreview
							key={id}
							{...otherCollectionProps} />
					))}
				</Paper>*/}
				{collections.map(({id, ...otherCollectionProps}) => (
					<CollectionPreview
						key={id}
						{...otherCollectionProps} />
				))}
			</div>
		)
	}
}

export default withStyles(styles)(ShopPage);