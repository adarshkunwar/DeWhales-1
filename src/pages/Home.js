import '../pages/Home.css';
import React,{useState} from 'react'
import img from '../assets/landingimg.png'
import '../assets/fonts/pineapple.ttf'
import Confirmation from './Modals/Confirmation'
import { Nftmodal } from './Modals/Nftmodal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home({valid,ukey}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({hex:"",validity:false,counter:0});
  const handleModal =(data)=>{
    setModalOpen(data)
  }
  const handleData = (hex,validity,count)=>{
    count = data.counter+count;
    setData({hex,validity,counter:count});
  }
  console.log(data.hex);
  console.log(openModal);
  console.log(data.validity);
  return (
  <>
    <div className='home'>
    {modalOpen && <Confirmation handleModal={handleModal} handleData = {handleData} ukey={ukey} toast={toast}/>}
      <div className='mobile'></div>
        <div className='hometext'>
        <h1>DeWhales is the semi-generative NFT project 
          of 444 Whales deployed on  DeSo Blockchain.
        </h1>
        <div className="mintbtn">
             {valid && <button type="button" className="mint_btn" onClick={() => {
          setModalOpen(true);
        }} >MINT</button>}
        {data.validity && <Nftmodal handleData ={handleData} setOpenModal={setOpenModal} data={data} ukey={ukey}/>}
      </div>
      <div className='space'></div>
        </div>
    <img className='roadmap' src={img} alt='roadmap' />
    </div>
    <div class="toast">
    <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
    </div>
    
  </>
  )
}
