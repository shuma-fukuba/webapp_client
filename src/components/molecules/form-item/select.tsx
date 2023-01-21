import { Form, Select, FormItemProps } from 'antd'
import { ReactElement } from 'react'

export interface SelectItemProps extends FormItemProps {
  placeholder?: string
  allowClear?: boolean
  mode?: 'multiple' | 'tags'
  tokenSeparators?: string[]
  object: {
    [key: string]: string
  }
  showSearch?: boolean
  optionFilterProp?: string
  filterOption?: boolean
  sendKey?: boolean
  dropdownRender?: (menu: ReactElement) => ReactElement
  onChange?: (value, option) => void
}

export const SelectItem: React.VFC<SelectItemProps> = ({
  placeholder,
  allowClear,
  mode,
  tokenSeparators,
  object,
  showSearch,
  optionFilterProp,
  filterOption,
  sendKey,
  dropdownRender,
  onChange,
  ...formItemProps
}) => {
  return (
    <Form.Item {...formItemProps}>
      <Select
        placeholder={placeholder ? placeholder : '選択してください'}
        allowClear={allowClear}
        mode={mode}
        tokenSeparators={tokenSeparators}
        showSearch={showSearch}
        optionFilterProp={optionFilterProp}
        filterOption={filterOption}
        dropdownRender={dropdownRender}
        onChange={onChange}
      >
        {Object.keys(object).map((key) => {
          const value = sendKey ? key : object[key]
          return (
            <Select.Option value={value} key={key}>
              {object[key]}
            </Select.Option>
          )
        })}
      </Select>
    </Form.Item>
  )
}
