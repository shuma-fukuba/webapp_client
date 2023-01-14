import { Form, Space, Typography } from 'antd'
import { TextItem, TextItemProps } from '~/components/molecules/form-item/text'

interface TextItemLabelEndProps {
  labelEnd: string
  required?: boolean
}

export const TextItemLabelEnd: React.VFC<
  TextItemLabelEndProps & TextItemProps
> = ({ label, labelEnd, required, ...textItemProps }) => {
  return (
    <Form.Item label={label} required={required}>
      <Space align="baseline">
        <TextItem {...textItemProps} />
        <Typography>{labelEnd}</Typography>
      </Space>
    </Form.Item>
  )
}
