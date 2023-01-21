import { shallow } from 'enzyme'

import { PlusOutlined } from '@ant-design/icons'
import Button from './index'

describe('button', () => {
  const colors = {
    gray: 'gray',
    white: 'white',
    blue: 'blue',
  } as const
  const text = 'test'
  const icon = <PlusOutlined />

  const GrayWithIcon = shallow(
    <Button color={colors.gray} text={text} icon={icon} />
  )
  const GrayWithoutIcon = shallow(<Button color={colors.gray} text={text} />)

  const WhiteWithIcon = shallow(
    <Button color={colors.white} text={text} icon={icon} />
  )
  const WhiteWithoutIcon = shallow(<Button color={colors.white} text={text} />)

  const BlueWithIcon = shallow(
    <Button color={colors.blue} text={text} icon={icon} />
  )
  const BlueWithoutIcon = shallow(<Button color={colors.blue} text={text} />)

  it('should render gray button with text and icon', () => {
    expect(GrayWithIcon).toMatchSnapshot()
  })
  it('should render gray button with text and without icon', () => {
    expect(GrayWithoutIcon).toMatchSnapshot()
  })

  it('should render blue button with text and icon', () => {
    expect(BlueWithIcon).toMatchSnapshot()
  })
  it('should render blue button with text and without icon', () => {
    expect(BlueWithoutIcon).toMatchSnapshot()
  })

  it('should render white button with text and icon', () => {
    expect(WhiteWithIcon).toMatchSnapshot()
  })
  it('should render white button with text and without icon', () => {
    expect(WhiteWithoutIcon).toMatchSnapshot()
  })
})
