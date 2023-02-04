import { css } from '@emotion/react'
import { unwrapResult } from '@reduxjs/toolkit'
import { Form, notification } from 'antd'
import React, { useCallback } from 'react'
import Button from '~/components/atoms/button'
import { EmailItem } from '~/components/molecules/form-item/email'
import { PasswordItem } from '~/components/molecules/form-item/password'
import { useAppDispatch } from '~/hooks/redux'
import { signIn } from '~/modules/features/auth/authSlice'

export const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleSubmit = useCallback(
    (values: { email: string; password: string }) => {
      dispatch(signIn({ email: values.email, password: values.password }))
        .then(unwrapResult)
        .then(() => {
          notification.success({ message: 'サインインしました。' })
        })
        .catch(() =>
          notification.error({
            message: 'メールアドレス・パスワードが一致しません。',
          })
        )
    },
    [dispatch]
  )

  return (
    <Form onFinish={handleSubmit}>
      <EmailItem />
      <PasswordItem name="password" message="パスワードを入力してください" />
      <div css={ButtonStyle}>
        <Form.Item noStyle>
          <Button text="サインイン" htmlType="submit" color="blue" />
        </Form.Item>
      </div>
    </Form>
  )
}

const ButtonStyle = css`
  text-align: center !important;
`
