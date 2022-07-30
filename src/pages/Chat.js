import React,{useState} from 'react'
import './Chat.css'
import Confirmation from './Modals/Confirmation'

export const Chat = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
   <>
   <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Confirmation setOpenModal={setModalOpen} />}
   </>
  )
}
