import '../pages/Home.css';
import img from '../assets/home.png'
import React from 'react'

export default function Home({valid}) {
  return (
  <>
    {/* <img className='roadmap' src='https://www.arweave.net/2JPuPwXjkLDm80C-kUaQrFH4LCcQzxIpNpGvM07fSjE' alt='roadmap'/> */}
    <div className='home'>
      <div className="mintbtn">
             {valid && <button type="button" className="mybtn">MINT</button>}
      </div>
    <img className='roadmap' src={img} alt='roadmap'/>
    </div>
  </>
  )
}
