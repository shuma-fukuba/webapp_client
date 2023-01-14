import { Form, Space, Typography } from 'antd'
import {
  NumberItem,
  NumberItemProps,
} from '~/components/molecules/form-item/number'

interface NumberItemLabelEndProps {
  labelEnd: string
  required?: boolean
}

export const NumberItemLabelEnd: React.VFC<
  NumberItemLabelEndProps & NumberItemProps
> = ({ label, labelEnd, required, ...numberItemProps }) => {
  return (
    <Form.Item label={label} required={required}>
      <Space align="baseline">
        <NumberItem {...numberItemProps} />
        <Typography>{labelEnd}</Typography>
      </Space>
    </Form.Item>
  )
}
