import { memo } from 'react'

interface Props {}

const Header: React.FC<Props> = memo(() => {
  return (
    <header>
      <div></div>
      <div></div>
    </header>
  )
})

export default Header
