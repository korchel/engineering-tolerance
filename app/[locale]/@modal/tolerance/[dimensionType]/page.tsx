import { TolerancePickModal } from "../../../../../components/tolerancePage/tolerancePickModal/TolerancePickModal";
import {
  commonITs,
  gradeNames,
  notForFitsITs,
  recommendedITs,
  toleranceNames,
  usageSizeRanges,
} from "../../../../../data";
import { getDeviations } from "../../../../../lib";
import { DimensionType } from "../../../../../types";

export default async function Page({
  searchParams,
  params,
}: {
  params: Promise<{ dimensionType: DimensionType }>;
  searchParams: Promise<{ size: number }>;
}) {
  const size = +(await searchParams).size;
  const { dimensionType } = await params;

  const usageSizeRange = usageSizeRanges.find((item) => {
    if (size >= item.range.from && size <= item.range.to) {
      return true;
    }
    return false;
  })!.type;
  const deviationsData = gradeNames.map((grade) => {
    return toleranceNames[dimensionType].map((tolerance) => {
      const deviations = getDeviations(size, dimensionType, tolerance, grade);
      const isCommonIT = commonITs[dimensionType][usageSizeRange].includes(
        tolerance + grade
      );
      const isRecommendedIT = recommendedITs[dimensionType][
        usageSizeRange
      ].includes(tolerance + grade);
      const isNotForFits = notForFitsITs[dimensionType][
        usageSizeRange
      ].includes(tolerance + grade);
      return {
        toleranceName: tolerance,
        grade,
        deviations,
        isCommonIT,
        isRecommendedIT,
        isNotForFits,
      };
    });
  });
  return (
    <TolerancePickModal
      dimensionType={dimensionType}
      deviationsData={deviationsData}
    />
  );
}
