import { Pie } from '@ant-design/plots'
import { css } from '@emotion/react'

const PieChart = () => {
  const data = [
    {
      type: 'HTML',
      value: 27,
    },
    {
      type: 'CSS',
      value: 25,
    },
    {
      type: 'JavaScript',
      value: 18,
    },
    {
      type: 'Python',
      value: 15,
    },
    {
      type: 'C',
      value: 10,
    },
    {
      type: 'Java',
      value: 5,
    },
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  }
  return <div css={PieStyle}>
    <Pie {...config} />
  </div>
}

const PieStyle = css`
  width: 50%;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`

export default PieChart
