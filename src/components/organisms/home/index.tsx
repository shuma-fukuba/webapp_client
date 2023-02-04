import { css } from '@emotion/react'
import { memo, useEffect } from 'react'
import PieChart from '~/components/organisms/graph/pie'
// import DemoColumn from '~/components/organisms/graph/column'
import mq from '~/styles/resusable-media-queries'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { readLearningLog } from '~/modules/features/learning-log/learningLogSlice'
import LearningTimes from '~/components/organisms/learning-times'
import ColumnChart from '~/components/organisms/graph/column'
import { Chart as ChartJS, registerables } from 'chart.js'
import { readLangsContents } from '~/modules/features/curriculum/curriculumSlice'

ChartJS.register(...registerables)

interface Props {}

const Content: React.FC<Props> = memo(() => {
  const dispatch = useAppDispatch()
  const { learningLog } = useAppSelector((state) => state.learningLog)

  useEffect(() => {
    dispatch(readLearningLog({}))
    dispatch(readLangsContents())
  }, [dispatch])

  return (
    <div css={HomeWrapper}>
      <div css={HalfStyle}>
        <LearningTimes learningLog={learningLog} />
        <div>
          <ColumnChart datasets={learningLog.monthlyLearningTimes} />
        </div>
      </div>
      <div css={CircleWrapper}>
        <PieChart
          title="学習言語"
          datasets={learningLog.languageCircleDatasets}
        />
        <PieChart
          title="学習コンテンツ"
          datasets={learningLog.contentCircleDatasets}
        />
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
  height: 435px;
  width: 50%;
`

const CircleWrapper = css`
  ${HalfStyle}
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
`

export default Content
