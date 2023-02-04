import { css } from '@emotion/react'
import { Spin } from 'antd'
import { useAppSelector } from '~/hooks/redux'

interface Props {
  title: string
  time: number
}

const TimeCard: React.FC<Props> = ({ title, time }) => {
  const { loadingMarkers } = useAppSelector((state) => state.learningLog)
  return (
    <div css={CardWrapper}>
      <Spin spinning={loadingMarkers}>
        <div css={TitleStyle}>{title}</div>
        <div css={TimeStyle}>{time}</div>
        <div>
          <span css={HourTextStyle}>hour</span>
        </div>
      </Spin>
    </div>
  )
}

const CardWrapper = css`
  padding: 16px;
  text-align: center;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  width: 33%;
`

const TitleStyle = css`
  font-size: 16px;
  font-weight: 600;
  color: rgb(15, 113, 188);
`

const TimeStyle = css`
  font-size: 26px;
  font-weight: 700;
`

const HourTextStyle = css`
  color: rgb(151, 185, 209);
`

export default TimeCard
