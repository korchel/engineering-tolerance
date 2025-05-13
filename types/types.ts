export type Grade = number | "01";

export type Deltas = { [key: number]: { [key: number]: number } };

export type SizeRange = { type: number; range: { from: number; to: number } }[];

export type DimensionType = "hole" | "shaft";

export type Tolerance = {
  [key: number | string]: { [key: number]: number };
};

export type Deviations = { upperDeviation: number; lowerDeviation: number };

export interface IToleranceData {
  lowerDeviation: number;
  upperDeviation: number;
  toleranceName: string;
  grade: Grade;
}

export interface InputDeviationsData {
  upperDeviation: null | number;
  lowerDeviation: null | number;
}

export type SpecialITs = {
  shaft: {
    [key: number]: string[];
  };
  hole: {
    [key: number]: string[];
  };
};
