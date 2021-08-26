export type BIOM_TYPE = 'plain' | 'hills' | 'forest' | 'swamp' | 'mountain';

export interface Cell {
  type: BIOM_TYPE;
  readyToSet: boolean;
}

export interface GameI {
  map: {
    grid: Cell[][];
    tempData: {
      _allCellsCount: number;
      _allProportionsCount: number;
      _allCellsWithType: Record<BIOM_TYPE, number>;
      emptyCellsCount: number;
      emptyAvailableCells: string[];
      remain: Record<BIOM_TYPE, number>;
      currentProportionsCount: Record<BIOM_TYPE, number>;
    };
  };
  createOptions: any;
}

export interface GameCreateOptions {
  mapSizeX: number;
  mapSizeY: number;
  proportions: Record<BIOM_TYPE, number>;
}