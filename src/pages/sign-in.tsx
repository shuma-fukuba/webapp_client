import Modal from 'antd/lib/modal/Modal'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { SignInForm } from '~/components/form/auth/sign-in'

interface Props {}

const SignIn: React.FC<Props> = () => {
  const [loadingTransaction, setLoadingTransaction] = useState<boolean>(false)
  useEffect(() => {
    setLoadingTransaction(true)
  }, [])

  return (
    <Modal
      footer={null}
      closable={false}
      centered
      title={'POSSE WebAppにサインイン'}
      open={loadingTransaction}
    >
      <SignInForm />
      <Link href={'/reset-password'}>
        <a>Forgot password?</a>
      </Link>
    </Modal>
  )
}

export default SignIn
