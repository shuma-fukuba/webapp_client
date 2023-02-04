import { css } from '@emotion/react'
import { Form, InputNumber } from 'antd'
import { Rule } from 'antd/lib/form'
import { ReactNode } from 'react'

export interface NumberItemProps {
  label?: ReactNode
  name: string
  rules?: Rule[]
  placeholder?: string
  noStyle?: boolean
  min?: number
  max?: number
  disabled?: boolean
  required: boolean
  formatter?: (value: any) => string
  onChange?: (e: number) => void
}

export const NumberItem: React.FC<NumberItemProps> = ({
  label,
  name,
  rules,
  noStyle,
  placeholder,
  onChange,
  formatter,
  min,
  max,
  disabled,
  required,
}) => {
  return (
    <Form.Item
      name={name}
      required={required}
      label={label}
      rules={rules}
      noStyle={noStyle}
    >
      <InputNumber
        placeholder={placeholder}
        css={InputNumberStyle}
        formatter={formatter}
        onChange={onChange}
        min={min}
        max={max}
        disabled={disabled}
      />
    </Form.Item>
  )
}

const InputNumberStyle = css`
  width: 150px;
`
