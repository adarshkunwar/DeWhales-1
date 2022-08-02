import React,{useState,useEffect,useRef} from 'react'
import { CgCloseO } from "react-icons/cg";
// import image1 from '../../assets/3.png'
import './Nftmodal.css'
export const Nftmodal = ({handleData,ukey,data}) => {
  const host = "https://deso-backend.herokuapp.com";
  const [nftName, setNftName] = useState('0');
  const [imgLink, setImgLink] = useState('hnsd29SFVxHeY-RI7-dcb56q8w7hSYVv0nNE88ScgO0');
  const [Iname, setIname] = useState('none');
  const [bgColor, setBgColor] = useState('none');
  const [accessories, setAccessories] = useState('none');
  const ref = useRef({
    hex : ""
  })
  useEffect(() => {
    console.log("useEffect Called!")
    if(ref.current.hex!==data.hex)
    {
      ref.current.hex=data.hex;
      apirun();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
    const apirun=async()=>{
      const nftData = await fetch(`${host}/api/nftransfer/update`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          receiverAddress: ukey,
          toBeSent: true
        }),
      });
      const jsonf = await nftData.json();
      console.log(jsonf);
      setImgLink(jsonf.fImageAddress);
      setNftName(jsonf.SN);
      setIname(jsonf.Iname);
      setBgColor(jsonf.bgColor);
      setAccessories(jsonf.accessories);
    }

  return (
    <div className="modalBackground1">
    <div className="modalContainer1">
      <div className="titleCloseBtn1">
      <div className="title1">
        <h2 className='snno'>S.N:&nbsp;{nftName}</h2>
      </div>
        <button
          onClick={() => {
            handleData("",false);
          }}
        >
          <CgCloseO size={35} style={{color: '#032854'}} />
        </button>
      </div>
      <div className="body1">
        {/* <p>The NFT you got is:</p> */}
        <img src={`https://arweave.net/${imgLink}`} alt="" loading='lazy'/>
      </div>
      <div className='traits1'>
          Name:&nbsp;{Iname}<br/>
          BG Color:&nbsp;{bgColor}<br/>
          Accessories:&nbsp;{accessories}
      </div>
      <div className="footer1">
        <button
        
          onClick={() => {
            handleData("",false,true);
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
