import React from 'react'
import { CgCloseO } from "react-icons/cg";
import image1 from '../../assets/3.png'
import './Nftmodal.css'
export const Nftmodal = ({handleData,setOpenModal}) => {

  return (
    <div className="modalBackground1">
    <div className="modalContainer1">
      <div className="titleCloseBtn1">
      <div className="title1">
        <h2>S.N:</h2>
      </div>
        <button
          onClick={() => {
            handleData("",false);
          }}
        >
          <CgCloseO size={35}/>
        </button>
      </div>
      <div className="body1">
        {/* <p>The NFT you got is:</p> */}
        <img src={image1} alt="" loading='lazy'/>
      </div>
      <div className='traits1'>
          hello<br/>
          hello<br/>
          hello
      </div>
      <div className="footer1">
        <button
          onClick={() => {
            handleData("",false);
          }}
          id="cancelBtn"
        >
          Ok
        </button>
        <button
          onClick={() => {
            handleData("",false);
          }}
          id="mintBtn"
        >
          Mint Again
        </button>
      </div>
    </div>
  </div>
  )
}
