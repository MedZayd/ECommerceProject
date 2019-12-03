export type ItemType = {
	id: number,
	name: string,
	imageUrl: string,
	price: number
};

export type ShopItemType = {
	id: number,
	title: string,
	routeName: string,
	items: ItemType[]
};

export type ShopItemListType = ShopItemType[];