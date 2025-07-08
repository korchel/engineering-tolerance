import { Deviations, InputDeviationsData } from "../types";

export const getDisabled = (
  deviations: Deviations | null,
  inputDeviations: InputDeviationsData
) => {
  if (deviations === null) {
    return true;
  }

  const { upperDeviation, lowerDeviation } = deviations;
  const inputUpperDeviation = inputDeviations.upperDeviation;
  const inputLowerDeviation = inputDeviations.lowerDeviation;

  if (inputUpperDeviation === null || inputLowerDeviation === null) {
    return false;
  }

  if (
    !(
      upperDeviation <= inputUpperDeviation &&
      lowerDeviation >= inputLowerDeviation
    )
  ) {
    return true;
  }

  return false;
};
