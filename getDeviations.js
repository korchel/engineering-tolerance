import { sizeRanges } from "./data/sizeRanges.js";

const getDeviations = (size, type, grade, tolerance) => {
  const sizeRangeType = sizeRanges.find((item) => {
    if (size >= item.range.from && size <= item.range.to) {
      return true;
    }
    return false;
  }).type;

  basicDeviations[type][tolerance];
  console.log(sizeRangeType);
};

getDeviations(100);
console.log();
