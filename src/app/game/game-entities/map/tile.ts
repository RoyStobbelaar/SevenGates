import { Position } from './../../helper-classes/position';


export class Tile {

  // Properties
  public position: Position;
  public sprite: string;

  constructor(p: Position, sprite: string) {
    this.position = p;
    this.sprite = sprite;
  }

}
