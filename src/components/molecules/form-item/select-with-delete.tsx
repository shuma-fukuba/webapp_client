import { CloseOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Button, Form, message, Modal, Select } from 'antd'
import React, { useCallback } from 'react'
import { Uuid } from '~/entities/base'
import { SelectItemProps } from './select'

export interface SelectWithDeleteItemProps extends SelectItemProps {
  handleDelete: (id: Uuid) => Promise<any>
  confirmTitle?: string
  confirmContent?: string
}

export const SelectWithDeleteItem: React.VFC<SelectWithDeleteItemProps> = ({
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
  handleDelete,
  confirmTitle,
  confirmContent,
  ...formItemProps
}) => {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      const targetId = e.currentTarget.id
      return Modal.confirm({
        title: confirmTitle || '本当に削除しますか？',
        icon: <QuestionCircleOutlined style={{ color: 'red' }} />,
        content: (
          <div>
            <div>「{object[targetId]}」を削除しますか？</div>
            <div>{confirmContent}</div>
          </div>
        ),
        width: 500,
        onOk: async () => {
          handleDelete(targetId).then((result: any) => {
            if (result?.error) {
              message.error('削除に失敗しました')
            } else {
              message.success('削除が完了しました')
            }
          })
        },
      })
    },
    [confirmContent, confirmTitle, handleDelete, object]
  )

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
          const name = object[key]
          const value = sendKey ? key : name
          return (
            <Select.Option value={value} key={key} name={name}>
              <div css={WrapperStyle}>
                <div>{name}</div>
                {name && (
                  <>
                    <Button
                      onClick={handleClick}
                      id={key}
                      type="text"
                      shape="circle"
                      css={ButtonStyle}
                    >
                      <CloseOutlined />
                    </Button>
                  </>
                )}
              </div>
            </Select.Option>
          )
        })}
      </Select>
    </Form.Item>
  )
}

const WrapperStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ButtonStyle = css`
  border: none;
  margin: 0;
  padding: 0;
  &:hover {
    background: #aaa;
    border-color: #aaa;
    color: #fff;
  }
`
