import React from 'react'
import './Confirmation.css'
const Confirmation = ({setOpenModal}) => {
  return (
    <>
       <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>Please allow access to your account to mint NFT. We are requesting you to grant<b> 3.0 $DESO</b> for NFT to mint.</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
</>
)
  }
export default Confirmation;