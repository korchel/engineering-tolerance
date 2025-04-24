//мkм

import { DimensionType, Grade } from "../types/types";
import { deltas } from "./deltas";

import { gradeNames } from "./gradeNames";

// {
//   type: {
//     sizeRange: {sameForAllGrades: boolean, lowerDeviation: number | {grade: {lowerDeviation: number}}, upperDeviation: number| {grade: {upperDeviation: number}}}
//   }
// }

const getDelta = (grade: Grade, sizeRangeType: number): number => {
  return deltas[grade as number][sizeRangeType];
};

const getDeviationsForGradeRange = (
  from: Grade,
  to: number,
  deviation: number | null,
  withDelta: boolean,
  sizeRangeType: number
): { [key: string | number]: number | null } => {
  let start;
  const end = to + 2;
  if (from === "01") {
    start = 0;
  } else {
    start = from + 1;
  }
  if (withDelta && deviation !== null) {
    return gradeNames
      .slice(start, end)
      .reduce((acc: Record<string, number | null>, value: Grade) => {
        acc[value] = deviation + getDelta(value, sizeRangeType);
        return acc;
      }, {});
  }
  return gradeNames
    .slice(start, end)
    .reduce((acc: Record<string, number | null>, value: Grade) => {
      acc[value] = deviation;
      return acc;
    }, {});
};

type BasicDeviation = {
  [key in DimensionType]: {
    [key: string]: {
      [key: number]: {
        sameForAllGrades: boolean;
        lowerDeviation?:
          | { [key: string | number]: number | null }
          | number
          | null;
        upperDeviation?:
          | { [key: string | number]: number | null }
          | number
          | null;
      };
    };
  };
};

export const basicDeviations: BasicDeviation = {
  hole: {
    A: {
      1: { sameForAllGrades: true, lowerDeviation: 270 },
      2: { sameForAllGrades: true, lowerDeviation: 270 },
      3: { sameForAllGrades: true, lowerDeviation: 280 },
      4: { sameForAllGrades: true, lowerDeviation: 290 },
      5: { sameForAllGrades: true, lowerDeviation: 290 },
      6: { sameForAllGrades: true, lowerDeviation: 300 },
      7: { sameForAllGrades: true, lowerDeviation: 300 },
      8: { sameForAllGrades: true, lowerDeviation: 310 },
      9: { sameForAllGrades: true, lowerDeviation: 320 },
      10: { sameForAllGrades: true, lowerDeviation: 340 },
      11: { sameForAllGrades: true, lowerDeviation: 360 },
      12: { sameForAllGrades: true, lowerDeviation: 380 },
      13: { sameForAllGrades: true, lowerDeviation: 410 },
      14: { sameForAllGrades: true, lowerDeviation: 460 },
      15: { sameForAllGrades: true, lowerDeviation: 520 },
      16: { sameForAllGrades: true, lowerDeviation: 580 },
      17: { sameForAllGrades: true, lowerDeviation: 660 },
      18: { sameForAllGrades: true, lowerDeviation: 740 },
      19: { sameForAllGrades: true, lowerDeviation: 820 },
      20: { sameForAllGrades: true, lowerDeviation: 920 },
      21: { sameForAllGrades: true, lowerDeviation: 1050 },
      22: { sameForAllGrades: true, lowerDeviation: 1200 },
      23: { sameForAllGrades: true, lowerDeviation: 1350 },
      24: { sameForAllGrades: true, lowerDeviation: 1500 },
      25: { sameForAllGrades: true, lowerDeviation: 1650 },
    },
    B: {
      1: { sameForAllGrades: true, lowerDeviation: 140 },
      2: { sameForAllGrades: true, lowerDeviation: 140 },
      3: { sameForAllGrades: true, lowerDeviation: 150 },
      4: { sameForAllGrades: true, lowerDeviation: 150 },
      5: { sameForAllGrades: true, lowerDeviation: 150 },
      6: { sameForAllGrades: true, lowerDeviation: 160 },
      7: { sameForAllGrades: true, lowerDeviation: 160 },
      8: { sameForAllGrades: true, lowerDeviation: 170 },
      9: { sameForAllGrades: true, lowerDeviation: 180 },
      10: { sameForAllGrades: true, lowerDeviation: 190 },
      11: { sameForAllGrades: true, lowerDeviation: 200 },
      12: { sameForAllGrades: true, lowerDeviation: 220 },
      13: { sameForAllGrades: true, lowerDeviation: 240 },
      14: { sameForAllGrades: true, lowerDeviation: 260 },
      15: { sameForAllGrades: true, lowerDeviation: 280 },
      16: { sameForAllGrades: true, lowerDeviation: 310 },
      17: { sameForAllGrades: true, lowerDeviation: 340 },
      18: { sameForAllGrades: true, lowerDeviation: 380 },
      19: { sameForAllGrades: true, lowerDeviation: 420 },
      20: { sameForAllGrades: true, lowerDeviation: 480 },
      21: { sameForAllGrades: true, lowerDeviation: 540 },
      22: { sameForAllGrades: true, lowerDeviation: 600 },
      23: { sameForAllGrades: true, lowerDeviation: 680 },
      24: { sameForAllGrades: true, lowerDeviation: 760 },
      25: { sameForAllGrades: true, lowerDeviation: 840 },
    },
    C: {
      1: { sameForAllGrades: true, lowerDeviation: 60 },
      2: { sameForAllGrades: true, lowerDeviation: 70 },
      3: { sameForAllGrades: true, lowerDeviation: 80 },
      4: { sameForAllGrades: true, lowerDeviation: 95 },
      5: { sameForAllGrades: true, lowerDeviation: 95 },
      6: { sameForAllGrades: true, lowerDeviation: 110 },
      7: { sameForAllGrades: true, lowerDeviation: 110 },
      8: { sameForAllGrades: true, lowerDeviation: 120 },
      9: { sameForAllGrades: true, lowerDeviation: 130 },
      10: { sameForAllGrades: true, lowerDeviation: 140 },
      11: { sameForAllGrades: true, lowerDeviation: 150 },
      12: { sameForAllGrades: true, lowerDeviation: 170 },
      13: { sameForAllGrades: true, lowerDeviation: 180 },
      14: { sameForAllGrades: true, lowerDeviation: 200 },
      15: { sameForAllGrades: true, lowerDeviation: 210 },
      16: { sameForAllGrades: true, lowerDeviation: 230 },
      17: { sameForAllGrades: true, lowerDeviation: 240 },
      18: { sameForAllGrades: true, lowerDeviation: 260 },
      19: { sameForAllGrades: true, lowerDeviation: 280 },
      20: { sameForAllGrades: true, lowerDeviation: 300 },
      21: { sameForAllGrades: true, lowerDeviation: 330 },
      22: { sameForAllGrades: true, lowerDeviation: 360 },
      23: { sameForAllGrades: true, lowerDeviation: 400 },
      24: { sameForAllGrades: true, lowerDeviation: 440 },
      25: { sameForAllGrades: true, lowerDeviation: 480 },
    },
    CD: {
      1: { sameForAllGrades: true, lowerDeviation: 34 },
      2: { sameForAllGrades: true, lowerDeviation: 46 },
      3: { sameForAllGrades: true, lowerDeviation: 56 },
      4: { sameForAllGrades: true, lowerDeviation: 70 },
      5: { sameForAllGrades: true, lowerDeviation: 70 },
      6: { sameForAllGrades: true, lowerDeviation: 85 },
      7: { sameForAllGrades: true, lowerDeviation: 85 },
      8: { sameForAllGrades: true, lowerDeviation: 100 },
      9: { sameForAllGrades: true, lowerDeviation: 100 },
      10: { sameForAllGrades: true, lowerDeviation: null },
      11: { sameForAllGrades: true, lowerDeviation: null },
      12: { sameForAllGrades: true, lowerDeviation: null },
      13: { sameForAllGrades: true, lowerDeviation: null },
      14: { sameForAllGrades: true, lowerDeviation: null },
      15: { sameForAllGrades: true, lowerDeviation: null },
      16: { sameForAllGrades: true, lowerDeviation: null },
      17: { sameForAllGrades: true, lowerDeviation: null },
      18: { sameForAllGrades: true, lowerDeviation: null },
      19: { sameForAllGrades: true, lowerDeviation: null },
      20: { sameForAllGrades: true, lowerDeviation: null },
      21: { sameForAllGrades: true, lowerDeviation: null },
      22: { sameForAllGrades: true, lowerDeviation: null },
      23: { sameForAllGrades: true, lowerDeviation: null },
      24: { sameForAllGrades: true, lowerDeviation: null },
      25: { sameForAllGrades: true, lowerDeviation: null },
    },
    D: {
      1: { sameForAllGrades: true, lowerDeviation: 20 },
      2: { sameForAllGrades: true, lowerDeviation: 30 },
      3: { sameForAllGrades: true, lowerDeviation: 40 },
      4: { sameForAllGrades: true, lowerDeviation: 50 },
      5: { sameForAllGrades: true, lowerDeviation: 50 },
      6: { sameForAllGrades: true, lowerDeviation: 65 },
      7: { sameForAllGrades: true, lowerDeviation: 65 },
      8: { sameForAllGrades: true, lowerDeviation: 80 },
      9: { sameForAllGrades: true, lowerDeviation: 80 },
      10: { sameForAllGrades: true, lowerDeviation: 100 },
      11: { sameForAllGrades: true, lowerDeviation: 100 },
      12: { sameForAllGrades: true, lowerDeviation: 120 },
      13: { sameForAllGrades: true, lowerDeviation: 120 },
      14: { sameForAllGrades: true, lowerDeviation: 145 },
      15: { sameForAllGrades: true, lowerDeviation: 145 },
      16: { sameForAllGrades: true, lowerDeviation: 145 },
      17: { sameForAllGrades: true, lowerDeviation: 170 },
      18: { sameForAllGrades: true, lowerDeviation: 170 },
      19: { sameForAllGrades: true, lowerDeviation: 170 },
      20: { sameForAllGrades: true, lowerDeviation: 190 },
      21: { sameForAllGrades: true, lowerDeviation: 190 },
      22: { sameForAllGrades: true, lowerDeviation: 210 },
      23: { sameForAllGrades: true, lowerDeviation: 210 },
      24: { sameForAllGrades: true, lowerDeviation: 230 },
      25: { sameForAllGrades: true, lowerDeviation: 230 },
    },
    E: {
      1: { sameForAllGrades: true, lowerDeviation: 14 },
      2: { sameForAllGrades: true, lowerDeviation: 20 },
      3: { sameForAllGrades: true, lowerDeviation: 25 },
      4: { sameForAllGrades: true, lowerDeviation: 32 },
      5: { sameForAllGrades: true, lowerDeviation: 32 },
      6: { sameForAllGrades: true, lowerDeviation: 40 },
      7: { sameForAllGrades: true, lowerDeviation: 40 },
      8: { sameForAllGrades: true, lowerDeviation: 50 },
      9: { sameForAllGrades: true, lowerDeviation: 50 },
      10: { sameForAllGrades: true, lowerDeviation: 60 },
      11: { sameForAllGrades: true, lowerDeviation: 60 },
      12: { sameForAllGrades: true, lowerDeviation: 72 },
      13: { sameForAllGrades: true, lowerDeviation: 72 },
      14: { sameForAllGrades: true, lowerDeviation: 85 },
      15: { sameForAllGrades: true, lowerDeviation: 85 },
      16: { sameForAllGrades: true, lowerDeviation: 85 },
      17: { sameForAllGrades: true, lowerDeviation: 100 },
      18: { sameForAllGrades: true, lowerDeviation: 100 },
      19: { sameForAllGrades: true, lowerDeviation: 100 },
      20: { sameForAllGrades: true, lowerDeviation: 110 },
      21: { sameForAllGrades: true, lowerDeviation: 110 },
      22: { sameForAllGrades: true, lowerDeviation: 125 },
      23: { sameForAllGrades: true, lowerDeviation: 125 },
      24: { sameForAllGrades: true, lowerDeviation: 135 },
      25: { sameForAllGrades: true, lowerDeviation: 135 },
    },
    EF: {
      1: { sameForAllGrades: true, lowerDeviation: 10 },
      2: { sameForAllGrades: true, lowerDeviation: 14 },
      3: { sameForAllGrades: true, lowerDeviation: 18 },
      4: { sameForAllGrades: true, lowerDeviation: 23 },
      5: { sameForAllGrades: true, lowerDeviation: 23 },
      6: { sameForAllGrades: true, lowerDeviation: 28 },
      7: { sameForAllGrades: true, lowerDeviation: 28 },
      8: { sameForAllGrades: true, lowerDeviation: 35 },
      9: { sameForAllGrades: true, lowerDeviation: 35 },
      10: { sameForAllGrades: true, lowerDeviation: null },
      11: { sameForAllGrades: true, lowerDeviation: null },
      12: { sameForAllGrades: true, lowerDeviation: null },
      13: { sameForAllGrades: true, lowerDeviation: null },
      14: { sameForAllGrades: true, lowerDeviation: null },
      15: { sameForAllGrades: true, lowerDeviation: null },
      16: { sameForAllGrades: true, lowerDeviation: null },
      17: { sameForAllGrades: true, lowerDeviation: null },
      18: { sameForAllGrades: true, lowerDeviation: null },
      19: { sameForAllGrades: true, lowerDeviation: null },
      20: { sameForAllGrades: true, lowerDeviation: null },
      21: { sameForAllGrades: true, lowerDeviation: null },
      22: { sameForAllGrades: true, lowerDeviation: null },
      23: { sameForAllGrades: true, lowerDeviation: null },
      24: { sameForAllGrades: true, lowerDeviation: null },
      25: { sameForAllGrades: true, lowerDeviation: null },
    },
    F: {
      1: { sameForAllGrades: true, lowerDeviation: 6 },
      2: { sameForAllGrades: true, lowerDeviation: 10 },
      3: { sameForAllGrades: true, lowerDeviation: 13 },
      4: { sameForAllGrades: true, lowerDeviation: 16 },
      5: { sameForAllGrades: true, lowerDeviation: 16 },
      6: { sameForAllGrades: true, lowerDeviation: 20 },
      7: { sameForAllGrades: true, lowerDeviation: 20 },
      8: { sameForAllGrades: true, lowerDeviation: 25 },
      9: { sameForAllGrades: true, lowerDeviation: 25 },
      10: { sameForAllGrades: true, lowerDeviation: 30 },
      11: { sameForAllGrades: true, lowerDeviation: 30 },
      12: { sameForAllGrades: true, lowerDeviation: 36 },
      13: { sameForAllGrades: true, lowerDeviation: 36 },
      14: { sameForAllGrades: true, lowerDeviation: 43 },
      15: { sameForAllGrades: true, lowerDeviation: 43 },
      16: { sameForAllGrades: true, lowerDeviation: 43 },
      17: { sameForAllGrades: true, lowerDeviation: 50 },
      18: { sameForAllGrades: true, lowerDeviation: 50 },
      19: { sameForAllGrades: true, lowerDeviation: 50 },
      20: { sameForAllGrades: true, lowerDeviation: 56 },
      21: { sameForAllGrades: true, lowerDeviation: 56 },
      22: { sameForAllGrades: true, lowerDeviation: 62 },
      23: { sameForAllGrades: true, lowerDeviation: 62 },
      24: { sameForAllGrades: true, lowerDeviation: 68 },
      25: { sameForAllGrades: true, lowerDeviation: 68 },
    },
    FG: {
      1: { sameForAllGrades: true, lowerDeviation: 4 },
      2: { sameForAllGrades: true, lowerDeviation: 6 },
      3: { sameForAllGrades: true, lowerDeviation: 8 },
      4: { sameForAllGrades: true, lowerDeviation: 10 },
      5: { sameForAllGrades: true, lowerDeviation: 10 },
      6: { sameForAllGrades: true, lowerDeviation: 12 },
      7: { sameForAllGrades: true, lowerDeviation: 12 },
      8: { sameForAllGrades: true, lowerDeviation: 15 },
      9: { sameForAllGrades: true, lowerDeviation: 15 },
      10: { sameForAllGrades: true, lowerDeviation: null },
      11: { sameForAllGrades: true, lowerDeviation: null },
      12: { sameForAllGrades: true, lowerDeviation: null },
      13: { sameForAllGrades: true, lowerDeviation: null },
      14: { sameForAllGrades: true, lowerDeviation: null },
      15: { sameForAllGrades: true, lowerDeviation: null },
      16: { sameForAllGrades: true, lowerDeviation: null },
      17: { sameForAllGrades: true, lowerDeviation: null },
      18: { sameForAllGrades: true, lowerDeviation: null },
      19: { sameForAllGrades: true, lowerDeviation: null },
      20: { sameForAllGrades: true, lowerDeviation: null },
      21: { sameForAllGrades: true, lowerDeviation: null },
      22: { sameForAllGrades: true, lowerDeviation: null },
      23: { sameForAllGrades: true, lowerDeviation: null },
      24: { sameForAllGrades: true, lowerDeviation: null },
      25: { sameForAllGrades: true, lowerDeviation: null },
    },
    G: {
      1: { sameForAllGrades: true, lowerDeviation: 2 },
      2: { sameForAllGrades: true, lowerDeviation: 4 },
      3: { sameForAllGrades: true, lowerDeviation: 5 },
      4: { sameForAllGrades: true, lowerDeviation: 6 },
      5: { sameForAllGrades: true, lowerDeviation: 6 },
      6: { sameForAllGrades: true, lowerDeviation: 7 },
      7: { sameForAllGrades: true, lowerDeviation: 7 },
      8: { sameForAllGrades: true, lowerDeviation: 9 },
      9: { sameForAllGrades: true, lowerDeviation: 9 },
      10: { sameForAllGrades: true, lowerDeviation: 10 },
      11: { sameForAllGrades: true, lowerDeviation: 10 },
      12: { sameForAllGrades: true, lowerDeviation: 12 },
      13: { sameForAllGrades: true, lowerDeviation: 12 },
      14: { sameForAllGrades: true, lowerDeviation: 14 },
      15: { sameForAllGrades: true, lowerDeviation: 14 },
      16: { sameForAllGrades: true, lowerDeviation: 14 },
      17: { sameForAllGrades: true, lowerDeviation: 15 },
      18: { sameForAllGrades: true, lowerDeviation: 15 },
      19: { sameForAllGrades: true, lowerDeviation: 15 },
      20: { sameForAllGrades: true, lowerDeviation: 17 },
      21: { sameForAllGrades: true, lowerDeviation: 17 },
      22: { sameForAllGrades: true, lowerDeviation: 18 },
      23: { sameForAllGrades: true, lowerDeviation: 18 },
      24: { sameForAllGrades: true, lowerDeviation: 20 },
      25: { sameForAllGrades: true, lowerDeviation: 20 },
    },
    H: {
      1: { sameForAllGrades: true, lowerDeviation: 0 },
      2: { sameForAllGrades: true, lowerDeviation: 0 },
      3: { sameForAllGrades: true, lowerDeviation: 0 },
      4: { sameForAllGrades: true, lowerDeviation: 0 },
      5: { sameForAllGrades: true, lowerDeviation: 0 },
      6: { sameForAllGrades: true, lowerDeviation: 0 },
      7: { sameForAllGrades: true, lowerDeviation: 0 },
      8: { sameForAllGrades: true, lowerDeviation: 0 },
      9: { sameForAllGrades: true, lowerDeviation: 0 },
      10: { sameForAllGrades: true, lowerDeviation: 0 },
      11: { sameForAllGrades: true, lowerDeviation: 0 },
      12: { sameForAllGrades: true, lowerDeviation: 0 },
      13: { sameForAllGrades: true, lowerDeviation: 0 },
      14: { sameForAllGrades: true, lowerDeviation: 0 },
      15: { sameForAllGrades: true, lowerDeviation: 0 },
      16: { sameForAllGrades: true, lowerDeviation: 0 },
      17: { sameForAllGrades: true, lowerDeviation: 0 },
      18: { sameForAllGrades: true, lowerDeviation: 0 },
      19: { sameForAllGrades: true, lowerDeviation: 0 },
      20: { sameForAllGrades: true, lowerDeviation: 0 },
      21: { sameForAllGrades: true, lowerDeviation: 0 },
      22: { sameForAllGrades: true, lowerDeviation: 0 },
      23: { sameForAllGrades: true, lowerDeviation: 0 },
      24: { sameForAllGrades: true, lowerDeviation: 0 },
      25: { sameForAllGrades: true, lowerDeviation: 0 },
    },

    J: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 1),
          6: 2,
          7: 4,
          8: 6,
          ...getDeviationsForGradeRange(9, 18, null, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 2),
          6: 5,
          7: 6,
          8: 10,
          ...getDeviationsForGradeRange(9, 18, null, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 2),
          6: 5,
          7: 8,
          8: 12,
          ...getDeviationsForGradeRange(9, 18, null, false, 2),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 4),
          6: 6,
          7: 10,
          8: 15,
          ...getDeviationsForGradeRange(9, 18, null, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 5),
          6: 6,
          7: 10,
          8: 15,
          ...getDeviationsForGradeRange(9, 18, null, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 6),
          6: 8,
          7: 12,
          8: 20,
          ...getDeviationsForGradeRange(9, 18, null, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 7),
          6: 8,
          7: 12,
          8: 20,
          ...getDeviationsForGradeRange(9, 18, null, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 8),
          6: 10,
          7: 14,
          8: 24,
          ...getDeviationsForGradeRange(9, 18, null, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 9),
          6: 10,
          7: 14,
          8: 24,
          ...getDeviationsForGradeRange(9, 18, null, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 10),
          6: 13,
          7: 18,
          8: 28,
          ...getDeviationsForGradeRange(9, 18, null, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 11),
          6: 13,
          7: 18,
          8: 28,
          ...getDeviationsForGradeRange(9, 18, null, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 12),
          6: 16,
          7: 22,
          8: 34,
          ...getDeviationsForGradeRange(9, 18, null, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 12),
          6: 16,
          7: 22,
          8: 34,
          ...getDeviationsForGradeRange(9, 18, null, false, 12),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 14),
          6: 18,
          7: 26,
          8: 41,
          ...getDeviationsForGradeRange(9, 18, null, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 15),
          6: 18,
          7: 26,
          8: 41,
          ...getDeviationsForGradeRange(9, 18, null, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 16),
          6: 18,
          7: 26,
          8: 41,
          ...getDeviationsForGradeRange(9, 18, null, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 17),
          6: 22,
          7: 30,
          8: 47,
          ...getDeviationsForGradeRange(9, 18, null, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 18),
          6: 22,
          7: 30,
          8: 47,
          ...getDeviationsForGradeRange(9, 18, null, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 19),
          6: 22,
          7: 30,
          8: 47,
          ...getDeviationsForGradeRange(9, 18, null, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 20),
          6: 25,
          7: 36,
          8: 55,
          ...getDeviationsForGradeRange(9, 18, null, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 5),
          6: 25,
          7: 36,
          8: 55,
          ...getDeviationsForGradeRange(9, 18, null, false, 18),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 22),
          6: 29,
          7: 39,
          8: 60,
          ...getDeviationsForGradeRange(9, 18, null, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 23),
          6: 29,
          7: 39,
          8: 60,
          ...getDeviationsForGradeRange(9, 18, null, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 24),
          6: 33,
          7: 43,
          8: 66,
          ...getDeviationsForGradeRange(9, 18, null, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 5, null, false, 25),
          6: 33,
          7: 43,
          8: 66,
          ...getDeviationsForGradeRange(9, 18, null, false, 25),
        },
      },
    },
    K: {
      1: {
        sameForAllGrades: true,
        upperDeviation: 0,
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 8, -1, true, 2),
          ...getDeviationsForGradeRange(9, 18, null, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 8, -1, true, 3),
          ...getDeviationsForGradeRange(9, 18, null, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 8, -1, true, 4),
          ...getDeviationsForGradeRange(9, 18, null, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 8, -1, true, 5),
          ...getDeviationsForGradeRange(9, 18, null, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 8, -2, true, 6),
          ...getDeviationsForGradeRange(9, 18, null, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 8, -2, true, 7),
          ...getDeviationsForGradeRange(9, 18, null, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 8, -2, true, 8),
          ...getDeviationsForGradeRange(9, 18, null, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 8, -2, true, 9),
          ...getDeviationsForGradeRange(9, 18, null, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 8, -2, true, 10),
          ...getDeviationsForGradeRange(9, 18, null, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 8, -2, true, 11),
          ...getDeviationsForGradeRange(9, 18, null, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 8, -3, true, 12),
          ...getDeviationsForGradeRange(9, 18, null, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 8, -3, true, 13),
          ...getDeviationsForGradeRange(9, 18, null, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 8, -3, true, 14),
          ...getDeviationsForGradeRange(9, 18, null, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 8, -3, true, 15),
          ...getDeviationsForGradeRange(9, 18, null, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 8, -3, true, 16),
          ...getDeviationsForGradeRange(9, 18, null, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 8, -4, true, 17),
          ...getDeviationsForGradeRange(9, 18, null, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 8, -4, true, 18),
          ...getDeviationsForGradeRange(9, 18, null, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 8, -4, true, 19),
          ...getDeviationsForGradeRange(9, 18, null, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 8, -4, true, 20),
          ...getDeviationsForGradeRange(9, 18, null, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 8, -4, true, 21),
          ...getDeviationsForGradeRange(9, 18, null, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 8, -4, true, 22),
          ...getDeviationsForGradeRange(9, 18, null, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 8, -4, true, 23),
          ...getDeviationsForGradeRange(9, 18, null, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 8, -5, true, 24),
          ...getDeviationsForGradeRange(9, 18, null, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 8, -5, true, 25),
          ...getDeviationsForGradeRange(9, 18, null, false, 25),
        },
      },
    },
    M: {
      1: {
        sameForAllGrades: true,
        upperDeviation: -2,
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 8, -4, true, 2),
          ...getDeviationsForGradeRange(9, 18, -4, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 8, -6, true, 3),
          ...getDeviationsForGradeRange(9, 18, -6, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 8, -7, true, 4),
          ...getDeviationsForGradeRange(9, 18, -7, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 8, -7, true, 5),
          ...getDeviationsForGradeRange(9, 18, -7, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 8, -8, true, 6),
          ...getDeviationsForGradeRange(9, 18, -8, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 8, -8, true, 7),
          ...getDeviationsForGradeRange(9, 18, -8, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 8, -9, true, 8),
          ...getDeviationsForGradeRange(9, 18, -9, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 8, -9, true, 9),
          ...getDeviationsForGradeRange(9, 18, -9, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 8, -11, true, 10),
          ...getDeviationsForGradeRange(9, 18, -11, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 8, -11, true, 11),
          ...getDeviationsForGradeRange(9, 18, -11, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 8, -13, true, 12),
          ...getDeviationsForGradeRange(9, 18, -13, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 8, -13, true, 13),
          ...getDeviationsForGradeRange(9, 18, -13, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 8, -15, true, 14),
          ...getDeviationsForGradeRange(9, 18, -15, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 8, -15, true, 15),
          ...getDeviationsForGradeRange(9, 18, -15, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 8, -15, true, 16),
          ...getDeviationsForGradeRange(9, 18, -15, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 8, -17, true, 17),
          ...getDeviationsForGradeRange(9, 18, -17, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 8, -17, true, 18),
          ...getDeviationsForGradeRange(9, 18, -17, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 8, -17, true, 19),
          ...getDeviationsForGradeRange(9, 18, -17, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 8, -20, true, 20),
          ...getDeviationsForGradeRange(9, 18, -20, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 8, -20, true, 21),
          ...getDeviationsForGradeRange(9, 18, -20, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 8, -21, true, 22),
          ...getDeviationsForGradeRange(9, 18, -21, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 8, -21, true, 23),
          ...getDeviationsForGradeRange(9, 18, -21, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 8, -23, true, 24),
          ...getDeviationsForGradeRange(9, 18, -23, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 8, -23, true, 25),
          ...getDeviationsForGradeRange(9, 18, -23, false, 25),
        },
      },
    },
    N: {
      1: {
        sameForAllGrades: true,
        upperDeviation: -4,
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 8, -8, true, 2),
          ...getDeviationsForGradeRange(9, 18, -8, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 8, -10, true, 3),
          ...getDeviationsForGradeRange(9, 18, -10, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 8, -12, true, 4),
          ...getDeviationsForGradeRange(9, 18, -12, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 8, -12, true, 5),
          ...getDeviationsForGradeRange(9, 18, -12, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 8, -15, true, 6),
          ...getDeviationsForGradeRange(9, 18, -15, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 8, -15, true, 7),
          ...getDeviationsForGradeRange(9, 18, -15, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 8, -17, true, 8),
          ...getDeviationsForGradeRange(9, 18, -17, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 8, -17, true, 9),
          ...getDeviationsForGradeRange(9, 18, -17, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 8, -20, true, 10),
          ...getDeviationsForGradeRange(9, 18, -20, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 8, -20, true, 11),
          ...getDeviationsForGradeRange(9, 18, -20, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 8, -23, true, 12),
          ...getDeviationsForGradeRange(9, 18, -23, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 8, -23, true, 13),
          ...getDeviationsForGradeRange(9, 18, -23, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 8, -27, true, 14),
          ...getDeviationsForGradeRange(9, 18, -27, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 8, -27, true, 15),
          ...getDeviationsForGradeRange(9, 18, -27, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 8, -27, true, 16),
          ...getDeviationsForGradeRange(9, 18, -27, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 8, -31, true, 17),
          ...getDeviationsForGradeRange(9, 18, -31, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 8, -31, true, 18),
          ...getDeviationsForGradeRange(9, 18, -31, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 8, -31, true, 19),
          ...getDeviationsForGradeRange(9, 18, -31, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 8, -34, true, 20),
          ...getDeviationsForGradeRange(9, 18, -34, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 8, -34, true, 21),
          ...getDeviationsForGradeRange(9, 18, -34, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 8, -37, true, 22),
          ...getDeviationsForGradeRange(9, 18, -37, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 8, -37, true, 23),
          ...getDeviationsForGradeRange(9, 18, -37, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 8, -40, true, 24),
          ...getDeviationsForGradeRange(9, 18, -40, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 8, -40, true, 25),
          ...getDeviationsForGradeRange(9, 18, -40, false, 25),
        },
      },
    },

    P: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 1),
          ...getDeviationsForGradeRange(3, 7, -6, true, 1),
          ...getDeviationsForGradeRange(8, 18, -6, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -12, true, 2),
          ...getDeviationsForGradeRange(8, 18, -12, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 7, -15, true, 3),
          ...getDeviationsForGradeRange(8, 18, -15, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -18, true, 4),
          ...getDeviationsForGradeRange(8, 18, -18, false, 18),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -18, true, 5),
          ...getDeviationsForGradeRange(8, 18, -18, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -22, true, 6),
          ...getDeviationsForGradeRange(8, 18, -22, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -22, true, 7),
          ...getDeviationsForGradeRange(8, 18, -22, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -26, true, 8),
          ...getDeviationsForGradeRange(8, 18, -26, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -26, true, 9),
          ...getDeviationsForGradeRange(8, 18, -26, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -32, true, 10),
          ...getDeviationsForGradeRange(8, 18, -32, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -32, true, 11),
          ...getDeviationsForGradeRange(8, 18, -32, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -37, true, 12),
          ...getDeviationsForGradeRange(8, 18, -37, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -37, true, 13),
          ...getDeviationsForGradeRange(8, 18, -37, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -43, true, 14),
          ...getDeviationsForGradeRange(8, 18, -43, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -43, true, 15),
          ...getDeviationsForGradeRange(8, 18, -43, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -43, true, 16),
          ...getDeviationsForGradeRange(8, 18, -43, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -43, true, 17),
          ...getDeviationsForGradeRange(8, 18, -43, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -50, true, 18),
          ...getDeviationsForGradeRange(8, 18, -50, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -50, true, 19),
          ...getDeviationsForGradeRange(8, 18, -50, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -56, true, 20),
          ...getDeviationsForGradeRange(8, 18, -56, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -56, true, 21),
          ...getDeviationsForGradeRange(8, 18, -56, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -62, true, 22),
          ...getDeviationsForGradeRange(8, 18, -62, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -62, true, 23),
          ...getDeviationsForGradeRange(8, 18, -62, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -68, true, 24),
          ...getDeviationsForGradeRange(8, 18, -68, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -68, true, 25),
          ...getDeviationsForGradeRange(8, 18, -68, false, 25),
        },
      },
    },
    R: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -10, true, 1),
          ...getDeviationsForGradeRange(8, 18, -10, false, 2),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -15, true, 2),
          ...getDeviationsForGradeRange(8, 18, -15, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 7, -19, true, 3),
          ...getDeviationsForGradeRange(8, 18, -19, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 7, -23, true, 4),
          ...getDeviationsForGradeRange(8, 18, -23, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -23, true, 5),
          ...getDeviationsForGradeRange(8, 18, -23, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -28, true, 6),
          ...getDeviationsForGradeRange(8, 18, -28, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -28, true, 7),
          ...getDeviationsForGradeRange(8, 18, -28, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -34, true, 8),
          ...getDeviationsForGradeRange(8, 18, -34, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -34, true, 9),
          ...getDeviationsForGradeRange(8, 18, -34, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -41, true, 10),
          ...getDeviationsForGradeRange(8, 18, -41, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -43, true, 11),
          ...getDeviationsForGradeRange(8, 18, -43, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -51, true, 12),
          ...getDeviationsForGradeRange(8, 18, -51, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -54, true, 13),
          ...getDeviationsForGradeRange(8, 18, -54, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -63, true, 14),
          ...getDeviationsForGradeRange(8, 18, -63, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -65, true, 15),
          ...getDeviationsForGradeRange(8, 18, -65, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -68, true, 16),
          ...getDeviationsForGradeRange(8, 18, -68, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -77, true, 17),
          ...getDeviationsForGradeRange(8, 18, -77, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -80, true, 18),
          ...getDeviationsForGradeRange(8, 18, -80, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -84, true, 19),
          ...getDeviationsForGradeRange(8, 18, -84, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -94, true, 20),
          ...getDeviationsForGradeRange(8, 18, -94, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -98, true, 21),
          ...getDeviationsForGradeRange(8, 18, -98, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -108, true, 22),
          ...getDeviationsForGradeRange(8, 18, -108, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -114, true, 23),
          ...getDeviationsForGradeRange(8, 18, -114, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -126, true, 24),
          ...getDeviationsForGradeRange(8, 18, -126, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -132, true, 25),
          ...getDeviationsForGradeRange(8, 18, -132, false, 25),
        },
      },
    },
    S: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 1),
          ...getDeviationsForGradeRange(3, 7, -14, true, 1),
          ...getDeviationsForGradeRange(8, 18, -14, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -19, true, 2),
          ...getDeviationsForGradeRange(8, 18, -19, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 7, -23, true, 3),
          ...getDeviationsForGradeRange(8, 18, -23, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 7, -28, true, 4),
          ...getDeviationsForGradeRange(8, 18, -28, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -28, true, 5),
          ...getDeviationsForGradeRange(8, 18, -28, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -35, true, 6),
          ...getDeviationsForGradeRange(8, 18, -35, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -35, true, 7),
          ...getDeviationsForGradeRange(8, 18, -35, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -43, true, 8),
          ...getDeviationsForGradeRange(8, 18, -43, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -43, true, 9),
          ...getDeviationsForGradeRange(8, 18, -43, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -53, true, 10),
          ...getDeviationsForGradeRange(8, 18, -53, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -59, true, 11),
          ...getDeviationsForGradeRange(8, 18, -59, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -71, true, 12),
          ...getDeviationsForGradeRange(8, 18, -71, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -79, true, 13),
          ...getDeviationsForGradeRange(8, 18, -79, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -92, true, 14),
          ...getDeviationsForGradeRange(8, 18, -92, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -100, true, 11),
          ...getDeviationsForGradeRange(8, 18, -100, false, 11),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -108, true, 16),
          ...getDeviationsForGradeRange(8, 18, -108, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -122, true, 17),
          ...getDeviationsForGradeRange(8, 18, -122, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -130, true, 18),
          ...getDeviationsForGradeRange(8, 18, -130, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -140, true, 19),
          ...getDeviationsForGradeRange(8, 18, -140, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -158, true, 20),
          ...getDeviationsForGradeRange(8, 18, -158, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -170, true, 21),
          ...getDeviationsForGradeRange(8, 18, -170, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -190, true, 22),
          ...getDeviationsForGradeRange(8, 18, -190, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -208, true, 23),
          ...getDeviationsForGradeRange(8, 18, -208, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -232, true, 24),
          ...getDeviationsForGradeRange(8, 18, -232, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -252, true, 25),
          ...getDeviationsForGradeRange(8, 18, -252, false, 25),
        },
      },
    },
    T: {
      1: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      2: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      3: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      4: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      5: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      6: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -41, true, 7),
          ...getDeviationsForGradeRange(8, 18, -41, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -48, true, 8),
          ...getDeviationsForGradeRange(8, 18, -48, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -54, true, 9),
          ...getDeviationsForGradeRange(8, 18, -54, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -66, true, 10),
          ...getDeviationsForGradeRange(8, 18, -66, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -75, true, 11),
          ...getDeviationsForGradeRange(8, 18, -75, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -91, true, 12),
          ...getDeviationsForGradeRange(8, 18, -91, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -104, true, 13),
          ...getDeviationsForGradeRange(8, 18, -104, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -122, true, 14),
          ...getDeviationsForGradeRange(8, 18, -122, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -134, true, 15),
          ...getDeviationsForGradeRange(8, 18, -134, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -146, true, 16),
          ...getDeviationsForGradeRange(8, 18, -146, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -166, true, 17),
          ...getDeviationsForGradeRange(8, 18, -166, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -180, true, 18),
          ...getDeviationsForGradeRange(8, 18, -180, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -196, true, 19),
          ...getDeviationsForGradeRange(8, 18, -196, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -218, true, 20),
          ...getDeviationsForGradeRange(8, 18, -218, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -240, true, 21),
          ...getDeviationsForGradeRange(8, 18, -240, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -268, true, 22),
          ...getDeviationsForGradeRange(8, 18, -268, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -294, true, 24),
          ...getDeviationsForGradeRange(8, 18, -294, false, 24),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -330, true, 24),
          ...getDeviationsForGradeRange(8, 18, -330, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -360, true, 25),
          ...getDeviationsForGradeRange(8, 18, -360, false, 25),
        },
      },
    },
    U: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 1),
          ...getDeviationsForGradeRange(3, 7, -18, true, 1),
          ...getDeviationsForGradeRange(8, 18, -18, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -23, true, 2),
          ...getDeviationsForGradeRange(8, 18, -23, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 7, -28, true, 3),
          ...getDeviationsForGradeRange(8, 18, -28, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 7, -33, true, 4),
          ...getDeviationsForGradeRange(8, 18, -33, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -33, true, 5),
          ...getDeviationsForGradeRange(8, 18, -33, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -41, true, 6),
          ...getDeviationsForGradeRange(8, 18, -41, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -48, true, 7),
          ...getDeviationsForGradeRange(8, 18, -48, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -60, true, 8),
          ...getDeviationsForGradeRange(8, 18, -60, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -70, true, 9),
          ...getDeviationsForGradeRange(8, 18, -70, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -87, true, 10),
          ...getDeviationsForGradeRange(8, 18, -87, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -102, true, 11),
          ...getDeviationsForGradeRange(8, 18, -102, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -124, true, 12),
          ...getDeviationsForGradeRange(8, 18, -124, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -144, true, 13),
          ...getDeviationsForGradeRange(8, 18, -144, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -170, true, 14),
          ...getDeviationsForGradeRange(8, 18, -170, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -190, true, 15),
          ...getDeviationsForGradeRange(8, 18, -190, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -210, true, 16),
          ...getDeviationsForGradeRange(8, 18, -210, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -236, true, 17),
          ...getDeviationsForGradeRange(8, 18, -236, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -258, true, 18),
          ...getDeviationsForGradeRange(8, 18, -258, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -284, true, 19),
          ...getDeviationsForGradeRange(8, 18, -284, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -315, true, 20),
          ...getDeviationsForGradeRange(8, 18, -315, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -350, true, 21),
          ...getDeviationsForGradeRange(8, 18, -350, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -390, true, 22),
          ...getDeviationsForGradeRange(8, 18, -390, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -435, true, 23),
          ...getDeviationsForGradeRange(8, 18, -435, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -490, true, 24),
          ...getDeviationsForGradeRange(8, 18, -490, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -540, true, 25),
          ...getDeviationsForGradeRange(8, 18, -540, false, 25),
        },
      },
    },
    V: {
      1: { sameForAllGrades: true, upperDeviation: null },
      2: { sameForAllGrades: true, upperDeviation: null },
      3: { sameForAllGrades: true, upperDeviation: null },
      4: { sameForAllGrades: true, upperDeviation: null },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -39, true, 5),
          ...getDeviationsForGradeRange(8, 18, -39, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -47, true, 6),
          ...getDeviationsForGradeRange(8, 18, -47, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -55, true, 7),
          ...getDeviationsForGradeRange(8, 18, -55, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -68, true, 8),
          ...getDeviationsForGradeRange(8, 18, -68, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -81, true, 9),
          ...getDeviationsForGradeRange(8, 18, -81, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -102, true, 10),
          ...getDeviationsForGradeRange(8, 18, -102, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -120, true, 11),
          ...getDeviationsForGradeRange(8, 18, -120, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -146, true, 12),
          ...getDeviationsForGradeRange(8, 18, -146, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -172, true, 13),
          ...getDeviationsForGradeRange(8, 18, -172, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -202, true, 14),
          ...getDeviationsForGradeRange(8, 18, -202, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -228, true, 15),
          ...getDeviationsForGradeRange(8, 18, -228, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -252, true, 16),
          ...getDeviationsForGradeRange(8, 18, -252, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -284, true, 17),
          ...getDeviationsForGradeRange(8, 18, -284, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -310, true, 18),
          ...getDeviationsForGradeRange(8, 18, -310, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -340, true, 19),
          ...getDeviationsForGradeRange(8, 18, -340, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -385, true, 20),
          ...getDeviationsForGradeRange(8, 18, -385, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -425, true, 21),
          ...getDeviationsForGradeRange(8, 18, -425, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -475, true, 22),
          ...getDeviationsForGradeRange(8, 18, -47, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -530, true, 23),
          ...getDeviationsForGradeRange(8, 18, -530, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -595, true, 24),
          ...getDeviationsForGradeRange(8, 18, -595, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -660, true, 25),
          ...getDeviationsForGradeRange(8, 18, -660, false, 25),
        },
      },
    },
    X: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 1),
          ...getDeviationsForGradeRange(3, 7, -20, true, 1),
          ...getDeviationsForGradeRange(8, 18, -20, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -28, true, 2),
          ...getDeviationsForGradeRange(8, 18, -28, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 7, -34, true, 3),
          ...getDeviationsForGradeRange(8, 18, -34, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 7, -40, true, 4),
          ...getDeviationsForGradeRange(8, 18, -40, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -45, true, 5),
          ...getDeviationsForGradeRange(8, 18, -45, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -54, true, 6),
          ...getDeviationsForGradeRange(8, 18, -54, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -64, true, 7),
          ...getDeviationsForGradeRange(8, 18, -64, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -80, true, 8),
          ...getDeviationsForGradeRange(8, 18, -80, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -97, true, 9),
          ...getDeviationsForGradeRange(8, 18, -97, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -122, true, 10),
          ...getDeviationsForGradeRange(8, 18, -122, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -146, true, 11),
          ...getDeviationsForGradeRange(8, 18, -146, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -178, true, 12),
          ...getDeviationsForGradeRange(8, 18, -178, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -210, true, 13),
          ...getDeviationsForGradeRange(8, 18, -210, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -248, true, 14),
          ...getDeviationsForGradeRange(8, 18, -248, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -280, true, 15),
          ...getDeviationsForGradeRange(8, 18, -280, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -310, true, 16),
          ...getDeviationsForGradeRange(8, 18, -310, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -350, true, 17),
          ...getDeviationsForGradeRange(8, 18, -350, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -385, true, 18),
          ...getDeviationsForGradeRange(8, 18, -385, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -425, true, 19),
          ...getDeviationsForGradeRange(8, 18, -425, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -475, true, 20),
          ...getDeviationsForGradeRange(8, 18, -475, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -525, true, 21),
          ...getDeviationsForGradeRange(8, 18, -525, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -590, true, 22),
          ...getDeviationsForGradeRange(8, 18, -590, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -660, true, 23),
          ...getDeviationsForGradeRange(8, 18, -660, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -740, true, 24),
          ...getDeviationsForGradeRange(8, 18, -740, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -820, true, 25),
          ...getDeviationsForGradeRange(8, 18, -820, false, 25),
        },
      },
    },
    Y: {
      1: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      2: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      3: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      4: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      5: {
        sameForAllGrades: true,
        upperDeviation: null,
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -63, true, 6),
          ...getDeviationsForGradeRange(8, 18, -63, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -75, true, 7),
          ...getDeviationsForGradeRange(8, 18, -75, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -94, true, 8),
          ...getDeviationsForGradeRange(8, 18, -94, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -114, true, 9),
          ...getDeviationsForGradeRange(8, 18, -114, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -144, true, 10),
          ...getDeviationsForGradeRange(8, 18, -144, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -174, true, 11),
          ...getDeviationsForGradeRange(8, 18, -174, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -214, true, 12),
          ...getDeviationsForGradeRange(8, 18, -214, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -254, true, 13),
          ...getDeviationsForGradeRange(8, 18, -254, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -300, true, 14),
          ...getDeviationsForGradeRange(8, 18, -30, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -300, true, 15),
          ...getDeviationsForGradeRange(8, 18, -300, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -340, true, 16),
          ...getDeviationsForGradeRange(8, 18, -340, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -425, true, 17),
          ...getDeviationsForGradeRange(8, 18, -425, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -470, true, 18),
          ...getDeviationsForGradeRange(8, 18, -470, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -520, true, 19),
          ...getDeviationsForGradeRange(8, 18, -520, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -580, true, 20),
          ...getDeviationsForGradeRange(8, 18, -580, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -650, true, 21),
          ...getDeviationsForGradeRange(8, 18, -650, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -730, true, 22),
          ...getDeviationsForGradeRange(8, 18, -730, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -820, true, 23),
          ...getDeviationsForGradeRange(8, 18, -820, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -920, true, 24),
          ...getDeviationsForGradeRange(8, 18, -920, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -1000, true, 25),
          ...getDeviationsForGradeRange(8, 18, -1000, false, 25),
        },
      },
    },
    Z: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 1),
          ...getDeviationsForGradeRange(3, 7, -26, true, 1),
          ...getDeviationsForGradeRange(8, 18, -26, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -35, true, 2),
          ...getDeviationsForGradeRange(8, 18, -35, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 7, -42, true, 3),
          ...getDeviationsForGradeRange(8, 18, -42, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 7, -50, true, 4),
          ...getDeviationsForGradeRange(8, 18, -50, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -60, true, 5),
          ...getDeviationsForGradeRange(8, 18, -60, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -73, true, 6),
          ...getDeviationsForGradeRange(8, 18, -73, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -88, true, 7),
          ...getDeviationsForGradeRange(8, 18, -88, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -112, true, 8),
          ...getDeviationsForGradeRange(8, 18, -112, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -136, true, 9),
          ...getDeviationsForGradeRange(8, 18, -136, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -172, true, 10),
          ...getDeviationsForGradeRange(8, 18, -172, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -210, true, 11),
          ...getDeviationsForGradeRange(8, 18, -210, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -258, true, 12),
          ...getDeviationsForGradeRange(8, 18, -258, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -310, true, 13),
          ...getDeviationsForGradeRange(8, 18, -310, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -365, true, 14),
          ...getDeviationsForGradeRange(8, 18, -365, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -365, true, 15),
          ...getDeviationsForGradeRange(8, 18, -365, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -415, true, 16),
          ...getDeviationsForGradeRange(8, 18, -415, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -520, true, 17),
          ...getDeviationsForGradeRange(8, 18, -520, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -575, true, 18),
          ...getDeviationsForGradeRange(8, 18, -575, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -640, true, 19),
          ...getDeviationsForGradeRange(8, 18, -640, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -710, true, 20),
          ...getDeviationsForGradeRange(8, 18, -710, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -790, true, 21),
          ...getDeviationsForGradeRange(8, 18, -790, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -900, true, 22),
          ...getDeviationsForGradeRange(8, 18, -900, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -1000, true, 23),
          ...getDeviationsForGradeRange(8, 18, -1000, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -1100, true, 24),
          ...getDeviationsForGradeRange(8, 18, -1100, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -1250, true, 25),
          ...getDeviationsForGradeRange(8, 18, -1250, false, 25),
        },
      },
    },
    ZA: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 1),
          ...getDeviationsForGradeRange(3, 7, -32, true, 1),
          ...getDeviationsForGradeRange(8, 18, -32, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -42, true, 2),
          ...getDeviationsForGradeRange(8, 18, -42, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 7, -52, true, 3),
          ...getDeviationsForGradeRange(8, 18, -52, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 7, -64, true, 4),
          ...getDeviationsForGradeRange(8, 18, -64, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -77, true, 5),
          ...getDeviationsForGradeRange(8, 18, -77, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -98, true, 6),
          ...getDeviationsForGradeRange(8, 18, -98, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -118, true, 7),
          ...getDeviationsForGradeRange(8, 18, -118, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -148, true, 8),
          ...getDeviationsForGradeRange(8, 18, -148, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -180, true, 9),
          ...getDeviationsForGradeRange(8, 18, -180, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -226, true, 10),
          ...getDeviationsForGradeRange(8, 18, -226, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -274, true, 11),
          ...getDeviationsForGradeRange(8, 18, -274, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -335, true, 12),
          ...getDeviationsForGradeRange(8, 18, -335, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -400, true, 13),
          ...getDeviationsForGradeRange(8, 18, -400, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -470, true, 14),
          ...getDeviationsForGradeRange(8, 18, -470, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -535, true, 15),
          ...getDeviationsForGradeRange(8, 18, -535, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -600, true, 16),
          ...getDeviationsForGradeRange(8, 18, -600, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -670, true, 17),
          ...getDeviationsForGradeRange(8, 18, -670, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -740, true, 18),
          ...getDeviationsForGradeRange(8, 18, -740, false, 2185),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -820, true, 19),
          ...getDeviationsForGradeRange(8, 18, -820, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -920, true, 20),
          ...getDeviationsForGradeRange(8, 18, -920, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -1000, true, 21),
          ...getDeviationsForGradeRange(8, 18, -1000, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -1150, true, 22),
          ...getDeviationsForGradeRange(8, 18, -1150, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -1300, true, 23),
          ...getDeviationsForGradeRange(8, 18, -1300, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -1450, true, 24),
          ...getDeviationsForGradeRange(8, 18, -1450, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -1600, true, 25),
          ...getDeviationsForGradeRange(8, 18, -1600, false, 25),
        },
      },
    },
    ZB: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 1),
          ...getDeviationsForGradeRange(3, 7, -40, true, 1),
          ...getDeviationsForGradeRange(8, 18, -40, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -50, true, 2),
          ...getDeviationsForGradeRange(8, 18, -50, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 7, -67, true, 3),
          ...getDeviationsForGradeRange(8, 18, -67, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 7, -90, true, 4),
          ...getDeviationsForGradeRange(8, 18, -90, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -108, true, 5),
          ...getDeviationsForGradeRange(8, 18, -108, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -136, true, 6),
          ...getDeviationsForGradeRange(8, 18, -136, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -160, true, 7),
          ...getDeviationsForGradeRange(8, 18, -160, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -200, true, 8),
          ...getDeviationsForGradeRange(8, 18, -200, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -242, true, 9),
          ...getDeviationsForGradeRange(8, 18, -242, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -300, true, 10),
          ...getDeviationsForGradeRange(8, 18, -300, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -360, true, 11),
          ...getDeviationsForGradeRange(8, 18, -360, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -445, true, 12),
          ...getDeviationsForGradeRange(8, 18, -445, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -252, true, 13),
          ...getDeviationsForGradeRange(8, 18, -525, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 1),
          ...getDeviationsForGradeRange(3, 7, -620, true, 1),
          ...getDeviationsForGradeRange(8, 18, -620, false, 1),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -700, true, 15),
          ...getDeviationsForGradeRange(8, 18, -700, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -780, true, 16),
          ...getDeviationsForGradeRange(8, 18, -780, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -880, true, 17),
          ...getDeviationsForGradeRange(8, 18, -880, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -960, true, 18),
          ...getDeviationsForGradeRange(8, 18, -960, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -1050, true, 19),
          ...getDeviationsForGradeRange(8, 18, -1050, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -1200, true, 20),
          ...getDeviationsForGradeRange(8, 18, -1200, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -1300, true, 21),
          ...getDeviationsForGradeRange(8, 18, -1300, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -1500, true, 22),
          ...getDeviationsForGradeRange(8, 18, -1500, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -1650, true, 23),
          ...getDeviationsForGradeRange(8, 18, -1650, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -1850, true, 24),
          ...getDeviationsForGradeRange(8, 18, -1850, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -2100, true, 25),
          ...getDeviationsForGradeRange(8, 18, -2100, false, 25),
        },
      },
    },
    ZC: {
      1: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 1),
          ...getDeviationsForGradeRange(3, 7, -60, true, 1),
          ...getDeviationsForGradeRange(8, 18, -60, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 2),
          ...getDeviationsForGradeRange(3, 7, -80, true, 2),
          ...getDeviationsForGradeRange(8, 18, -80, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 3),
          ...getDeviationsForGradeRange(3, 7, -97, true, 3),
          ...getDeviationsForGradeRange(8, 18, -97, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 4),
          ...getDeviationsForGradeRange(3, 7, -130, true, 4),
          ...getDeviationsForGradeRange(8, 18, -130, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 5),
          ...getDeviationsForGradeRange(3, 7, -150, true, 5),
          ...getDeviationsForGradeRange(8, 18, -150, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 6),
          ...getDeviationsForGradeRange(3, 7, -188, true, 6),
          ...getDeviationsForGradeRange(8, 18, -188, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 7),
          ...getDeviationsForGradeRange(3, 7, -218, true, 7),
          ...getDeviationsForGradeRange(8, 18, -218, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 8),
          ...getDeviationsForGradeRange(3, 7, -274, true, 8),
          ...getDeviationsForGradeRange(8, 18, -274, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 9),
          ...getDeviationsForGradeRange(3, 7, -325, true, 9),
          ...getDeviationsForGradeRange(8, 18, -325, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 10),
          ...getDeviationsForGradeRange(3, 7, -405, true, 10),
          ...getDeviationsForGradeRange(8, 18, -405, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 11),
          ...getDeviationsForGradeRange(3, 7, -480, true, 11),
          ...getDeviationsForGradeRange(8, 18, -480, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 12),
          ...getDeviationsForGradeRange(3, 7, -585, true, 12),
          ...getDeviationsForGradeRange(8, 18, -585, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 13),
          ...getDeviationsForGradeRange(3, 7, -690, true, 13),
          ...getDeviationsForGradeRange(8, 18, -690, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 14),
          ...getDeviationsForGradeRange(3, 7, -800, true, 14),
          ...getDeviationsForGradeRange(8, 18, -800, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 15),
          ...getDeviationsForGradeRange(3, 7, -900, true, 15),
          ...getDeviationsForGradeRange(8, 18, -900, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 16),
          ...getDeviationsForGradeRange(3, 7, -100, true, 16),
          ...getDeviationsForGradeRange(8, 18, -1000, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 17),
          ...getDeviationsForGradeRange(3, 7, -1150, true, 17),
          ...getDeviationsForGradeRange(8, 18, -1150, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 18),
          ...getDeviationsForGradeRange(3, 7, -1250, true, 18),
          ...getDeviationsForGradeRange(8, 18, -1250, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 19),
          ...getDeviationsForGradeRange(3, 7, -1350, true, 19),
          ...getDeviationsForGradeRange(8, 18, -1350, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 20),
          ...getDeviationsForGradeRange(3, 7, -1550, true, 20),
          ...getDeviationsForGradeRange(8, 18, -1550, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 21),
          ...getDeviationsForGradeRange(3, 7, -1700, true, 21),
          ...getDeviationsForGradeRange(8, 18, -1700, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 22),
          ...getDeviationsForGradeRange(3, 7, -1900, true, 22),
          ...getDeviationsForGradeRange(8, 18, -1900, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 23),
          ...getDeviationsForGradeRange(3, 7, -2100, true, 23),
          ...getDeviationsForGradeRange(8, 18, -2100, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 24),
          ...getDeviationsForGradeRange(3, 7, -2400, true, 24),
          ...getDeviationsForGradeRange(8, 18, -2400, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        upperDeviation: {
          ...getDeviationsForGradeRange("01", 2, null, false, 25),
          ...getDeviationsForGradeRange(3, 7, -2600, true, 25),
          ...getDeviationsForGradeRange(8, 18, -2600, false, 25),
        },
      },
    },
  },
  shaft: {
    a: {
      1: { sameForAllGrades: true, upperDeviation: -270 },
      2: { sameForAllGrades: true, upperDeviation: -270 },
      3: { sameForAllGrades: true, upperDeviation: -280 },
      4: { sameForAllGrades: true, upperDeviation: -290 },
      5: { sameForAllGrades: true, upperDeviation: -290 },
      6: { sameForAllGrades: true, upperDeviation: -300 },
      7: { sameForAllGrades: true, upperDeviation: -300 },
      8: { sameForAllGrades: true, upperDeviation: -310 },
      9: { sameForAllGrades: true, upperDeviation: -320 },
      10: { sameForAllGrades: true, upperDeviation: -340 },
      11: { sameForAllGrades: true, upperDeviation: -360 },
      12: { sameForAllGrades: true, upperDeviation: -380 },
      13: { sameForAllGrades: true, upperDeviation: -410 },
      14: { sameForAllGrades: true, upperDeviation: -460 },
      15: { sameForAllGrades: true, upperDeviation: -520 },
      16: { sameForAllGrades: true, upperDeviation: -580 },
      17: { sameForAllGrades: true, upperDeviation: -660 },
      18: { sameForAllGrades: true, upperDeviation: -740 },
      19: { sameForAllGrades: true, upperDeviation: -820 },
      20: { sameForAllGrades: true, upperDeviation: -920 },
      21: { sameForAllGrades: true, upperDeviation: -1050 },
      22: { sameForAllGrades: true, upperDeviation: -1200 },
      23: { sameForAllGrades: true, upperDeviation: -1350 },
      24: { sameForAllGrades: true, upperDeviation: -1500 },
      25: { sameForAllGrades: true, upperDeviation: -1650 },
    },
    b: {
      1: { sameForAllGrades: true, upperDeviation: -140 },
      2: { sameForAllGrades: true, upperDeviation: -140 },
      3: { sameForAllGrades: true, upperDeviation: -150 },
      4: { sameForAllGrades: true, upperDeviation: -150 },
      5: { sameForAllGrades: true, upperDeviation: -150 },
      6: { sameForAllGrades: true, upperDeviation: -160 },
      7: { sameForAllGrades: true, upperDeviation: -160 },
      8: { sameForAllGrades: true, upperDeviation: -170 },
      9: { sameForAllGrades: true, upperDeviation: -180 },
      10: { sameForAllGrades: true, upperDeviation: -190 },
      11: { sameForAllGrades: true, upperDeviation: -200 },
      12: { sameForAllGrades: true, upperDeviation: -220 },
      13: { sameForAllGrades: true, upperDeviation: -240 },
      14: { sameForAllGrades: true, upperDeviation: -260 },
      15: { sameForAllGrades: true, upperDeviation: -280 },
      16: { sameForAllGrades: true, upperDeviation: -310 },
      17: { sameForAllGrades: true, upperDeviation: -340 },
      18: { sameForAllGrades: true, upperDeviation: -380 },
      19: { sameForAllGrades: true, upperDeviation: -420 },
      20: { sameForAllGrades: true, upperDeviation: -480 },
      21: { sameForAllGrades: true, upperDeviation: -540 },
      22: { sameForAllGrades: true, upperDeviation: -600 },
      23: { sameForAllGrades: true, upperDeviation: -680 },
      24: { sameForAllGrades: true, upperDeviation: -760 },
      25: { sameForAllGrades: true, upperDeviation: -840 },
    },
    c: {
      1: { sameForAllGrades: true, upperDeviation: -60 },
      2: { sameForAllGrades: true, upperDeviation: -70 },
      3: { sameForAllGrades: true, upperDeviation: -80 },
      4: { sameForAllGrades: true, upperDeviation: -95 },
      5: { sameForAllGrades: true, upperDeviation: -95 },
      6: { sameForAllGrades: true, upperDeviation: -110 },
      7: { sameForAllGrades: true, upperDeviation: -110 },
      8: { sameForAllGrades: true, upperDeviation: -120 },
      9: { sameForAllGrades: true, upperDeviation: -130 },
      10: { sameForAllGrades: true, upperDeviation: -140 },
      11: { sameForAllGrades: true, upperDeviation: -150 },
      12: { sameForAllGrades: true, upperDeviation: -170 },
      13: { sameForAllGrades: true, upperDeviation: -180 },
      14: { sameForAllGrades: true, upperDeviation: -200 },
      15: { sameForAllGrades: true, upperDeviation: -210 },
      16: { sameForAllGrades: true, upperDeviation: -230 },
      17: { sameForAllGrades: true, upperDeviation: -240 },
      18: { sameForAllGrades: true, upperDeviation: -260 },
      19: { sameForAllGrades: true, upperDeviation: -280 },
      20: { sameForAllGrades: true, upperDeviation: -300 },
      21: { sameForAllGrades: true, upperDeviation: -330 },
      22: { sameForAllGrades: true, upperDeviation: -360 },
      23: { sameForAllGrades: true, upperDeviation: -400 },
      24: { sameForAllGrades: true, upperDeviation: -440 },
      25: { sameForAllGrades: true, upperDeviation: -480 },
    },
    cd: {
      1: { sameForAllGrades: true, upperDeviation: -34 },
      2: { sameForAllGrades: true, upperDeviation: -46 },
      3: { sameForAllGrades: true, upperDeviation: -56 },
      4: { sameForAllGrades: true, upperDeviation: -70 },
      5: { sameForAllGrades: true, upperDeviation: -70 },
      6: { sameForAllGrades: true, upperDeviation: -85 },
      7: { sameForAllGrades: true, upperDeviation: -85 },
      8: { sameForAllGrades: true, upperDeviation: -100 },
      9: { sameForAllGrades: true, upperDeviation: -100 },
      10: { sameForAllGrades: true, upperDeviation: null },
      11: { sameForAllGrades: true, upperDeviation: null },
      12: { sameForAllGrades: true, upperDeviation: null },
      13: { sameForAllGrades: true, upperDeviation: null },
      14: { sameForAllGrades: true, upperDeviation: null },
      15: { sameForAllGrades: true, upperDeviation: null },
      16: { sameForAllGrades: true, upperDeviation: null },
      17: { sameForAllGrades: true, upperDeviation: null },
      18: { sameForAllGrades: true, upperDeviation: null },
      19: { sameForAllGrades: true, upperDeviation: null },
      20: { sameForAllGrades: true, upperDeviation: null },
      21: { sameForAllGrades: true, upperDeviation: null },
      22: { sameForAllGrades: true, upperDeviation: null },
      23: { sameForAllGrades: true, upperDeviation: null },
      24: { sameForAllGrades: true, upperDeviation: null },
      25: { sameForAllGrades: true, upperDeviation: null },
    },
    d: {
      1: { sameForAllGrades: true, upperDeviation: -20 },
      2: { sameForAllGrades: true, upperDeviation: -30 },
      3: { sameForAllGrades: true, upperDeviation: -40 },
      4: { sameForAllGrades: true, upperDeviation: -50 },
      5: { sameForAllGrades: true, upperDeviation: -50 },
      6: { sameForAllGrades: true, upperDeviation: -65 },
      7: { sameForAllGrades: true, upperDeviation: -65 },
      8: { sameForAllGrades: true, upperDeviation: -80 },
      9: { sameForAllGrades: true, upperDeviation: -80 },
      10: { sameForAllGrades: true, upperDeviation: -100 },
      11: { sameForAllGrades: true, upperDeviation: -100 },
      12: { sameForAllGrades: true, upperDeviation: -120 },
      13: { sameForAllGrades: true, upperDeviation: -120 },
      14: { sameForAllGrades: true, upperDeviation: -145 },
      15: { sameForAllGrades: true, upperDeviation: -145 },
      16: { sameForAllGrades: true, upperDeviation: -145 },
      17: { sameForAllGrades: true, upperDeviation: -170 },
      18: { sameForAllGrades: true, upperDeviation: -170 },
      19: { sameForAllGrades: true, upperDeviation: -170 },
      20: { sameForAllGrades: true, upperDeviation: -190 },
      21: { sameForAllGrades: true, upperDeviation: -190 },
      22: { sameForAllGrades: true, upperDeviation: -210 },
      23: { sameForAllGrades: true, upperDeviation: -210 },
      24: { sameForAllGrades: true, upperDeviation: -230 },
      25: { sameForAllGrades: true, upperDeviation: -230 },
    },
    e: {
      1: { sameForAllGrades: true, upperDeviation: -14 },
      2: { sameForAllGrades: true, upperDeviation: -20 },
      3: { sameForAllGrades: true, upperDeviation: -25 },
      4: { sameForAllGrades: true, upperDeviation: -32 },
      5: { sameForAllGrades: true, upperDeviation: -32 },
      6: { sameForAllGrades: true, upperDeviation: -40 },
      7: { sameForAllGrades: true, upperDeviation: -40 },
      8: { sameForAllGrades: true, upperDeviation: -50 },
      9: { sameForAllGrades: true, upperDeviation: -50 },
      10: { sameForAllGrades: true, upperDeviation: -60 },
      11: { sameForAllGrades: true, upperDeviation: -60 },
      12: { sameForAllGrades: true, upperDeviation: -72 },
      13: { sameForAllGrades: true, upperDeviation: -72 },
      14: { sameForAllGrades: true, upperDeviation: -85 },
      15: { sameForAllGrades: true, upperDeviation: -85 },
      16: { sameForAllGrades: true, upperDeviation: -85 },
      17: { sameForAllGrades: true, upperDeviation: -100 },
      18: { sameForAllGrades: true, upperDeviation: -100 },
      19: { sameForAllGrades: true, upperDeviation: -100 },
      20: { sameForAllGrades: true, upperDeviation: -110 },
      21: { sameForAllGrades: true, upperDeviation: -110 },
      22: { sameForAllGrades: true, upperDeviation: -125 },
      23: { sameForAllGrades: true, upperDeviation: -125 },
      24: { sameForAllGrades: true, upperDeviation: -135 },
      25: { sameForAllGrades: true, upperDeviation: -135 },
    },
    ef: {
      1: { sameForAllGrades: true, upperDeviation: -10 },
      2: { sameForAllGrades: true, upperDeviation: -14 },
      3: { sameForAllGrades: true, upperDeviation: -18 },
      4: { sameForAllGrades: true, upperDeviation: -23 },
      5: { sameForAllGrades: true, upperDeviation: -23 },
      6: { sameForAllGrades: true, upperDeviation: -28 },
      7: { sameForAllGrades: true, upperDeviation: -28 },
      8: { sameForAllGrades: true, upperDeviation: -35 },
      9: { sameForAllGrades: true, upperDeviation: -35 },
      10: { sameForAllGrades: true, upperDeviation: null },
      11: { sameForAllGrades: true, upperDeviation: null },
      12: { sameForAllGrades: true, upperDeviation: null },
      13: { sameForAllGrades: true, upperDeviation: null },
      14: { sameForAllGrades: true, upperDeviation: null },
      15: { sameForAllGrades: true, upperDeviation: null },
      16: { sameForAllGrades: true, upperDeviation: null },
      17: { sameForAllGrades: true, upperDeviation: null },
      18: { sameForAllGrades: true, upperDeviation: null },
      19: { sameForAllGrades: true, upperDeviation: null },
      20: { sameForAllGrades: true, upperDeviation: null },
      21: { sameForAllGrades: true, upperDeviation: null },
      22: { sameForAllGrades: true, upperDeviation: null },
      23: { sameForAllGrades: true, upperDeviation: null },
      24: { sameForAllGrades: true, upperDeviation: null },
      25: { sameForAllGrades: true, upperDeviation: null },
    },
    f: {
      1: { sameForAllGrades: true, upperDeviation: -6 },
      2: { sameForAllGrades: true, upperDeviation: -10 },
      3: { sameForAllGrades: true, upperDeviation: -13 },
      4: { sameForAllGrades: true, upperDeviation: -16 },
      5: { sameForAllGrades: true, upperDeviation: -16 },
      6: { sameForAllGrades: true, upperDeviation: -20 },
      7: { sameForAllGrades: true, upperDeviation: -20 },
      8: { sameForAllGrades: true, upperDeviation: -25 },
      9: { sameForAllGrades: true, upperDeviation: -25 },
      10: { sameForAllGrades: true, upperDeviation: -30 },
      11: { sameForAllGrades: true, upperDeviation: -30 },
      12: { sameForAllGrades: true, upperDeviation: -36 },
      13: { sameForAllGrades: true, upperDeviation: -36 },
      14: { sameForAllGrades: true, upperDeviation: -43 },
      15: { sameForAllGrades: true, upperDeviation: -43 },
      16: { sameForAllGrades: true, upperDeviation: -43 },
      17: { sameForAllGrades: true, upperDeviation: -50 },
      18: { sameForAllGrades: true, upperDeviation: -50 },
      19: { sameForAllGrades: true, upperDeviation: -50 },
      20: { sameForAllGrades: true, upperDeviation: -56 },
      21: { sameForAllGrades: true, upperDeviation: -56 },
      22: { sameForAllGrades: true, upperDeviation: -62 },
      23: { sameForAllGrades: true, upperDeviation: -62 },
      24: { sameForAllGrades: true, upperDeviation: -68 },
      25: { sameForAllGrades: true, upperDeviation: -68 },
    },
    fg: {
      1: { sameForAllGrades: true, upperDeviation: -4 },
      2: { sameForAllGrades: true, upperDeviation: -6 },
      3: { sameForAllGrades: true, upperDeviation: -8 },
      4: { sameForAllGrades: true, upperDeviation: -10 },
      5: { sameForAllGrades: true, upperDeviation: -10 },
      6: { sameForAllGrades: true, upperDeviation: -12 },
      7: { sameForAllGrades: true, upperDeviation: -12 },
      8: { sameForAllGrades: true, upperDeviation: -15 },
      9: { sameForAllGrades: true, upperDeviation: -15 },
      10: { sameForAllGrades: true, upperDeviation: null },
      11: { sameForAllGrades: true, upperDeviation: null },
      12: { sameForAllGrades: true, upperDeviation: null },
      13: { sameForAllGrades: true, upperDeviation: null },
      14: { sameForAllGrades: true, upperDeviation: null },
      15: { sameForAllGrades: true, upperDeviation: null },
      16: { sameForAllGrades: true, upperDeviation: null },
      17: { sameForAllGrades: true, upperDeviation: null },
      18: { sameForAllGrades: true, upperDeviation: null },
      19: { sameForAllGrades: true, upperDeviation: null },
      20: { sameForAllGrades: true, upperDeviation: null },
      21: { sameForAllGrades: true, upperDeviation: null },
      22: { sameForAllGrades: true, upperDeviation: null },
      23: { sameForAllGrades: true, upperDeviation: null },
      24: { sameForAllGrades: true, upperDeviation: null },
      25: { sameForAllGrades: true, upperDeviation: null },
    },
    g: {
      1: { sameForAllGrades: true, upperDeviation: -2 },
      2: { sameForAllGrades: true, upperDeviation: -4 },
      3: { sameForAllGrades: true, upperDeviation: -5 },
      4: { sameForAllGrades: true, upperDeviation: -6 },
      5: { sameForAllGrades: true, upperDeviation: -6 },
      6: { sameForAllGrades: true, upperDeviation: -7 },
      7: { sameForAllGrades: true, upperDeviation: -7 },
      8: { sameForAllGrades: true, upperDeviation: -9 },
      9: { sameForAllGrades: true, upperDeviation: -9 },
      10: { sameForAllGrades: true, upperDeviation: -10 },
      11: { sameForAllGrades: true, upperDeviation: -10 },
      12: { sameForAllGrades: true, upperDeviation: -12 },
      13: { sameForAllGrades: true, upperDeviation: -12 },
      14: { sameForAllGrades: true, upperDeviation: -14 },
      15: { sameForAllGrades: true, upperDeviation: -14 },
      16: { sameForAllGrades: true, upperDeviation: -14 },
      17: { sameForAllGrades: true, upperDeviation: -15 },
      18: { sameForAllGrades: true, upperDeviation: -15 },
      19: { sameForAllGrades: true, upperDeviation: -15 },
      20: { sameForAllGrades: true, upperDeviation: -17 },
      21: { sameForAllGrades: true, upperDeviation: -17 },
      22: { sameForAllGrades: true, upperDeviation: -18 },
      23: { sameForAllGrades: true, upperDeviation: -18 },
      24: { sameForAllGrades: true, upperDeviation: -20 },
      25: { sameForAllGrades: true, upperDeviation: -20 },
    },
    h: {
      1: { sameForAllGrades: true, upperDeviation: 0 },
      2: { sameForAllGrades: true, upperDeviation: 0 },
      3: { sameForAllGrades: true, upperDeviation: 0 },
      4: { sameForAllGrades: true, upperDeviation: 0 },
      5: { sameForAllGrades: true, upperDeviation: 0 },
      6: { sameForAllGrades: true, upperDeviation: 0 },
      7: { sameForAllGrades: true, upperDeviation: 0 },
      8: { sameForAllGrades: true, upperDeviation: 0 },
      9: { sameForAllGrades: true, upperDeviation: 0 },
      10: { sameForAllGrades: true, upperDeviation: 0 },
      11: { sameForAllGrades: true, upperDeviation: 0 },
      12: { sameForAllGrades: true, upperDeviation: 0 },
      13: { sameForAllGrades: true, upperDeviation: 0 },
      14: { sameForAllGrades: true, upperDeviation: 0 },
      15: { sameForAllGrades: true, upperDeviation: 0 },
      16: { sameForAllGrades: true, upperDeviation: 0 },
      17: { sameForAllGrades: true, upperDeviation: 0 },
      18: { sameForAllGrades: true, upperDeviation: 0 },
      19: { sameForAllGrades: true, upperDeviation: 0 },
      20: { sameForAllGrades: true, upperDeviation: 0 },
      21: { sameForAllGrades: true, upperDeviation: 0 },
      22: { sameForAllGrades: true, upperDeviation: 0 },
      23: { sameForAllGrades: true, upperDeviation: 0 },
      24: { sameForAllGrades: true, upperDeviation: 0 },
      25: { sameForAllGrades: true, upperDeviation: 0 },
    },

    j: {
      1: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 1),
          5: -2,
          6: -2,
          7: -4,
          8: -6,
          ...getDeviationsForGradeRange(9, 18, null, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 2),
          5: -2,
          6: -2,
          7: -4,
          ...getDeviationsForGradeRange(8, 18, null, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 3),
          5: -2,
          6: -2,
          7: -5,
          ...getDeviationsForGradeRange(8, 18, null, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 4),
          5: -3,
          6: -3,
          7: -6,
          ...getDeviationsForGradeRange(8, 18, null, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 5),
          5: -3,
          6: -3,
          7: -6,
          ...getDeviationsForGradeRange(8, 18, null, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 6),
          5: -4,
          6: -4,
          7: -8,
          ...getDeviationsForGradeRange(8, 18, null, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 7),
          5: -4,
          6: -4,
          7: -8,
          ...getDeviationsForGradeRange(8, 18, null, false, 7),
        },
      },
      8: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 8),
          5: -5,
          6: -5,
          7: -10,
          ...getDeviationsForGradeRange(8, 18, null, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 9),
          5: -5,
          6: -5,
          7: -10,
          ...getDeviationsForGradeRange(8, 18, null, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 10),
          5: -7,
          6: -7,
          7: -12,
          ...getDeviationsForGradeRange(8, 18, null, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 11),
          5: -7,
          6: -7,
          7: -12,
          ...getDeviationsForGradeRange(8, 18, null, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 12),
          5: -9,
          6: -9,
          7: -15,
          ...getDeviationsForGradeRange(8, 18, null, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 13),
          5: -9,
          6: -9,
          7: -15,
          ...getDeviationsForGradeRange(8, 18, null, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 14),
          5: -11,
          6: -11,
          7: -18,
          ...getDeviationsForGradeRange(8, 18, null, false, 2),
        },
      },
      15: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 15),
          5: -11,
          6: -11,
          7: -18,
          ...getDeviationsForGradeRange(8, 18, null, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 16),
          5: -11,
          6: -11,
          7: -18,
          ...getDeviationsForGradeRange(8, 18, null, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 17),
          5: -13,
          6: -13,
          7: -21,
          ...getDeviationsForGradeRange(8, 18, null, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 18),
          5: -13,
          6: -13,
          7: -21,
          ...getDeviationsForGradeRange(8, 18, null, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 19),
          5: -13,
          6: -13,
          7: -21,
          ...getDeviationsForGradeRange(8, 18, null, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 20),
          5: -16,
          6: -16,
          7: -26,
          ...getDeviationsForGradeRange(8, 18, null, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 21),
          5: -16,
          6: -16,
          7: -26,
          ...getDeviationsForGradeRange(8, 18, null, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 22),
          5: -18,
          6: -18,
          7: -28,
          ...getDeviationsForGradeRange(8, 18, null, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 23),
          5: -18,
          6: -18,
          7: -28,
          ...getDeviationsForGradeRange(8, 18, null, false, 23),
        },
      },
      24: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 24),
          5: -20,
          6: -20,
          7: -32,
          ...getDeviationsForGradeRange(8, 18, null, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 4, null, false, 25),
          5: -20,
          6: -20,
          7: -32,
          ...getDeviationsForGradeRange(8, 18, null, false, 25),
        },
      },
    },
    k: {
      1: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 1),
          ...getDeviationsForGradeRange(4, 7, 0, false, 1),
          7: -4,
          8: -6,
          ...getDeviationsForGradeRange(9, 18, 0, false, 1),
        },
      },
      2: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 2),
          ...getDeviationsForGradeRange(4, 7, 1, false, 2),
          7: -4,
          ...getDeviationsForGradeRange(8, 18, 0, false, 2),
        },
      },
      3: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 3),
          ...getDeviationsForGradeRange(4, 7, 1, false, 3),
          7: -5,
          ...getDeviationsForGradeRange(8, 18, 0, false, 3),
        },
      },
      4: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 4),
          ...getDeviationsForGradeRange(4, 7, 1, false, 4),
          7: -6,
          ...getDeviationsForGradeRange(8, 18, 0, false, 4),
        },
      },
      5: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 5),
          ...getDeviationsForGradeRange(4, 7, 1, false, 5),
          7: -6,
          ...getDeviationsForGradeRange(8, 18, 0, false, 5),
        },
      },
      6: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 6),
          ...getDeviationsForGradeRange(4, 7, 2, false, 6),
          7: -8,
          ...getDeviationsForGradeRange(8, 18, 0, false, 6),
        },
      },
      7: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 7),
          ...getDeviationsForGradeRange(4, 7, 2, false, 7),
          7: -8,
          ...getDeviationsForGradeRange(8, 18, 0, false, 8),
        },
      },
      8: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 8),
          ...getDeviationsForGradeRange(4, 7, 2, false, 8),
          7: -10,
          ...getDeviationsForGradeRange(8, 18, 0, false, 8),
        },
      },
      9: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 9),
          ...getDeviationsForGradeRange(4, 7, 2, false, 9),
          7: -10,
          ...getDeviationsForGradeRange(8, 18, 0, false, 9),
        },
      },
      10: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 10),
          ...getDeviationsForGradeRange(4, 7, 2, false, 10),
          7: -12,
          ...getDeviationsForGradeRange(8, 18, 0, false, 10),
        },
      },
      11: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 11),
          ...getDeviationsForGradeRange(4, 7, 2, false, 11),
          7: -12,
          ...getDeviationsForGradeRange(8, 18, 0, false, 11),
        },
      },
      12: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 12),
          ...getDeviationsForGradeRange(4, 7, 3, false, 12),
          7: -15,
          ...getDeviationsForGradeRange(8, 18, 0, false, 12),
        },
      },
      13: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 13),
          ...getDeviationsForGradeRange(4, 7, 3, false, 13),
          7: -15,
          ...getDeviationsForGradeRange(8, 18, 0, false, 13),
        },
      },
      14: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 14),
          ...getDeviationsForGradeRange(4, 7, 3, false, 14),
          7: -18,
          ...getDeviationsForGradeRange(8, 18, 0, false, 14),
        },
      },
      15: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 15),
          ...getDeviationsForGradeRange(4, 7, 3, false, 15),
          7: -18,
          ...getDeviationsForGradeRange(8, 18, 0, false, 15),
        },
      },
      16: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 16),
          ...getDeviationsForGradeRange(4, 7, 3, false, 16),
          7: -18,
          ...getDeviationsForGradeRange(8, 18, 0, false, 16),
        },
      },
      17: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 17),
          ...getDeviationsForGradeRange(4, 7, 4, false, 17),
          7: -21,
          ...getDeviationsForGradeRange(8, 18, 0, false, 17),
        },
      },
      18: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 18),
          ...getDeviationsForGradeRange(4, 7, 4, false, 18),
          7: -21,
          ...getDeviationsForGradeRange(8, 18, 0, false, 18),
        },
      },
      19: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 19),
          ...getDeviationsForGradeRange(4, 7, 4, false, 19),
          7: -21,
          ...getDeviationsForGradeRange(8, 18, 0, false, 19),
        },
      },
      20: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 20),
          ...getDeviationsForGradeRange(4, 7, 4, false, 20),
          7: -26,
          ...getDeviationsForGradeRange(8, 18, 0, false, 20),
        },
      },
      21: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 21),
          ...getDeviationsForGradeRange(4, 7, 4, false, 21),
          7: -26,
          ...getDeviationsForGradeRange(8, 18, 0, false, 21),
        },
      },
      22: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 22),
          ...getDeviationsForGradeRange(4, 7, 4, false, 22),
          7: -28,
          ...getDeviationsForGradeRange(8, 18, 0, false, 22),
        },
      },
      23: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 24),
          ...getDeviationsForGradeRange(4, 7, 4, false, 24),
          7: -28,
          ...getDeviationsForGradeRange(8, 18, 0, false, 24),
        },
      },
      24: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 24),
          ...getDeviationsForGradeRange(4, 7, 5, false, 24),
          7: -32,
          ...getDeviationsForGradeRange(8, 18, 0, false, 24),
        },
      },
      25: {
        sameForAllGrades: false,
        lowerDeviation: {
          ...getDeviationsForGradeRange("01", 3, 0, false, 25),
          ...getDeviationsForGradeRange(4, 7, 5, false, 25),
          7: -32,
          ...getDeviationsForGradeRange(8, 18, 0, false, 25),
        },
      },
    },
    m: {
      1: { sameForAllGrades: true, lowerDeviation: 2 },
      2: { sameForAllGrades: true, lowerDeviation: 4 },
      3: { sameForAllGrades: true, lowerDeviation: 6 },
      4: { sameForAllGrades: true, lowerDeviation: 7 },
      5: { sameForAllGrades: true, lowerDeviation: 7 },
      6: { sameForAllGrades: true, lowerDeviation: 8 },
      7: { sameForAllGrades: true, lowerDeviation: 8 },
      8: { sameForAllGrades: true, lowerDeviation: 9 },
      9: { sameForAllGrades: true, lowerDeviation: 9 },
      10: { sameForAllGrades: true, lowerDeviation: 11 },
      11: { sameForAllGrades: true, lowerDeviation: 11 },
      12: { sameForAllGrades: true, lowerDeviation: 13 },
      13: { sameForAllGrades: true, lowerDeviation: 13 },
      14: { sameForAllGrades: true, lowerDeviation: 15 },
      15: { sameForAllGrades: true, lowerDeviation: 15 },
      16: { sameForAllGrades: true, lowerDeviation: 15 },
      17: { sameForAllGrades: true, lowerDeviation: 17 },
      18: { sameForAllGrades: true, lowerDeviation: 17 },
      19: { sameForAllGrades: true, lowerDeviation: 17 },
      20: { sameForAllGrades: true, lowerDeviation: 20 },
      21: { sameForAllGrades: true, lowerDeviation: 20 },
      22: { sameForAllGrades: true, lowerDeviation: 21 },
      23: { sameForAllGrades: true, lowerDeviation: 21 },
      24: { sameForAllGrades: true, lowerDeviation: 23 },
      25: { sameForAllGrades: true, lowerDeviation: 23 },
    },
    n: {
      1: { sameForAllGrades: true, lowerDeviation: 4 },
      2: { sameForAllGrades: true, lowerDeviation: 8 },
      3: { sameForAllGrades: true, lowerDeviation: 10 },
      4: { sameForAllGrades: true, lowerDeviation: 12 },
      5: { sameForAllGrades: true, lowerDeviation: 12 },
      6: { sameForAllGrades: true, lowerDeviation: 15 },
      7: { sameForAllGrades: true, lowerDeviation: 15 },
      8: { sameForAllGrades: true, lowerDeviation: 17 },
      9: { sameForAllGrades: true, lowerDeviation: 17 },
      10: { sameForAllGrades: true, lowerDeviation: 20 },
      11: { sameForAllGrades: true, lowerDeviation: 20 },
      12: { sameForAllGrades: true, lowerDeviation: 23 },
      13: { sameForAllGrades: true, lowerDeviation: 23 },
      14: { sameForAllGrades: true, lowerDeviation: 27 },
      15: { sameForAllGrades: true, lowerDeviation: 27 },
      16: { sameForAllGrades: true, lowerDeviation: 27 },
      17: { sameForAllGrades: true, lowerDeviation: 31 },
      18: { sameForAllGrades: true, lowerDeviation: 31 },
      19: { sameForAllGrades: true, lowerDeviation: 31 },
      20: { sameForAllGrades: true, lowerDeviation: 34 },
      21: { sameForAllGrades: true, lowerDeviation: 34 },
      22: { sameForAllGrades: true, lowerDeviation: 37 },
      23: { sameForAllGrades: true, lowerDeviation: 37 },
      24: { sameForAllGrades: true, lowerDeviation: 40 },
      25: { sameForAllGrades: true, lowerDeviation: 40 },
    },
    p: {
      1: { sameForAllGrades: true, lowerDeviation: 6 },
      2: { sameForAllGrades: true, lowerDeviation: 12 },
      3: { sameForAllGrades: true, lowerDeviation: 15 },
      4: { sameForAllGrades: true, lowerDeviation: 18 },
      5: { sameForAllGrades: true, lowerDeviation: 18 },
      6: { sameForAllGrades: true, lowerDeviation: 22 },
      7: { sameForAllGrades: true, lowerDeviation: 22 },
      8: { sameForAllGrades: true, lowerDeviation: 26 },
      9: { sameForAllGrades: true, lowerDeviation: 26 },
      10: { sameForAllGrades: true, lowerDeviation: 32 },
      11: { sameForAllGrades: true, lowerDeviation: 32 },
      12: { sameForAllGrades: true, lowerDeviation: 37 },
      13: { sameForAllGrades: true, lowerDeviation: 37 },
      14: { sameForAllGrades: true, lowerDeviation: 43 },
      15: { sameForAllGrades: true, lowerDeviation: 43 },
      16: { sameForAllGrades: true, lowerDeviation: 43 },
      17: { sameForAllGrades: true, lowerDeviation: 50 },
      18: { sameForAllGrades: true, lowerDeviation: 50 },
      19: { sameForAllGrades: true, lowerDeviation: 50 },
      20: { sameForAllGrades: true, lowerDeviation: 56 },
      21: { sameForAllGrades: true, lowerDeviation: 56 },
      22: { sameForAllGrades: true, lowerDeviation: 62 },
      23: { sameForAllGrades: true, lowerDeviation: 62 },
      24: { sameForAllGrades: true, lowerDeviation: 68 },
      25: { sameForAllGrades: true, lowerDeviation: 68 },
    },
    r: {
      1: { sameForAllGrades: true, lowerDeviation: 10 },
      2: { sameForAllGrades: true, lowerDeviation: 15 },
      3: { sameForAllGrades: true, lowerDeviation: 19 },
      4: { sameForAllGrades: true, lowerDeviation: 23 },
      5: { sameForAllGrades: true, lowerDeviation: 23 },
      6: { sameForAllGrades: true, lowerDeviation: 28 },
      7: { sameForAllGrades: true, lowerDeviation: 28 },
      8: { sameForAllGrades: true, lowerDeviation: 34 },
      9: { sameForAllGrades: true, lowerDeviation: 34 },
      10: { sameForAllGrades: true, lowerDeviation: 41 },
      11: { sameForAllGrades: true, lowerDeviation: 43 },
      12: { sameForAllGrades: true, lowerDeviation: 51 },
      13: { sameForAllGrades: true, lowerDeviation: 54 },
      14: { sameForAllGrades: true, lowerDeviation: 63 },
      15: { sameForAllGrades: true, lowerDeviation: 65 },
      16: { sameForAllGrades: true, lowerDeviation: 68 },
      17: { sameForAllGrades: true, lowerDeviation: 77 },
      18: { sameForAllGrades: true, lowerDeviation: 80 },
      19: { sameForAllGrades: true, lowerDeviation: 64 },
      20: { sameForAllGrades: true, lowerDeviation: 94 },
      21: { sameForAllGrades: true, lowerDeviation: 98 },
      22: { sameForAllGrades: true, lowerDeviation: 108 },
      23: { sameForAllGrades: true, lowerDeviation: 114 },
      24: { sameForAllGrades: true, lowerDeviation: 126 },
      25: { sameForAllGrades: true, lowerDeviation: 132 },
    },
    s: {
      1: { sameForAllGrades: true, lowerDeviation: 14 },
      2: { sameForAllGrades: true, lowerDeviation: 19 },
      3: { sameForAllGrades: true, lowerDeviation: 23 },
      4: { sameForAllGrades: true, lowerDeviation: 28 },
      5: { sameForAllGrades: true, lowerDeviation: 28 },
      6: { sameForAllGrades: true, lowerDeviation: 35 },
      7: { sameForAllGrades: true, lowerDeviation: 35 },
      8: { sameForAllGrades: true, lowerDeviation: 43 },
      9: { sameForAllGrades: true, lowerDeviation: 43 },
      10: { sameForAllGrades: true, lowerDeviation: 53 },
      11: { sameForAllGrades: true, lowerDeviation: 59 },
      12: { sameForAllGrades: true, lowerDeviation: 71 },
      13: { sameForAllGrades: true, lowerDeviation: 79 },
      14: { sameForAllGrades: true, lowerDeviation: 92 },
      15: { sameForAllGrades: true, lowerDeviation: 100 },
      16: { sameForAllGrades: true, lowerDeviation: 108 },
      17: { sameForAllGrades: true, lowerDeviation: 122 },
      18: { sameForAllGrades: true, lowerDeviation: 130 },
      19: { sameForAllGrades: true, lowerDeviation: 140 },
      20: { sameForAllGrades: true, lowerDeviation: 158 },
      21: { sameForAllGrades: true, lowerDeviation: 170 },
      22: { sameForAllGrades: true, lowerDeviation: 190 },
      23: { sameForAllGrades: true, lowerDeviation: 208 },
      24: { sameForAllGrades: true, lowerDeviation: 232 },
      25: { sameForAllGrades: true, lowerDeviation: 252 },
    },
    t: {
      1: { sameForAllGrades: true, lowerDeviation: null },
      2: { sameForAllGrades: true, lowerDeviation: null },
      3: { sameForAllGrades: true, lowerDeviation: null },
      4: { sameForAllGrades: true, lowerDeviation: null },
      5: { sameForAllGrades: true, lowerDeviation: null },
      6: { sameForAllGrades: true, lowerDeviation: null },
      7: { sameForAllGrades: true, lowerDeviation: 41 },
      8: { sameForAllGrades: true, lowerDeviation: 48 },
      9: { sameForAllGrades: true, lowerDeviation: 54 },
      10: { sameForAllGrades: true, lowerDeviation: 66 },
      11: { sameForAllGrades: true, lowerDeviation: 75 },
      12: { sameForAllGrades: true, lowerDeviation: 91 },
      13: { sameForAllGrades: true, lowerDeviation: 104 },
      14: { sameForAllGrades: true, lowerDeviation: 122 },
      15: { sameForAllGrades: true, lowerDeviation: 134 },
      16: { sameForAllGrades: true, lowerDeviation: 146 },
      17: { sameForAllGrades: true, lowerDeviation: 166 },
      18: { sameForAllGrades: true, lowerDeviation: 180 },
      19: { sameForAllGrades: true, lowerDeviation: 196 },
      20: { sameForAllGrades: true, lowerDeviation: 218 },
      21: { sameForAllGrades: true, lowerDeviation: 240 },
      22: { sameForAllGrades: true, lowerDeviation: 268 },
      23: { sameForAllGrades: true, lowerDeviation: 294 },
      24: { sameForAllGrades: true, lowerDeviation: 330 },
      25: { sameForAllGrades: true, lowerDeviation: 360 },
    },
    u: {
      1: { sameForAllGrades: true, lowerDeviation: 18 },
      2: { sameForAllGrades: true, lowerDeviation: 23 },
      3: { sameForAllGrades: true, lowerDeviation: 28 },
      4: { sameForAllGrades: true, lowerDeviation: 33 },
      5: { sameForAllGrades: true, lowerDeviation: 33 },
      6: { sameForAllGrades: true, lowerDeviation: 41 },
      7: { sameForAllGrades: true, lowerDeviation: 48 },
      8: { sameForAllGrades: true, lowerDeviation: 60 },
      9: { sameForAllGrades: true, lowerDeviation: 70 },
      10: { sameForAllGrades: true, lowerDeviation: 87 },
      11: { sameForAllGrades: true, lowerDeviation: 102 },
      12: { sameForAllGrades: true, lowerDeviation: 124 },
      13: { sameForAllGrades: true, lowerDeviation: 144 },
      14: { sameForAllGrades: true, lowerDeviation: 170 },
      15: { sameForAllGrades: true, lowerDeviation: 190 },
      16: { sameForAllGrades: true, lowerDeviation: 210 },
      17: { sameForAllGrades: true, lowerDeviation: 236 },
      18: { sameForAllGrades: true, lowerDeviation: 258 },
      19: { sameForAllGrades: true, lowerDeviation: 284 },
      20: { sameForAllGrades: true, lowerDeviation: 315 },
      21: { sameForAllGrades: true, lowerDeviation: 350 },
      22: { sameForAllGrades: true, lowerDeviation: 390 },
      23: { sameForAllGrades: true, lowerDeviation: 435 },
      24: { sameForAllGrades: true, lowerDeviation: 490 },
      25: { sameForAllGrades: true, lowerDeviation: 540 },
    },
    v: {
      1: { sameForAllGrades: true, lowerDeviation: null },
      2: { sameForAllGrades: true, lowerDeviation: null },
      3: { sameForAllGrades: true, lowerDeviation: null },
      4: { sameForAllGrades: true, lowerDeviation: null },
      5: { sameForAllGrades: true, lowerDeviation: 39 },
      6: { sameForAllGrades: true, lowerDeviation: 47 },
      7: { sameForAllGrades: true, lowerDeviation: 55 },
      8: { sameForAllGrades: true, lowerDeviation: 68 },
      9: { sameForAllGrades: true, lowerDeviation: 81 },
      10: { sameForAllGrades: true, lowerDeviation: 102 },
      11: { sameForAllGrades: true, lowerDeviation: 120 },
      12: { sameForAllGrades: true, lowerDeviation: 146 },
      13: { sameForAllGrades: true, lowerDeviation: 172 },
      14: { sameForAllGrades: true, lowerDeviation: 202 },
      15: { sameForAllGrades: true, lowerDeviation: 228 },
      16: { sameForAllGrades: true, lowerDeviation: 252 },
      17: { sameForAllGrades: true, lowerDeviation: 284 },
      18: { sameForAllGrades: true, lowerDeviation: 310 },
      19: { sameForAllGrades: true, lowerDeviation: 340 },
      20: { sameForAllGrades: true, lowerDeviation: 385 },
      21: { sameForAllGrades: true, lowerDeviation: 425 },
      22: { sameForAllGrades: true, lowerDeviation: 475 },
      23: { sameForAllGrades: true, lowerDeviation: 530 },
      24: { sameForAllGrades: true, lowerDeviation: 595 },
      25: { sameForAllGrades: true, lowerDeviation: 660 },
    },
    x: {
      1: { sameForAllGrades: true, lowerDeviation: 20 },
      2: { sameForAllGrades: true, lowerDeviation: 28 },
      3: { sameForAllGrades: true, lowerDeviation: 34 },
      4: { sameForAllGrades: true, lowerDeviation: 40 },
      5: { sameForAllGrades: true, lowerDeviation: 45 },
      6: { sameForAllGrades: true, lowerDeviation: 54 },
      7: { sameForAllGrades: true, lowerDeviation: 64 },
      8: { sameForAllGrades: true, lowerDeviation: 80 },
      9: { sameForAllGrades: true, lowerDeviation: 97 },
      10: { sameForAllGrades: true, lowerDeviation: 122 },
      11: { sameForAllGrades: true, lowerDeviation: 146 },
      12: { sameForAllGrades: true, lowerDeviation: 178 },
      13: { sameForAllGrades: true, lowerDeviation: 210 },
      14: { sameForAllGrades: true, lowerDeviation: 248 },
      15: { sameForAllGrades: true, lowerDeviation: 280 },
      16: { sameForAllGrades: true, lowerDeviation: 310 },
      17: { sameForAllGrades: true, lowerDeviation: 350 },
      18: { sameForAllGrades: true, lowerDeviation: 385 },
      19: { sameForAllGrades: true, lowerDeviation: 425 },
      20: { sameForAllGrades: true, lowerDeviation: 475 },
      21: { sameForAllGrades: true, lowerDeviation: 525 },
      22: { sameForAllGrades: true, lowerDeviation: 590 },
      23: { sameForAllGrades: true, lowerDeviation: 660 },
      24: { sameForAllGrades: true, lowerDeviation: 740 },
      25: { sameForAllGrades: true, lowerDeviation: 820 },
    },
    y: {
      1: { sameForAllGrades: true, lowerDeviation: null },
      2: { sameForAllGrades: true, lowerDeviation: null },
      3: { sameForAllGrades: true, lowerDeviation: null },
      4: { sameForAllGrades: true, lowerDeviation: null },
      5: { sameForAllGrades: true, lowerDeviation: null },
      6: { sameForAllGrades: true, lowerDeviation: 63 },
      7: { sameForAllGrades: true, lowerDeviation: 75 },
      8: { sameForAllGrades: true, lowerDeviation: 94 },
      9: { sameForAllGrades: true, lowerDeviation: 114 },
      10: { sameForAllGrades: true, lowerDeviation: 144 },
      11: { sameForAllGrades: true, lowerDeviation: 174 },
      12: { sameForAllGrades: true, lowerDeviation: 214 },
      13: { sameForAllGrades: true, lowerDeviation: 254 },
      14: { sameForAllGrades: true, lowerDeviation: 300 },
      15: { sameForAllGrades: true, lowerDeviation: 340 },
      16: { sameForAllGrades: true, lowerDeviation: 380 },
      17: { sameForAllGrades: true, lowerDeviation: 425 },
      18: { sameForAllGrades: true, lowerDeviation: 470 },
      19: { sameForAllGrades: true, lowerDeviation: 520 },
      20: { sameForAllGrades: true, lowerDeviation: 580 },
      21: { sameForAllGrades: true, lowerDeviation: 650 },
      22: { sameForAllGrades: true, lowerDeviation: 730 },
      23: { sameForAllGrades: true, lowerDeviation: 820 },
      24: { sameForAllGrades: true, lowerDeviation: 920 },
      25: { sameForAllGrades: true, lowerDeviation: 1000 },
    },
    z: {
      1: { sameForAllGrades: true, lowerDeviation: 26 },
      2: { sameForAllGrades: true, lowerDeviation: 35 },
      3: { sameForAllGrades: true, lowerDeviation: 42 },
      4: { sameForAllGrades: true, lowerDeviation: 50 },
      5: { sameForAllGrades: true, lowerDeviation: 60 },
      6: { sameForAllGrades: true, lowerDeviation: 73 },
      7: { sameForAllGrades: true, lowerDeviation: 88 },
      8: { sameForAllGrades: true, lowerDeviation: 112 },
      9: { sameForAllGrades: true, lowerDeviation: 136 },
      10: { sameForAllGrades: true, lowerDeviation: 172 },
      11: { sameForAllGrades: true, lowerDeviation: 210 },
      12: { sameForAllGrades: true, lowerDeviation: 258 },
      13: { sameForAllGrades: true, lowerDeviation: 310 },
      14: { sameForAllGrades: true, lowerDeviation: 365 },
      15: { sameForAllGrades: true, lowerDeviation: 415 },
      16: { sameForAllGrades: true, lowerDeviation: 465 },
      17: { sameForAllGrades: true, lowerDeviation: 520 },
      18: { sameForAllGrades: true, lowerDeviation: 575 },
      19: { sameForAllGrades: true, lowerDeviation: 640 },
      20: { sameForAllGrades: true, lowerDeviation: 710 },
      21: { sameForAllGrades: true, lowerDeviation: 790 },
      22: { sameForAllGrades: true, lowerDeviation: 900 },
      23: { sameForAllGrades: true, lowerDeviation: 1000 },
      24: { sameForAllGrades: true, lowerDeviation: 1100 },
      25: { sameForAllGrades: true, lowerDeviation: 1250 },
    },
    za: {
      1: { sameForAllGrades: true, lowerDeviation: 32 },
      2: { sameForAllGrades: true, lowerDeviation: 42 },
      3: { sameForAllGrades: true, lowerDeviation: 52 },
      4: { sameForAllGrades: true, lowerDeviation: 64 },
      5: { sameForAllGrades: true, lowerDeviation: 77 },
      6: { sameForAllGrades: true, lowerDeviation: 98 },
      7: { sameForAllGrades: true, lowerDeviation: 118 },
      8: { sameForAllGrades: true, lowerDeviation: 148 },
      9: { sameForAllGrades: true, lowerDeviation: 180 },
      10: { sameForAllGrades: true, lowerDeviation: 226 },
      11: { sameForAllGrades: true, lowerDeviation: 274 },
      12: { sameForAllGrades: true, lowerDeviation: 335 },
      13: { sameForAllGrades: true, lowerDeviation: 400 },
      14: { sameForAllGrades: true, lowerDeviation: 470 },
      15: { sameForAllGrades: true, lowerDeviation: 535 },
      16: { sameForAllGrades: true, lowerDeviation: 600 },
      17: { sameForAllGrades: true, lowerDeviation: 670 },
      18: { sameForAllGrades: true, lowerDeviation: 740 },
      19: { sameForAllGrades: true, lowerDeviation: 820 },
      20: { sameForAllGrades: true, lowerDeviation: 920 },
      21: { sameForAllGrades: true, lowerDeviation: 1000 },
      22: { sameForAllGrades: true, lowerDeviation: 1150 },
      23: { sameForAllGrades: true, lowerDeviation: 1300 },
      24: { sameForAllGrades: true, lowerDeviation: 1450 },
      25: { sameForAllGrades: true, lowerDeviation: 1600 },
    },
    zb: {
      1: { sameForAllGrades: true, lowerDeviation: 40 },
      2: { sameForAllGrades: true, lowerDeviation: 50 },
      3: { sameForAllGrades: true, lowerDeviation: 67 },
      4: { sameForAllGrades: true, lowerDeviation: 90 },
      5: { sameForAllGrades: true, lowerDeviation: 108 },
      6: { sameForAllGrades: true, lowerDeviation: 136 },
      7: { sameForAllGrades: true, lowerDeviation: 160 },
      8: { sameForAllGrades: true, lowerDeviation: 200 },
      9: { sameForAllGrades: true, lowerDeviation: 242 },
      10: { sameForAllGrades: true, lowerDeviation: 300 },
      11: { sameForAllGrades: true, lowerDeviation: 360 },
      12: { sameForAllGrades: true, lowerDeviation: 445 },
      13: { sameForAllGrades: true, lowerDeviation: 525 },
      14: { sameForAllGrades: true, lowerDeviation: 620 },
      15: { sameForAllGrades: true, lowerDeviation: 700 },
      16: { sameForAllGrades: true, lowerDeviation: 780 },
      17: { sameForAllGrades: true, lowerDeviation: 880 },
      18: { sameForAllGrades: true, lowerDeviation: 960 },
      19: { sameForAllGrades: true, lowerDeviation: 1050 },
      20: { sameForAllGrades: true, lowerDeviation: 1200 },
      21: { sameForAllGrades: true, lowerDeviation: 1300 },
      22: { sameForAllGrades: true, lowerDeviation: 1500 },
      23: { sameForAllGrades: true, lowerDeviation: 1650 },
      24: { sameForAllGrades: true, lowerDeviation: 1850 },
      25: { sameForAllGrades: true, lowerDeviation: 2100 },
    },
    zc: {
      1: { sameForAllGrades: true, lowerDeviation: 60 },
      2: { sameForAllGrades: true, lowerDeviation: 80 },
      3: { sameForAllGrades: true, lowerDeviation: 97 },
      4: { sameForAllGrades: true, lowerDeviation: 130 },
      5: { sameForAllGrades: true, lowerDeviation: 150 },
      6: { sameForAllGrades: true, lowerDeviation: 188 },
      7: { sameForAllGrades: true, lowerDeviation: 218 },
      8: { sameForAllGrades: true, lowerDeviation: 274 },
      9: { sameForAllGrades: true, lowerDeviation: 325 },
      10: { sameForAllGrades: true, lowerDeviation: 405 },
      11: { sameForAllGrades: true, lowerDeviation: 480 },
      12: { sameForAllGrades: true, lowerDeviation: 585 },
      13: { sameForAllGrades: true, lowerDeviation: 690 },
      14: { sameForAllGrades: true, lowerDeviation: 800 },
      15: { sameForAllGrades: true, lowerDeviation: 900 },
      16: { sameForAllGrades: true, lowerDeviation: 1000 },
      17: { sameForAllGrades: true, lowerDeviation: 1150 },
      18: { sameForAllGrades: true, lowerDeviation: 1250 },
      19: { sameForAllGrades: true, lowerDeviation: 1350 },
      20: { sameForAllGrades: true, lowerDeviation: 1550 },
      21: { sameForAllGrades: true, lowerDeviation: 1700 },
      22: { sameForAllGrades: true, lowerDeviation: 1900 },
      23: { sameForAllGrades: true, lowerDeviation: 2100 },
      24: { sameForAllGrades: true, lowerDeviation: 2400 },
      25: { sameForAllGrades: true, lowerDeviation: 2600 },
    },
  },
};
