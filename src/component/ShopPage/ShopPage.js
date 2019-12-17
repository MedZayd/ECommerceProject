
import React, { Component } from 'react'

import CollectionPreview from "./CollectionPreview";
import SHOP_DATA from "../../utils/shop-data";
import type { ShopItemListType } from "../../types/shop-page";

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
		return collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview
					key={id}
					{...otherCollectionProps} />
			))
	}
}

export default ShopPage;