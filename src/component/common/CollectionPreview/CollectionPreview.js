import type {ItemType} from '../../../types/shop-page';
import React from 'react'

type Props = {
	title: string,
	items: ItemType[],
}

export default function CollectionPreview({title, items}: Props) {
	return (
		<div>
			<h1>{title.toUpperCase()}</h1>
			<div>
				{items.map(item => (
					<div key={item.id}>{item.name}</div>
				))}
			</div>
		</div>
	)
}
