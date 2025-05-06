import clsx from "clsx";

interface Props {
  size: number;
  EI: number;
  ES: number;
  ei: number;
  es: number;
}

const fitTypes = {
  clearance: "С зазором",
  interference: "С натягом",
  transition: "Переходная",
};

export const getResultData = ({ size, ES, EI, es, ei }: Props) => {
  const maxHoleSize = size + ES / 1000;
  const minHoleSize = size + EI / 1000;
  const maxShaftSize = size + es / 1000;
  const minShaftSize = size + ei / 1000;

  const fitType = clsx({
    [fitTypes.clearance]: minHoleSize > maxShaftSize,
    [fitTypes.interference]: minShaftSize > maxHoleSize,
    [fitTypes.transition]:
      maxShaftSize > minHoleSize && minHoleSize > minShaftSize,
  });

  const tolerance = {
    [fitTypes.clearance]: ES - ei + EI - es,
    [fitTypes.interference]: es - EI + ei - ES,
    [fitTypes.transition]: ES - ei + es - EI,
  }[fitType];

  const minClearance =
    fitType === fitTypes.clearance
      ? ((minHoleSize - maxShaftSize) * 1000).toFixed(1)
      : "--";
  const maxClearance =
    fitType === fitTypes.clearance || fitType === fitTypes.transition
      ? ((maxHoleSize - minShaftSize) * 1000).toFixed(1)
      : "--";
  const minInterference =
    fitType === fitTypes.interference
      ? ((minShaftSize - maxHoleSize) * 1000).toFixed(1)
      : "--";
  const maxInterference =
    fitType === fitTypes.interference || fitType === fitTypes.transition
      ? ((maxShaftSize - minHoleSize) * 1000).toFixed(1)
      : "--";
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
