import '../pages/Home.css';
import React from 'react'
import img from '../assets/landingimg.png'
import '../assets/fonts/pineapple.ttf'

export default function Home({valid}) {
  return (
  <>
    
    <div className='home'>
      <div className='mobile'></div>
        <div className='hometext'>
        <h1>DeWhales is the semi-generative NFT project 
          of 444 Whales deployed on  DeSo Blockchain.
        </h1>
        <div className="mintbtn">
             {valid && <button type="button" className="mint_btn">MINT</button>}
      </div>
        </div>
      
    <img className='roadmap' src={img} alt='roadmap' />
    </div>
  </>
  )
}
