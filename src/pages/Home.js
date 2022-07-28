import '../pages/Home.css';
import img from '../assets/home.png'
import React from 'react'

export default function Home() {
  return (
  <>
    {/* <img className='roadmap' src='https://www.arweave.net/2JPuPwXjkLDm80C-kUaQrFH4LCcQzxIpNpGvM07fSjE' alt='roadmap'/> */}
    <div class='home'>
    <img className='roadmap' src={img} alt='roadmap'/>
    </div>
  </>
  )
}
