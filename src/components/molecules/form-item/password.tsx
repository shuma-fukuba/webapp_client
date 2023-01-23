import { LockOutlined } from '@ant-design/icons'
import { Form, Input, message } from 'antd'
import React from 'react'

interface Props {
  name: string
  message: string
  placeholder?: string
}

export const PasswordItem: React.FC<Props> = ({
  name,
  message,
  placeholder,
}) => {
  return (
    <Form.Item
      name={name}
      rules={[
        {
          required: true,
          message: message,
        },
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        placeholder={placeholder}
        autoComplete="off"
      />
    </Form.Item>
  )
}
