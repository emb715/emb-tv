import moment from "moment";
import type { ProgramRaw } from "../hooks/useScheduleFetch";
import { convertToTime } from "./timeHelpers";

const WITHOUT_SUFFIX = true;

type ProgramTimes = {
  startTime: number;
  endTime: number;
  startOf: (time: number) => string;
  endOf: (time: number) => string;
  hasStarted: boolean;
  hasEnded: boolean;
  isCurrent: boolean;
  getPercentageCompleted: () => number;
}

function getProgramTimes(program: ProgramRaw): ProgramTimes {
  const currentTime = Date.now();
  const startTime = convertToTime(program.Start);
  const endTime = convertToTime(program.End);

  const hasStarted = moment(startTime).isBefore(moment(currentTime));
  const hasEnded = moment(currentTime).isAfter(moment(endTime));

  const getStartOf = (time: number) =>
    moment(time).startOf("minutes").fromNow(WITHOUT_SUFFIX);
  const getEndOf = (time: number) =>
    moment(time).startOf("minutes").fromNow(WITHOUT_SUFFIX);

  const isCurrent = hasStarted && !hasEnded;

  const timeCompleted = () => {
    return (Date.now() - startTime) / (endTime - startTime)
  };

  const getPercentageCompleted = () => hasStarted ? timeCompleted() : 0;

  return {
    startTime,
    endTime,
    startOf: getStartOf,
    endOf: getEndOf,
    hasStarted,
    hasEnded,
    isCurrent,
    getPercentageCompleted,
  };
}

export { getProgramTimes }
export type { ProgramTimes }