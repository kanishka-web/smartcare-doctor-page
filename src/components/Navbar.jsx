import React from 'react'
import scLogo from '../assets/scLogo.png'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between mw-100'>
      <div>
       <img src={scLogo} alt="logo" width={90} height={50} className='p-2'/>
      </div>
      <div className='d-flex align-items-center justiy-content-center'>
        <ul style={{listStyle:"none"}} className='d-flex justify-content-center'>
            <li className='m-2'>
             <a href="">Plans</a>
            </li>
            <li className='m-2'>
                <a href="">
                    Pricing
                </a>
            </li>
            <li className='m-2'>
                <a href="">
                    Contact Us
                </a>
            </li>
            <li className='m-2'>
                <button className='text-dark' style={{background:"white"}}>
                    Doctor Login
                </button>
            </li>
            <li className='m-2'>
                <button className='text-white' style={{background:"#021B79"}}>
                    Download My App
                </button>
            </li>
        </ul>
   


     
      </div>
    </div>
  )
}

export default Navbar