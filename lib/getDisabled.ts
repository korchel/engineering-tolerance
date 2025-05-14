import { Deviations, InputDeviationsData } from "../types";

export const getDisabled = (
  deviations: Deviations | null,
  inputDeviations: InputDeviationsData
) => {
  if (deviations === null) {
    return true;
  }
  if (
    inputDeviations.upperDeviation === null ||
    inputDeviations.lowerDeviation === null
  ) {
    return false;
  }
  return !(
    deviations.upperDeviation < inputDeviations.upperDeviation &&
    deviations.lowerDeviation > inputDeviations.lowerDeviation
  );
};
