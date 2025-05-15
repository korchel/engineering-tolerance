import { fitTypes } from "./constants";

export const getFitType = (
  maxHoleSize: number,
  minHoleSize: number,
  maxShaftSize: number,
  minShaftSize: number
) => {
  if (maxHoleSize > maxShaftSize) {
    return minHoleSize > maxShaftSize
      ? fitTypes.clearance
      : fitTypes.transition;
  }
  if (maxShaftSize > maxHoleSize) {
    return minShaftSize > maxHoleSize
      ? fitTypes.interference
      : fitTypes.transition;
  }
  return fitTypes.transition;
};
