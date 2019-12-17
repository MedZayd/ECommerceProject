import {Grid, Typography} from "@material-ui/core";

import CollectionItem from "../CollectionItem";
import type {ItemType} from '../../../types/shop-page';
import React from 'react';
import {useStyles} from "./styles";

type Props = {
	title: string,
	items: ItemType[],
}

export default function CollectionPreview({title, items}: Props) {
	const classes = useStyles();
	return (
		<div>
			<p className={classes.title}>
				{title.toUpperCase()}
			</p>
			<Grid container spacing={3}>
				{items.map(item => (
					<Grid item xs={3} key={item.id} >
						<CollectionItem item={item} />
					</Grid>
				))}
			</Grid>
		</div>
	)
}
