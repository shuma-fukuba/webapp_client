import { Modal } from 'antd'
import { memo, useCallback } from 'react'

interface Props {
  isModalVisible: boolean
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalCard: React.FC<Props> = memo(
  ({ isModalVisible, setIsModalVisible }) => {

    const handleClose = useCallback(() => {
      setIsModalVisible(false)
    }, [isModalVisible])

    return (
      <div>
        <Modal open={isModalVisible} onCancel={handleClose}>
          <p>this is modal</p>
        </Modal>
      </div>
    )
  }
)

export default ModalCard
