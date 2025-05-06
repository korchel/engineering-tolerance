import { create } from "zustand";
import { Deviations, DimensionType, Grade } from "../types/types";
import { getDeviations } from "../lib";

export interface IState {
  shaft: {
    deviations: Deviations;
    toleranceName: string;
    grade: Grade;
  };
  hole: {
    deviations: Deviations;
    toleranceName: string;
    grade: Grade;
  };
  size: number;
  setDeviations: (deviations: Deviations, type: DimensionType) => void;
  setToleranceName: (toleranceName: string, type: DimensionType) => void;
  setGrade: (grade: Grade, type: DimensionType) => void;
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
  setToleranceName: (toleranceName: string, type: DimensionType) =>
    set((state) => ({
      [type]: { ...state[type], toleranceName },
    })),
  setGrade: (grade: Grade, type: DimensionType) =>
    set((state) => ({
      [type]: { ...state[type], grade },
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
