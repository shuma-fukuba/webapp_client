import { css } from '@emotion/react'
import { memo, useEffect } from 'react'
// import DemoPie from '~/components/organisms/graph/pie'
import TimeCard from './time-card'
// import DemoColumn from '~/components/organisms/graph/column'
import mq from '~/styles/resusable-media-queries'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { readLearningLog } from '~/modules/features/learning-log/learningLogSlice'

interface Props {}

const Content: React.FC<Props> = memo(() => {
  const dispatch = useAppDispatch()
  const learningLog = useAppSelector((state) => state.learningLog.learningLog)

  useEffect(() => {
    dispatch(readLearningLog({}))
  }, [learningLog])

  return (
    <div css={HomeWrapper}>
      <div css={HalfStyle}>
        <div css={TimeCardsWrapper}>
          <TimeCard title="today" time={2} />
          <TimeCard title="month" time={48} />
          <TimeCard title="total" time={122} />
        </div>
        <div>
          {/* <DemoColumn /> */}
        </div>
      </div>
      <div css={CircleWrapper}>
        {/* <DemoPie />
        <DemoPie /> */}
      </div>
    </div>
  )
})

const HomeWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  width: 1200px;
  margin: 0 auto;

  ${mq['smartphone']} {
    flex-direction: column;
  }
`

const HalfStyle = css`
  width: 50%;
`

const TimeCardsWrapper = css`
  width: 100%;
  margin-right: 0;
  display: flex;
  justify-content: center;
  gap: 0 20px;
`

const CircleWrapper = css`
  ${HalfStyle}
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
`

export default Content
