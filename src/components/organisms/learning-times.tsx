import { LearningLog } from '~/entities/learning-log'
import TimeCard from './home/time-card'
import { css } from '@emotion/react'

interface Props {
  learningLog: LearningLog
}

const LearningTimes: React.FC<Props> = ({ learningLog }) => {
  return (
    <div css={TimeCardsWrapper}>
      <TimeCard title="today" time={learningLog.todayTime} />
      <TimeCard title="month" time={learningLog.monthlySum} />
      <TimeCard title="total" time={learningLog.totalSum} />
    </div>
  )
}

const TimeCardsWrapper = css`
  width: 100%;
  margin-right: 0;
  display: flex;
  justify-content: center;
  gap: 0 20px;
`
export default LearningTimes
