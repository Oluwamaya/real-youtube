import React from 'react';
import './App.css'
import logo from '../src/images/youtube logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {AiOutlineMenu} from 'react-icons/ai'
// import {FaYoutube} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
 import {SiShortcut , SiTrendmicro} from 'react-icons/si'
import {MdSubscriptions , MdOutlineVideoLibrary} from 'react-icons/md'
import {GoHistory} from 'react-icons/go'
import {IoPersonCircleOutline, IoMusicalNoteOutline} from 'react-icons/io5'
function App() {
  return (
    <>
    <section>
   
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <AiOutlineMenu  className='bon'/>
       
      </button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <div class="offcanvas-title" id="offcanvasExampleLabel">
    <div className='d-flex align-items-center  px-2'>
        <AiOutlineMenu />
        <img src={logo} className='bang ' alt="" srcset="" />
        </div>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      <main>
      
        <div className='d-flex align-items-center px-2'>
          <AiFillHome />
          <p className='me-2 fw-bold'>Home</p>
        </div>
        <div className='d-flex align-items-center px-2'>
          <SiShortcut/>
        <p className=' fw-bold'>Shorts</p>
        </div>
        <div className='d-flex align-items-center px-2'>
          <MdSubscriptions/>
          <p className='me-2 fw-bold'>Subscription</p>
        </div>
        
      </main><hr></hr>
      <main>
      <div className='d-flex align-items-center px-2'>
       <MdOutlineVideoLibrary />
       <p>Library</p>
      </div>
      <div>
        <GoHistory />
        <p>History</p>
      </div>
      </main><hr/>
      <div>
        <p>Sign in to like videos, comment, and subscribe.</p>
        <a href="#app.js"> 
        <IoPersonCircleOutline/>
        <p>Sign in</p>
        </a>
      </div><hr />
      <main>
        <div>
        <h6>Explore</h6>
        <SiTrendmicro/>
        <p>Trending</p>
        </div>
        <div>
          <IoMusicalNoteOutline/>
          <p>Music</p>
        </div>
      </main>
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        {/* <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li> */}
      </ul>
    </div>
  </div>
</div>

      <img src={logo} className='bang ' alt="" srcset="" />
    </section>
    </>
  );
}

export default App;
