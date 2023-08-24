import React from 'react'

interface ModalProps {
    modalOpen: Boolean;
    setModalOpen: (open :Boolean) => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps>= ({modalOpen, setModalOpen, children}) => {
  return (
<div className={`modal ${modalOpen ? "modal-open": ""}`}>
  <div className="modal-box">
  {children}
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7"
  onClick={() => setModalOpen(false)}
  >Close</label>
</div>
  )
}

export default Modal
