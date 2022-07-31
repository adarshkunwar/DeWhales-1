import React from 'react'
import { CgCloseO } from "react-icons/cg";
// import {image} from '../../assets/3.png'
export const Nftmodal = ({handleData,setOpenModal}) => {

  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            handleData("",false);
          }}
        >
          <CgCloseO size={35}/>
        </button>
      </div>
      <div className="title">
        <h1>Serial Number:</h1>
      </div>
      <div className="body">
        <p>The NFT you got is:</p>

      </div>
      <div className="footer">
        <button
          onClick={() => {
            handleData("",false);
          }}
          id="cancelBtn"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
  )
}
