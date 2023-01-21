import { Column } from '@ant-design/plots'
import { css } from '@emotion/react'

const ColumnChart = () => {
  const data = [
    {
      date: '2022/10/1',
      sales: 38,
    },
    {
      date: '2022/10/2',
      sales: 52,
    },
    {
      date: '2022/10/3',
      sales: 61,
    },
    {
      date: '2022/10/4',
      sales: 145,
    },
    {
      date: '2022/10/5',
      sales: 48,
    },
    {
      date: '2022/10/6',
      sales: 38,
    },
    {
      date: '2022/10/7',
      sales: 38,
    },
    {
      date: '2022/10/8',
      sales: 38,
    },
  ]
  const config = {
    data,
    xField: 'date',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  }
  return (
    <div>
      <Column {...config} css={ColumnCardStyle} />
    </div>
  )
}

const ColumnCardStyle = css`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`

export default ColumnChart
