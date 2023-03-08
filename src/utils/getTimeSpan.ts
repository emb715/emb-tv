import moment from "moment";
import { convertToTime } from "./timeHelpers";

const WITHOUT_SUFFIX = true;

type TimeSpan = {
  startTime: number;
  endTime: number;
  startOf: (time: number) => string;
  endOf: (time: number) => string;
  hasStarted: () => boolean;
  hasEnded: () => boolean;
  getPercentageCompleted: () => number;
}

type TimeSpanOptions = {
  timeOf: 'minutes' | 'seconds' | 'hours'
}
const defaultTimeOf = 'minutes'

function getTimeSpan(start: number, end: number, options?: TimeSpanOptions): TimeSpan {
  const {timeOf} = options || {}
  const currentTime = Date.now();
  const startTime = convertToTime(start);
  const endTime = convertToTime(end);

  const hasStarted = () => moment(startTime).isBefore(moment(currentTime));
  const hasEnded = () => moment(currentTime).isAfter(moment(endTime));

  const getStartOf = (time: number) =>
    moment(time).startOf(timeOf || defaultTimeOf).fromNow(WITHOUT_SUFFIX);
  const getEndOf = (time: number) =>
    moment(time).startOf(timeOf || defaultTimeOf).fromNow(WITHOUT_SUFFIX);

  const timeCompleted = () => {
    return (Date.now() - startTime) / (endTime - startTime)
  };

  const getPercentageCompleted = () => hasStarted() ? timeCompleted() : 0;

  return {
    startTime,
    endTime,
    startOf: getStartOf,
    endOf: getEndOf,
    hasStarted,
    hasEnded,
    getPercentageCompleted,
  };
}

export { getTimeSpan }
export type { TimeSpan }