import { create } from "zustand";
import { Deviations, DimensionType } from "../types/types";

export interface IState {
  shaft: {
    deviations: Deviations;
    toleranceGrade: string;
  };
  hole: {
    deviations: Deviations;
    toleranceGrade: string;
  };
  size: number;
  setDeviations: (deviations: Deviations, type: DimensionType) => void;
  setToleranceGrade: (toleranceGrade: string, type: DimensionType) => void;
  setSize: (size: number) => void;
}

export const useAppStore = create<IState>((set) => ({
  hole: {
    deviations: {
      upperDeviation: 21,
      lowerDeviation: 0,
    },
    toleranceGrade: " H7 ",
  },
  shaft: {
    deviations: {
      upperDeviation: -7,
      lowerDeviation: -20,
    },
    toleranceGrade: "g6",
  },
  size: 35,
  setDeviations: (deviations: Deviations, type: DimensionType) =>
    set((state) => ({
      [type]: { ...state[type], deviations },
    })),
  setToleranceGrade: (toleranceGrade: string, type: DimensionType) =>
    set((state) => ({
      [type]: { ...state[type], toleranceGrade },
    })),
  setSize: (size: number) => set({ size }),
}));
