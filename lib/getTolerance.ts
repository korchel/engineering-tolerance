import { fitTypes } from "./constants";

export const getTolerance = (
  fitType: string,
  maxInterference: unknown,
  minInterference: unknown,
  maxClearance: unknown,
  minClearance: unknown
) => {
  if (fitType === fitTypes.clearance) {
    return (maxClearance as number) - (minClearance as number);
  }
  if (fitType === fitTypes.interference) {
    return (
      Math.abs(maxInterference as number) - Math.abs(minInterference as number)
    );
  }

  return Math.abs(maxInterference as number) + (maxClearance as number);
};
