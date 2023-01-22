import { css } from '@emotion/react'
import { MonthlyLearningTimeSchema } from '~/entities/learning-log'
import { Bar } from 'react-chartjs-2'

interface Props {
  datasets: MonthlyLearningTimeSchema[]
}

const ColumnChart: React.FC<Props> = ({ datasets }) => {
  const labels = datasets.map((x) => x.learning_time_date)
  const hours = datasets.map((x) => x.learning_time)

  const data = {
    labels: labels,
    datasets: [
      {
        data: hours,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  return (
    <div>
      <Bar data={data} options={options} css={ColumnCardStyle} />
    </div>
  )
}

const ColumnCardStyle = css`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`

export default ColumnChart
