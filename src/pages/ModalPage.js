import React, { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"
import { NavigationContext } from "../context/navigation"
export default function ModalPage() {
  // const { currentPath } = useContext(NavigationContext)
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <div>
              <Button primary onClick={handleClose}>
                I accept
              </Button>
            </div>
          }
        >
          <p>Here is an important agreement for you to accept</p>
        </Modal>
      )}
    </div>
  )
}
