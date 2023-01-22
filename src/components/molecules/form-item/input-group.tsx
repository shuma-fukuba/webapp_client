import React from 'react'
import { Form, Input, Space } from 'antd'

export interface InputGroupProps {
  label?: string
  required?: boolean
  children?: React.ReactNode
}

export const InputGroupItem: React.FC<InputGroupProps> = ({
  label,
  required,
  children,
}) => {
  return (
    <Form.Item label={label} required={required}>
      <Input.Group>
        <Space>{children}</Space>
      </Input.Group>
    </Form.Item>
  )
}
