import type {ItemType} from "../../../types/shop-page";
import React from 'react';
import {useStyles} from "./styles";

type Props = {
	item:ItemType
}

const CollectionItem = ({item}: Props) => {
	const classes = useStyles();
	return (
		<div className={classes.card}>
			<div className={classes.header}>
				<span>{item.name}</span>
			</div>
			<div className={classes.media} style={{backgroundImage: `url(${item.imageUrl})`}} />
			<div className={classes.content}>
				<span>{item.price} €</span>
			</div>
		</div>
	)
}

export default CollectionItem;