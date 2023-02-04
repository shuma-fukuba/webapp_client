import { Form, Modal, message, notification } from 'antd'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import Button from '~/components/atoms/button'
import { EmailItem } from '~/components/molecules/form-item/email'
import { NumberItem } from '~/components/molecules/form-item/number'
import { PasswordItem } from '~/components/molecules/form-item/password'
import { useAppDispatch } from '~/hooks/redux'
import { forgotPasswordSubmit } from '~/modules/features/auth/authSlice'

interface Props {}

const ConfirmPasswordForm: React.FC<Props> = ({}) => {
  const [loadingTransaction, setLoadingTransaction] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    setLoadingTransaction(true)
  }, [])

  const submitNewPassword = useCallback(
    async (username: string, code: string, password: string) => {
      await dispatch(
        forgotPasswordSubmit({
          username: username,
          code: code,
          password: password,
        })
      )
    },
    [dispatch]
  )

  const handleSubmit = useCallback((values: any) => {
    setLoading(true)
    if (values.password !== values.passwordConfirm) {
      notification.error({ message: 'パスワードが一致していません。' })
      setLoading(false)
      return
    }
    submitNewPassword(values.username, values.code, values.password)
      .then(() => {
        notification.success({ message: 'パスワードを更新しました。' })
        router.push('/sign-in')
        return
      })
      .catch((e) => {
        notification.error({ message: 'パスワードの更新に失敗しました。' })
        return
      })
  }, [])

  return (
    <Modal
      footer={null}
      closable={false}
      centered
      title={'新しいパスワードを登録'}
      open={loadingTransaction}
    >
      <Form onFinish={handleSubmit}>
        <EmailItem name="username" />
        <NumberItem required name="code" placeholder="code" />
        <PasswordItem
          name="password"
          message="新しいパスワードを入力してください。"
          placeholder="新しいパスワード"
        />
        <PasswordItem
          name="passwordConfirm"
          message="もう一度新しいパスワードを入力してください。"
          placeholder="新しいパスワード(確認)"
        />
        <Form.Item>
          <Button color="blue" text="送信" htmlType="submit" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ConfirmPasswordForm
