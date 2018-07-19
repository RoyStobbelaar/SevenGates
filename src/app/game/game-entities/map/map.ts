import { TileMap } from './tilemap';


export class Map {

  // Properties
  public name: string; // Each map/maplayer should have a name
  public tileMaps: TileMap[]; // Tilemaps can intersect (house on a bg for example)
}
