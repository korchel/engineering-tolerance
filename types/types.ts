export type Grade = number | "01";

export type Deltas = { [key: number]: { [key: number]: number } };

export type SizeRange = { type: number; range: { from: number; to: number } }[];

export type DimensionType = "hole" | "shaft";

export type Tolerance = {
  [key: number | string]: { [key: number]: number };
};

export type Deviations = { upperDeviation: number; lowerDeviation: number };
