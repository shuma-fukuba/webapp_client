import { css } from '@emotion/react'
import { Form, Modal, Spin, message } from 'antd'
import { memo, useCallback } from 'react'
import Button from '~/components/atoms/button'
import { DateItem } from '~/components/molecules/form-item/date'
import { NumberItem } from '~/components/molecules/form-item/number'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { TextAreaItem } from '../../molecules/form-item/textarea'
import { SelectItem } from '~/components/molecules/form-item/select'
import {
  createLearningLog,
  setLoadingMarkers,
} from '~/modules/features/learning-log/learningLogSlice'
import moment from 'moment'
import { readLearningLog } from '~/modules/features/learning-log/learningLogSlice'

interface Props {
  isModalVisible: boolean
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

interface LearningLogValues {
  date: moment.Moment
  languages: string[]
  contents: string[]
  learning_time: number
}

const ModalCard: React.FC<Props> = memo(
  ({ isModalVisible, setIsModalVisible }) => {
    const dispatch = useAppDispatch()
    const { languages, contents } = useAppSelector((state) => state.curriculums)
    const { loadingMarkers } = useAppSelector((state) => state.learningLog)
    const languageObj = {}
    const contentObj = {}

    languages.forEach((item) => {
      languageObj[item.language_id] = item.language
    })

    contents.forEach((item) => {
      contentObj[item.learning_content_id] = item.name
    })

    const handleClose = useCallback(() => {
      setIsModalVisible(false)
    }, [isModalVisible])

    const handleSubmit = useCallback(
      (values: LearningLogValues) => {
        dispatch(setLoadingMarkers(true))
        const {
          date: _date,
          languages: _languages,
          contents: _contents,
          ...rest
        } = values

        const languages = _languages.join(',')
        const contents = _contents.join(',')

        const date = _date.format('YYYY/MM/DD')
        dispatch(
          createLearningLog({
            body: {
              date: date,
              languages: languages,
              contents: contents,
              ...rest,
            },
          })
        )
          .then(() => {
            message.success('記録に成功しました。')
            dispatch(readLearningLog({}))
          })
          .catch(() => message.error('記録に失敗しました。'))
          .finally(() => setLoadingMarkers(false))
      },
      [dispatch]
    )

    return (
      <div>
        <Modal
          open={isModalVisible}
          onCancel={handleClose}
          css={ModalWrapper}
          footer={false}
        >
          <Spin spinning={loadingMarkers}>
            <Form onFinish={handleSubmit}>
              <div css={ModalContent}>
                <div css={HalfStyle}>
                  <DateItem
                    name="date"
                    placeholder="学習日"
                    picker="date"
                    required={true}
                  />
                  <SelectItem
                    object={languageObj}
                    mode="multiple"
                    placeholder="学習言語(複数選択可)"
                    name="languages"
                    sendKey={true}
                  />
                  <SelectItem
                    object={contentObj}
                    mode="multiple"
                    placeholder="学習コンテンツ(複数選択可)"
                    name="contents"
                    sendKey={true}
                  />
                </div>
                <div css={HalfStyle}>
                  <NumberItem
                    required={true}
                    name="learning_time"
                    placeholder="学習時間"
                    max={24}
                    min={0}
                  />
                  <TextAreaItem name="comment" placeholder="コメント" />
                </div>
              </div>
              <Button color="blue" text="送信" htmlType="submit" />
            </Form>
          </Spin>
        </Modal>
      </div>
    )
  }
)

const ModalWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

const ModalContent = css`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const HalfStyle = css`
  width: 50%;
`

export default ModalCard
