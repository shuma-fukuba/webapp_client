import { Form, Modal, message } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { EmailItem } from '~/components/molecules/form-item/email'
import Button from '~/components/atoms/button'
import { css } from '@emotion/react'
import { useAppDispatch } from '~/hooks/redux'
import { forgotPassword } from '~/modules/features/auth/authSlice'
import { useRouter } from 'next/router'

interface Props {}

const ResetPassword: React.FC<Props> = ({}) => {
  const [loadingTransaction, setLoadingTransaction] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const passwordResetRequest = useCallback(
    async (username: string) => {
      await dispatch(forgotPassword({ username }))
    },
    [dispatch]
  )

  const handleSubmit = useCallback(
    (values: any) => {
      setLoadingTransaction(true)
      passwordResetRequest(values.email)
        .then(() => {
          message.success('認証メールを送信しました。')
          router.push('/confirm-password')
          return
        })
        .catch(() => {
          message.error('認証メールの送信に失敗しました。')
        })
    },
    [setLoadingTransaction, passwordResetRequest]
  )

  useEffect(() => {
    setLoadingTransaction(true)
  }, [])
  return (
    <Modal
      footer={null}
      closable={false}
      centered
      title={'パスワードをリセット'}
      open={loadingTransaction}
    >
      <Form onFinish={handleSubmit}>
        <EmailItem />
        <Form.Item>
          <div css={ButtonStyle}>
            <Button color="blue" text="送信" htmlType="submit" />
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

const ButtonStyle = css`
  text-align: center;
`

export default ResetPassword
