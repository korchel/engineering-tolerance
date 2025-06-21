import { Grade } from "../types";
import { axiosInstance } from "./axiosInstance";
import { DeviationsDTO } from "./dto/deviations.dto";
import { Paths } from "./paths";

export const getDeviations = async (
  size: number,
  holeTolerance: string,
  holeGrade: Grade,
  shaftTolerance: string,
  shaftGrade: Grade
): Promise<DeviationsDTO> => {
  const { data } = await axiosInstance.get<DeviationsDTO>(Paths.DEVIATIONS, {
    params: { size, holeTolerance, holeGrade, shaftTolerance, shaftGrade },
  });
  return data;
};
