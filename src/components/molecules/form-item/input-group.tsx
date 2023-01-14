import React from 'react'
import { Form, Input, Space } from 'antd'
import { NoMargin } from '~/styles/app/spacing'

export interface InputGroupProps {
  label?: string
  required?: boolean
  children?: React.ReactNode
}

export const InputGroupItem: React.VFC<InputGroupProps> = ({
  label,
  required,
  children,
}) => {
  return (
    <Form.Item label={label} required={required} css={NoMargin}>
      <Input.Group>
        <Space>{children}</Space>
      </Input.Group>
    </Form.Item>
  )
}
