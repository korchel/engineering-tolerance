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
  shaft: {
    deviations: {
      upperDeviation: 34,
      lowerDeviation: 34,
    },
    toleranceGrade: "h6",
  },
  hole: {
    deviations: {
      upperDeviation: 34,
      lowerDeviation: 34,
    },
    toleranceGrade: "H6",
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
