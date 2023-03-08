import { useState, useEffect } from 'react'
import { orderBy } from 'lodash'
import { useInterval } from '../../hooks/useInterval'
import { getTimeSpan, TimeSpan } from '../../utils/getTimeSpan'
import './ScheduleSimple.scss'

function NoPrograms(message: string = 'No programs') {
  return (
    <div id="schedule-simple" className="guide__list guide__list--EMPTY">
      <div className="guide__item">{message}</div>
    </div>
  )
}

function Loading() {
  return (
    <div id="schedule-simple" className="guide__list  guide__list--LOADING">
      <div className="guide__item">Loading...</div>
    </div>
  )
}

type ScheduleGroup = {
  id: string
  start: number
  end: number
  title: string
  description: string
  // image?: string,
}
type ScheduleSimpleProps = {
  scheduleGroup: ScheduleGroup[]
  loading?: boolean
  error?: boolean
}

function ScheduleSimple({ scheduleGroup, loading, error }: ScheduleSimpleProps) {
  const getTimes = () => {
    if (!scheduleGroup) {
      return []
    }
    const scheduleOrdered = orderBy(scheduleGroup, ['start'], ['asc'])
    const times: TimeSpan[] = scheduleOrdered.map((item) =>
      getTimeSpan(item.start, item.end, { timeOf: 'seconds' })
    )
    return times
  }
  const [scheduleTimes, setScheduleTimes] = useState<TimeSpan[]>(getTimes())

  // Init Interval
  useInterval(() => {
    setScheduleTimes(getTimes())
  }, 20000) // 20 seconds

  useEffect(() => {
    setScheduleTimes(getTimes())
  }, [scheduleGroup])

  if (error) {
    return NoPrograms()
  }
  if (!scheduleGroup) {
    if (loading === true) {
      return Loading()
    }
    return NoPrograms()
  }

  return (
    <div id="schedule-simple" className="guide__list">
      {scheduleTimes.length > 0 &&
        scheduleGroup.map((item, index) => {
          const times = scheduleTimes[index]

          let timeText = ''
          if (!times?.hasStarted() && !times?.hasEnded()) {
            timeText = `in ${times?.startOf(times?.startTime)}`
          } else if (times?.hasStarted() && !times?.hasEnded()) {
            timeText = `${times?.endOf(times?.endTime)} left`
          }

          const startedStyle = times?.hasStarted() ? 'guide__item--STARTED' : ''
          const endedStyle = times?.hasEnded() ? 'guide__item--ENDED' : ''

          return (
            <div className={`guide__item ${startedStyle} ${endedStyle}`} key={item.id}>
              <div className="guide__item-time">
                <span>{timeText}</span>
              </div>
              <div className="guide__item-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="guide__item-percentage">
                <div
                  className="guide__item-percentage-bar"
                  data-value={times?.getPercentageCompleted()}
                  style={{
                    width: `${(times?.getPercentageCompleted() * 100).toFixed()}%`,
                  }}
                ></div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export { ScheduleSimple }
