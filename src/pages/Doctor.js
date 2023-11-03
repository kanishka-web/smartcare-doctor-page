import React from 'react'
import Navbar from '../components/Navbar';
import bg from '../assets/bg.jpg'
import compStats from '../assets/compStats.png';
import persons from '../assets/persons.png'
import uu from '../assets/uu.png'
import tick from '../assets/tick.png'
import play from '../assets/play.png'
import fourBlocks from '../assets/fourBlocks.png'
import dollarHand from '../assets/dollorHand.png'
import qr from '../assets/qr.png'
import micClock from '../assets/micClock.png'

const Doctor = () => {
  return<div className=''>
  <Navbar/>
  <div className="mw-100 my-5" style={{ backgroundImage: 'url(' + bg + ')' }}>
    <div className='px-3'>
    <div className='row my-3'>
        <div className="col-12 col-md-6 text-center">
          <h1 className='py-3' style={{fontSize:"36px"}}>
            All-In-One-Clinic Management Platform
          </h1>
          <p style={{fontSize:"26px"}}>
            A complete solution to manage your clinic's needs & requirements
          </p>
          <div className='d-flex justify-content-center'>
          <button>
            Request For Demo
          </button>
          <a href="/" style={{color:"blue"}} className='px-3'>Get Started {'\u2192'}</a>
          
          </div>
          
        </div>
        <div className="col-12 col-md-6">
          <img src={compStats} width={400}  alt="" />
        </div>
    </div>
    </div>
</div>
<div className='text-center'>
    Efficient at Your Fingertip's: All-in-one Clinic Management Made Easy.
</div>
<div className='mw-100 my-2 py-2 text-center' style={{backgroundColor:"lightgray"}}>
<div className='container justify-content-between my-5' style={{borderRadius:'10px',backgroundColor:"white"}}>
<div className='d-flex justify-content-between py-3'>
<img src={persons} alt="" width={300} height={300} />
<p>jkskxjs nhsduhs huhduhj jhujdhejhdx dhehjdxe dhhejdhxe hdjehjd dnhejhj nhejnhxj hjdhxj hdhxjh hxdjhxj hd hduuj hdjh</p>
</div>

</div>
</div>
{/* <div className='container'> */}
<div className='d-flex justify-content-between m-3 p-4'  style={{backgroundColor:"#021B79"}}>
  <div className='p-3'><img className="img-fluid" src={compStats} alt="" /></div> 
    <div className='bg-white d-flex p-2' style={{borderRadius:"10px"}}>
       <div className='d-flex justify-content-between'>
        <img src={uu} alt="" width={50} height={50}/>
        <div className='px-2'>
            <h2>Patient Managment</h2>
            <p>Smartcare facilitates doctors in effortlessly managing patient records, tracking medical history, resulting in seamless and personalized care delievery</p>
             <ul style={{listStyle:"none"}}>
              <li>
                <div className='d-flex'>
                <img src={tick} alt="" width={20} height={15}/>
                <p>Schedule Appointment</p>
                </div>
               </li>
               <li>
                <div className='d-flex' >
                <img src={tick} alt=""  width={20} height={15}/>
                <p>Manage Calender</p>
                </div>
               </li>
               <li>
                <div className='d-flex'>
                <img src={tick} alt=""  width={20} height={15}/>
                <p>Patient History</p>
                </div>
               </li>
               <li>
                <div className='d-flex'>
                <img src={tick} alt=""  width={20} height={15} />
                <p>Patient Records</p>
                </div>
               </li>
             </ul>
        </div>

       </div>
    </div>

</div>
{/* </div> */}
{/* <div className="container">

</div> */}
<div className='m-0'>
    <ul className='d-flex justify-content-around' style={{listStyle:"none"}}>
<li>
    <img src={fourBlocks} alt="" width={65} height={65} style={{border:"10px solid #021B79",borderRadius:"50%"}}/>
</li>
<li>
    <img src={dollarHand} alt="" width={65} height={65}  style={{border:"10px solid #021B79",borderRadius:"50%"}}/>
</li>
<li>
    <img src={qr} alt="" width={65} height={65}  style={{border:"10px solid #021B79",borderRadius:"50%"}} />
</li>
<li>
    <img src={micClock} width={65} height={65}  alt="" style={{border:"10px solid #021B79",borderRadius:"50%"}} />
</li>


    </ul>
</div>

<div className='text-center' style={{backgroundColor:"whitesmoke"}}>
<h2>
    Simplify Your Operations:
</h2>
<p>
    Elevate your practice with our comprehensive Clinic Management Packages
</p>

</div>
<div className='d-flex justify-content-around p-5' style={{backgroundColor:"whitesmoke"}}>
<div className='card-1 p-2 text-center' style={{border:"1px solid black",borderRadius:"10px",backgroundColor:"white"}}>
 <h2 style={{color:"#021B79"}}>Features</h2>
 <br />
 <ul className="p-2" style={{listStyle:"none"}}>
    <li>

     Appointment Managment
    </li>
    <li> <hr /></li>
    <li>

     Appointment Managment
    </li>
    <li> <hr /></li>
    <li>

     Appointment Managment
    </li>
    <li> <hr /></li>
    <li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
<li>

Appointment Managment
</li>
<li> <hr /></li>
</ul>
</div>
<div className='card-2 text-center p-4' style={{border:"1px solid black",borderRadius:"10px",backgroundColor:"white"}}>
<h3>
    SmartCare <br /> Boost 
</h3>

<p>
    Partial Appointment <br /> Management
</p>
<ul style={{listStyle:"none"}}>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
</ul>
</div>
<div className='card-3 text-center p-4' style={{border:"1px solid black",borderRadius:"10px",backgroundColor:"white"}}>
<h3>
    SmartCare <br /> Lite 
</h3>

<p>
    Full Appointment <br /> Management
</p>
<ul style={{listStyle:"none"}}>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /><hr /></li>
    <li><img src={tick} alt="" /><hr /></li>
    <li><img src={tick} alt="" /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
</ul>
</div>
<div className='card-3 text-center p-4' style={{border:"1px solid black",borderRadius:"10px",background: "linear-gradient(148.41deg, #0081F0 3%, #021B79 98.36%)"}}>
<h3>
    SmartCare <br />Plus
</h3>

<p>
    Full Appointment <br /> Management
</p>
<ul style={{listStyle:"none"}}>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /> <br /> <hr /></li>
    <li><img src={tick} alt="" /><hr /></li>
    <li><img src={tick} alt="" /><hr /></li>
    <li><img src={tick} alt="" /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
    <li><br /><hr /></li>
</ul>
</div>

</div>

  </div>
}

export default Doctor