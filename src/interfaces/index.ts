export type BIOM_TYPE = 'plain' | 'hills' | 'forest' | 'swamp' | 'mountain';

export interface Cell {
  type: BIOM_TYPE;
}

export interface GameI {
  map: Cell[][];
  options: any;
}

export interface GameCreateOptions {
  mapSizeX: number;
  mapSizeY: number;
  biomCells: Record<BIOM_TYPE, number>;
}