import { sizeRanges } from "./sizeRanges";
import { basicDeviations } from "./basicDeviations";
import { tolerances } from "./tolerances";
import { Deviations, DimensionType, Grade } from "../types/types";

export const getDeviations = (
  size: number,
  type: DimensionType,
  toleranceName: string,
  grade: number | string // fix Grade type
): null | Deviations => {
  const sizeRangeType = sizeRanges.find((item) => {
    if (size >= item.range.from && size <= item.range.to) {
      return true;
    }
    return false;
  })!.type;

  const tolerance = tolerances[String(grade)][sizeRangeType]; // fix Grade type

  if (toleranceName === "JS" || toleranceName === "js") {
    return {
      lowerDeviation: -tolerance / 2,
      upperDeviation: tolerance / 2,
    };
  }

  const deviations = basicDeviations[type][toleranceName][sizeRangeType];
  const { upperDeviation, lowerDeviation, sameForAllGrades } = deviations;

  if (sameForAllGrades) {
    if (upperDeviation === null || lowerDeviation === null) {
      return null;
    }
    return upperDeviation || upperDeviation === 0
      ? {
          upperDeviation: upperDeviation as number,
          lowerDeviation: (upperDeviation as number) - tolerance,
        }
      : {
          lowerDeviation: lowerDeviation as number,
          upperDeviation: (lowerDeviation as number) + tolerance,
        };
  }

  if (upperDeviation || upperDeviation === 0) {
    const upperDeviationValue = (
      upperDeviation as { [key: number | string]: number | null }
    )[grade];
    if (upperDeviationValue === null) {
      return null;
    }
    return {
      upperDeviation: upperDeviationValue as number,
      lowerDeviation: (upperDeviationValue as number) - tolerance,
    };
  }

  if (lowerDeviation || lowerDeviation === 0) {
    const lowerDeviationValue = (
      lowerDeviation as { [key: number | string]: number | null }
    )[grade];
    if (lowerDeviationValue === null) {
      return null;
    }
    return {
      lowerDeviation: lowerDeviationValue as number,
      upperDeviation: (lowerDeviationValue as number) + tolerance,
    };
  }
  return null;
};

// for (const toleranceName of toleranceNames.hole) {
//   console.log("!!!!!!!!!!", toleranceName);
//   for (const gradeName of gradeNames) {
//     console.log(
//       toleranceName + gradeName,
//       getDeviations(48, "hole", toleranceName, gradeName)
//     );
//   }
// }
