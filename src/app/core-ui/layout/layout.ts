export type TileId = string;

export enum TileType {
	Item = 'Item',
	Twin = 'Twin'
}

export interface IItemTile {
  item: TileId;
  type: TileType.Item;
}

export interface ITwinTile {
  items: [TileId, TileId];
  type: TileType.Twin;
}

export type ITile = IItemTile | ITwinTile;

export type ILayoutTileRaw = TileId | ITile;

export interface ILayout {
	tilesOrder: Array<ILayoutTileRaw>;
}
