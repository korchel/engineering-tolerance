import { sizeRanges } from "./data/sizeRanges.js";
import { basicDeviations } from "./data/basicDeviations.js";
import { tolerances } from "./data/tolerances.js";

const getDeviations = (size, type, basicDeviation, grade) => {
  const sizeRangeType = sizeRanges.find((item) => {
    if (size >= item.range.from && size <= item.range.to) {
      return true;
    }
    return false;
  }).type;

  const deviations = basicDeviations[type][basicDeviation][sizeRangeType];
  const tolerance = tolerances[grade][sizeRangeType];

  const { upperDeviation, lowerDeviation, sameForAllGrades } = deviations;
  if (sameForAllGrades) {
    if (upperDeviation === null || lowerDeviation === null) {
      return null;
    }
    return upperDeviation
      ? { upperDeviation, lowerDeviation: upperDeviation - tolerance }
      : { lowerDeviation, upperDeviation: lowerDeviation + tolerance };
  }
  if (upperDeviation[grade] === null || lowerDeviation[grade] === null) {
    return null;
  }
  return upperDeviation
    ? {
        upperDeviation: upperDeviation[grade],
        lowerDeviation: upperDeviation[grade] - tolerance,
      }
    : {
        lowerDeviation: lowerDeviation[grade],
        upperDeviation: lowerDeviation[grade] + tolerance,
      };
};

console.log(getDeviations(48, "hole", "D", 1));
