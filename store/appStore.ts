import { create } from "zustand";

import { Deviations, DimensionType, Grade } from "../types";
import { api } from "../services/api";

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
  setSize: (
    size: number,
    holeTolerance: string,
    holeGrade: Grade,
    shaftTolerance: string,
    shaftGrade: Grade
  ) => void;
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
  setSize: async (
    size,
    holeTolerance,
    holeGrade,
    shaftTolerance,
    shaftGrade
  ) => {
    const data = await api.deviations.getDeviations(
      size,
      holeTolerance,
      holeGrade,
      shaftTolerance,
      shaftGrade
    );

    set((state) => ({
      size,
      hole: {
        deviations: data.hole,
        toleranceName: state.hole.toleranceName,
        grade: state.hole.grade,
      },
      shaft: {
        deviations: data.shaft,
        toleranceName: state.shaft.toleranceName,
        grade: state.shaft.grade,
      },
    }));
  },
}));
