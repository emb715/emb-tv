import { useRef } from "react";
import { useInterval } from "../../hooks/useInterval";
import type { ProgramWithTimes } from "../../hooks/useScheduleFetch";
import "./css/ScheduleSimple.css";

const getTimeText = ({
  hasStarted,
  hasEnded,
  startOf,
  endOf,
  startTime,
  endTime,
}: ProgramWithTimes["times"]) => {
  let text = "";
  if (!hasStarted && !hasEnded) {
    text = `in ${startOf(startTime)}`;
  } else if (hasStarted && !hasEnded) {
    text = `${endOf(endTime)} left`;
  }
  return text;
};

const TimeText = ({
  programTimes,
}: {
  programTimes: ProgramWithTimes["times"];
}) => {
  const timeText = useRef(getTimeText(programTimes));

  useInterval(() => {
    timeText.current = getTimeText(programTimes);
  }, 20000);

  return (
    <div className="guide__item-time">
      <span>{timeText.current}</span>
    </div>
  );
};

function NoPrograms(message: string = "No programs") {
  return (
    <div id="schedule-simple" className="guide__list guide__list--EMPTY">
      <div className="guide__item">{message}</div>
    </div>
  );
}

function Loading() {
  return (
    <div id="schedule-simple" className="guide__list  guide__list--LOADING">
      <div className="guide__item">Loading...</div>
    </div>
  );
}

type ScheduleSimpleProps = {
  scheduleGroup: ProgramWithTimes[];
  loading?: boolean;
  error?: boolean;
};

function ScheduleSimple({
  scheduleGroup,
  loading,
  error,
}: ScheduleSimpleProps) {
  if (error) {
    return NoPrograms();
  }
  if (!scheduleGroup) {
    if (loading === true) {
      return Loading();
    }
    return NoPrograms();
  }

  return (
    <div id="schedule-simple" className="guide__list">
      {scheduleGroup.map((item: ProgramWithTimes) => {
        const { times: programTimes } = item;
        const startedStyle = programTimes.hasStarted
          ? "guide__item--STARTED"
          : "";
        const endedStyle = programTimes.hasEnded ? "guide__item--ENDED" : "";

        return (
          <div
            className={`guide__item ${startedStyle} ${endedStyle}`}
            key={item.id}
          >
            <TimeText programTimes={programTimes} />
            <div className="guide__item-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="guide__item-percentage">
              <div
                className="guide__item-percentage-bar"
                data-value={programTimes.getPercentageCompleted()}
                style={{
                  width: `${(
                    programTimes.getPercentageCompleted() * 100
                  ).toFixed()}%`,
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { ScheduleSimple };
