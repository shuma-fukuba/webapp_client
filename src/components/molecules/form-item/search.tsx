import { Form, Input } from 'antd'

interface Props {
  onSearch: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void
}

export const SearchItem: React.VFC<Props> = ({ onSearch }) => {
  return (
    <Form.Item name="search">
      <Input.Search onSearch={onSearch} enterButton />
    </Form.Item>
  )
}
