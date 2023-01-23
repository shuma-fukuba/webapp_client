import { Form, DatePicker, FormItemProps } from 'antd'

export interface DateItemProps extends FormItemProps {
  format?: string
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year'
  placeholder?: string
  showTime?: object | boolean
}

export const DateItem: React.FC<DateItemProps> = ({
  format,
  picker,
  placeholder,
  showTime,
  ...formItemProps
}) => {
  return (
    <Form.Item {...formItemProps}>
      <DatePicker
        format={format}
        picker={picker}
        placeholder={placeholder}
        showTime={showTime}
      />
    </Form.Item>
  )
}
