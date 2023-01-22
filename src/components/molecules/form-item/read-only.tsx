import { Form, Input } from 'antd'

export interface ReadOnlyItemProps {
  label?: string
  name: string
  noStyle?: boolean
  placeholder?: string
}

export const ReadOnlyItem: React.FC<ReadOnlyItemProps> = ({
  label,
  name,
  noStyle,
  placeholder,
}) => {
  return (
    <Form.Item name={name} label={label} noStyle={noStyle}>
      <Input placeholder={placeholder} disabled />
    </Form.Item>
  )
}
