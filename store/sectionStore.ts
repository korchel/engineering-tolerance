import { create } from "zustand";
import { homePageSections } from "../lib";

interface IState {
  currentSection: string;
  setCurrentSection: (currentSection: string) => void;
}

export const useSectionStore = create<IState>()((set) => ({
  currentSection: homePageSections.tolerances,
  setCurrentSection: (currentSection: string) => set({ currentSection }),
}));
