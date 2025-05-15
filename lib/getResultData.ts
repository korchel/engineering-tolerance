import { getFitType } from "./getFitType";
import { fitTypes } from "./constants";
import { getTolerance } from "./getTolerance";

interface Props {
  size: number;
  EI: number;
  ES: number;
  ei: number;
  es: number;
}

export const getResultData = ({ size, ES, EI, es, ei }: Props) => {
  const maxHoleSize = size + ES / 1000;
  const minHoleSize = size + EI / 1000;
  const maxShaftSize = size + es / 1000;
  const minShaftSize = size + ei / 1000;

  const fitType = getFitType(
    maxHoleSize,
    minHoleSize,
    maxShaftSize,
    minShaftSize
  );

  const minClearance =
    fitType === fitTypes.clearance ? (minHoleSize - maxShaftSize) * 1000 : null;
  const maxClearance =
    fitType === fitTypes.clearance || fitType === fitTypes.transition
      ? (maxHoleSize - minShaftSize) * 1000
      : null;
  const minInterference =
    fitType === fitTypes.interference
      ? (maxHoleSize - minShaftSize) * 1000
      : null;
  const maxInterference =
    fitType === fitTypes.interference || fitType === fitTypes.transition
      ? (minHoleSize - maxShaftSize) * 1000
      : null;

  const tolerance = getTolerance(
    fitType,
    maxInterference,
    minInterference,
    maxClearance,
    minClearance
  );

  return {
    fitType,
    maxHoleSize,
    minHoleSize,
    maxShaftSize,
    minShaftSize,
    minClearance,
    maxClearance,
    minInterference,
    maxInterference,
    tolerance,
  };
};
