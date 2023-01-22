import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { css } from '@emotion/react'
import { PieChartSchema } from '~/entities/learning-log'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Props {
  title: string
  datasets: PieChartSchema[]
}

const PieChart: React.FC<Props> = ({ title, datasets }) => {
  const labels = datasets.map((x) => x.name)
  const values = datasets.map((x) => x.ratio)

  const config = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          'rgb(3, 69, 236)',
          'rgb(15, 113, 189)',
          'rgb(32, 189, 222)',
          'rgb(60, 206, 254)',
          'rgb(178, 158, 243)',
          'rgb(109, 70, 236)',
          'rgb(74, 23, 239)',
          'rgb(49, 5, 192)',
        ],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        // display: false,
        boxWidth: 1,
        padding: 5,
        position: 'bottom',
        align: 'start',
      },
    },
  }

  return (
    <div css={PieStyle}>
      <p>{title}</p>
      <Pie data={config} options={options} />
    </div>
  )
}

const PieStyle = css`
  width: 50%;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`

export default PieChart
