import React, { ReactNode, memo } from 'react'
import Header from '~/components/organisms/layout/header'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = memo(({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
})

export default Layout
