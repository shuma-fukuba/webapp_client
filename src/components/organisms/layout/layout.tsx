import { css } from '@emotion/react'
import React, { ReactNode, memo, useState } from 'react'
import Header from '~/components/organisms/layout/header'
import ModalCard from '~/components/organisms/modal'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = memo(({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  return (
    <div>
      <Header isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <main css={MainStyle}>{children}</main>
      <ModalCard isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </div>
  )
})

const MainStyle = css`
  margin-top: 64px;
  background-color: #efefef;
  height: calc(100vh - 64px);
  padding-top: 20px;
`

export default Layout
