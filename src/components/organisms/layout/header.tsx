import { memo, useCallback } from 'react'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { css } from '@emotion/react'
import { PATH } from '~/env/uri'
import { Button } from 'antd'
import { useAppDispatch } from '~/hooks/redux'
import { signOut } from '~/modules/features/auth/authSlice'

const path = `${PATH}/logo.jpg`

interface Props {
  isModalVisible: boolean
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = memo(
  ({ isModalVisible, setIsModalVisible }) => {
    const dispatch = useAppDispatch()
    const clickHeaderButton = useCallback(() => {
      setIsModalVisible(true)
    }, [isModalVisible])

    const logout = useCallback(() => {
      dispatch(signOut())
    }, [dispatch])

    return (
      <header css={HeaderWrapper}>
        <div css={HeaderContainer}>
          <div>
            <img src={path} alt="logo" css={LogoStyle} />
            <span css={SubTitleStyle}>4th Week</span>
          </div>
          <button onClick={logout}>Sign out</button>
          <div>
            <Button onClick={() => clickHeaderButton()}>記録・投稿 </Button>
          </div>
        </div>
      </header>
    )
  }
)

const HeaderWrapper = css`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 100;
  background-color: #fff;
`

const HeaderContainer = css`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  height: 60px;
`

const LogoStyle = css`
  object-fit: cover;
  height: 100%;
`

const SubTitleStyle = css`
  color: skyblue;
`

export default Header
