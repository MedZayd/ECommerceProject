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
		<div className={classes.container}>
			<Typography variant="h5" component="h5" className={classes.title}>
				{title.toUpperCase()}
			</Typography>
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
