import { Form, Input, FormItemProps } from 'antd'

export interface TextItemProps extends FormItemProps {
  placeholder?: string
}

export const TextItem: React.VFC<TextItemProps> = ({
  placeholder,
  ...formItemProps
}) => {
  return (
    <Form.Item {...formItemProps}>
      <Input placeholder={placeholder} />
    </Form.Item>
  )
}
