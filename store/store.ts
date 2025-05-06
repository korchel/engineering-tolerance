import { create } from "zustand";
import { Deviations, DimensionType } from "../types/types";
import { getDeviations } from "../data";

export interface IState {
  shaft: {
    deviations: Deviations;
    toleranceName: string;
    grade: number | string;
  };
  hole: {
    deviations: Deviations;
    toleranceName: string;
    grade: number | string;
  };
  size: number;
  setDeviations: (deviations: Deviations, type: DimensionType) => void;
  setToleranceGrade: (toleranceGrade: string, type: DimensionType) => void;
  setSize: (size: number) => void;
}

export const useAppStore = create<IState>((set) => ({
  hole: {
    deviations: {
      upperDeviation: 25,
      lowerDeviation: 0,
    },
    toleranceName: "H",
    grade: 7,
  },
  shaft: {
    deviations: {
      upperDeviation: 50,
      lowerDeviation: 34,
    },
    toleranceName: "r",
    grade: 6,
  },
  size: 40,
  setDeviations: (deviations: Deviations, type: DimensionType) =>
    set((state) => ({
      [type]: { ...state[type], deviations },
    })),
  setToleranceGrade: (toleranceGrade: string, type: DimensionType) =>
    set((state) => ({
      [type]: { ...state[type], toleranceGrade },
    })),
  setSize: (size: number) =>
    set((state) => ({
      size,
      hole: {
        deviations: getDeviations(
          size,
          "hole",
          state.hole.toleranceName,
          state.hole.grade
        ) as Deviations,
        toleranceName: state.hole.toleranceName,
        grade: state.hole.grade,
      },
      shaft: {
        deviations: getDeviations(
          size,
          "shaft",
          state.shaft.toleranceName,
          state.shaft.grade
        ) as Deviations,
        toleranceName: state.shaft.toleranceName,
        grade: state.shaft.grade,
      },
    })),
}));
