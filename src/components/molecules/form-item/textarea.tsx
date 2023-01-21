import { Form, Input } from 'antd'
import { Rule } from 'antd/lib/form'

export interface TextAreaItemProps {
  label?: string
  name: string
  rules?: Rule[]
  placeholder?: string
  noStyle?: boolean
}

export const TextAreaItem: React.VFC<TextAreaItemProps> = ({
  label,
  name,
  rules,
  placeholder,
  noStyle,
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules} noStyle={noStyle}>
      <Input.TextArea placeholder={placeholder} autoSize={{ minRows: 2 }} />
    </Form.Item>
  )
}
