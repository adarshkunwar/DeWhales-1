import '../pages/Home.css';
import React,{useState} from 'react'
import img from '../assets/landingimg.png'
import '../assets/fonts/pineapple.ttf'
import Confirmation from './Modals/Confirmation'
export default function Home({valid}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
  <>
    
    <div className='home'>
    {modalOpen && <Confirmation setOpenModal={setModalOpen} />}
      <div className='mobile'></div>
        <div className='hometext'>
        <h1>DeWhales is the semi-generative NFT project 
          of 444 Whales deployed on  DeSo Blockchain.
        </h1>
        <div className="mintbtn">
             {valid && <button type="button" className="mint_btn" onClick={() => {
          setModalOpen(true);
        }} >MINT</button>}
        
      </div>
        </div>
      
    <img className='roadmap' src={img} alt='roadmap' />
    </div>
  </>
  )
}
