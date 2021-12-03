import './App.css';
import {Navbar} from './Components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faUserNurse, faBriefcaseMedical, faHospital, faTruck} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'
import {Book} from './Components/book/Book'
import 'bootstrap/dist/css/bootstrap.min.css'
import {TextField, Button} from '@material-ui/core'
import {About} from './Components/About/About'
import {Department} from './Components/Department/Department'
import {Services} from './Components/Services/Services'
import {Doctors} from './Components/Doctors/Doctors'
import {Patients} from './Components/Patients/Patients'
import {Page} from './Components/Page/Page'
function App() {
const [flipped, setFlipped]=useState(false)
  const flip=()=>{
    setFlipped(!flipped)
  }
  return (
    <BrowserRouter>
    <div className="App">
      <div className={flipped===true? "main-nav main-navtoogle":"toogle main-nav"}>
        <FontAwesomeIcon onClick={flip} size='2x' style={{cursor:"pointer"}} color='white' icon={faAlignJustify}/>
        {flipped===false?<h1 className='company-brand'>Health Care</h1>:""}
        
        <div className={flipped===true?"sections-nav section-nav":"section-nav"}>
          <h1 className='title'>Health Care</h1>
          <ul className='top-nav'>
            
            <Link onClick={()=>setFlipped(false)} className='Link' to='/'><li>Home</li></Link>
            <Link onClick={()=>setFlipped(false)} className='Link' to='/book'><li>Book an appointment</li></Link>
            <Link onClick={()=>setFlipped(false)} className='Link' to='/services'><li>services</li></Link>
            <Link onClick={()=>setFlipped(false)} className='Link' to='/clinick'><li>Clinical department</li></Link>
            <Link onClick={()=>setFlipped(false)} className='Link' to='/about'><li>About Us</li></Link>
          </ul>
        </div>
      </div>
      <div className={flipped===false? "Click": "NoClick"}>
        <div className={flipped===false? "Clicked": "No"}>
        {/* vert feuille arbre, orange orange abrivo, violet fruit murs */}
          {flipped===true?
          <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
            <Link className='doctors' to='/doctors' onClick={()=>setFlipped(!flipped)}>
                <FontAwesomeIcon  size='2x'  color='white' icon={faUserNurse}/>
                <label>Doctors</label>
                <hr/>
              </Link>
              <Link  className={flipped===true? "N patient": "C patient"} to='/patients' onClick={()=>setFlipped(!flipped)}>
                <FontAwesomeIcon  size='2x'  color='white' icon={faBriefcaseMedical}/>
                <label>patients</label>
                <hr/>
              </Link>
            <Link className={flipped===true? "NN hospitals": "CC hospitals"} to='/Hopital' onClick={()=>setFlipped(!flipped)}>
                <FontAwesomeIcon  size='2x'  color='white' icon={faHospital}/>
                <label>Hospitals</label>
                <hr/>
            </Link>
            <Link className={flipped===true? "NNN urgent": "CCC urgent"} to='/Urgent' onClick={()=>setFlipped(!flipped)}>
              <FontAwesomeIcon  size='2x'  color='white' icon={faTruck}/>
              <label>Urgent</label>
              <hr/>
            </Link>
          </div>:""}

        </div>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/clinick' element={<Department/>}/>
          <Route path='/services' element={<Services/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/patients' element={<Patients/>}/>
          <Route path='/*' element={<Page/>}/>
        </Routes>
        <div className='footer'>
        <div className='before-footer'>
            <div className='more-info'>
              <h3 className='under'>news</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus qui fugiat vitae adipisci deserunt dolor temporibus nulla odit accusamus expedita sequi quis recusandae pariatur nam non labore, obcaecati velit nihil?</p>
            </div>
            <div className='textfield'>
            <TextField className='textinput'  label="Email" type='email'  variant="standard" />
            <TextField className='textinput'  label="your message" type='text' rows={4} multiline variant="standard" />
            <br/>
            <Button variant='contained'>Send</Button>
            </div>
            <div>
              <h3 className='under'>Contact Us</h3>
              <div>
                <ul className='contact'>
                  <li>facebook</li>
                  <li>whatsapp</li>
                  <li>twitter</li>
                </ul>
              </div>
              <h3 className='under'>Privacy Policy</h3>
              <p className='ok'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore excepturi architecto non aliquid illum explicab</p>
            </div>
        </div>
        <div className='footer-last'>
          ©copyright 2021 Health Care
        </div>
      </div>
        </div>
        
      </div>
      
      

    </BrowserRouter>);
}

export default App;
