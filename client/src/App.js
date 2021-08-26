import "bootstrap/dist/css/bootstrap.min.css";
import AllOfTheWODs from './components/AllOfTheWODs';
import './style/App.css';
import './style/AllOfTheWODs.css'
import './style/WODSpecs.css'
import './style/EditWOD.css'
import './style/AddWOD.css'
import './style/EquipmentList.css'
import './style/Add.css'
import axios from 'axios'
import { baseWodURL, baseEquipmentURL, config } from './services'
import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import WODSpecs from './components/WODSpecs'
import AddWOD from './components/AddWOD';
import EditWod from './components/EditWOD';
import EquipmentList from './components/EquipmentList'
import Add from './components/Add'

function App() {
  const [wods, setWods] = useState([])
  const [equipment, setEquipment] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  // const [name, setName] = useState('')

  useEffect(() => {
    const getWods = async () => {
      const resp = await axios.get(baseWodURL, config)
      // console.log(resp.data.records)

      setWods(resp.data.records)
    }
    getWods()
  }, [toggleFetch])
  useEffect(() => {
    const getEquipment = async () => {
      const resp = await axios.get(baseEquipmentURL, config)

      // console.log(resp.data.records)
      setEquipment(resp.data.records)
    }
    getEquipment()
  }, [toggleFetch])

  return (
    <>
      <div className='mega-grid'>
        <div className='header'>
          <Link to='/' >
            <img id='home' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapFq1_NsK1CZJ183SynOVYNosmYHVpzKUOtT8pIk-20m90XaQ4ziWFz9d7sy3xPB3u8XRdM4Z&usqp=CAc'
              alt='home' />
          </Link>
        </div>
        <div className='nav-bar'>
          <h1>Nav</h1>
        </div>
        <div className='nav-column'>
          <Link to='/AddWOD'>
            <button id='add'>Add WOD</button>
          </Link>
          <Link to='/EquipmentList'>
            <button id='equipment'>get equipment</button>
          </Link>
        </div>
        {/* End nav column  */}
        {/* Begin content column  */}
        <div className='content-column'>
          <div className='mid-nav'></div>
          <Route path='/EquipmentList'>
            <EquipmentList equipment={equipment} />
          </Route>
          <Route path='/' exact>
            <div className='home-content'>
              <Link to='/AllOfTheWODs'>
                <button id='wod'>Give me a WOD</button>
              </Link>
            </div>
          </Route>
          <Route path='/AllOfTheWODs' exact >
            <AllOfTheWODs wods={wods} />
          </Route>
          <Route path='/WODSpecs/:id'>
            <WODSpecs wods={wods}
              setToggleFetch={setToggleFetch} />
          </Route>
          <Route path='/AddWOD'>
            <AddWOD wods={wods}
              setToggleFetch={setToggleFetch}
              toggleFetch={toggleFetch} />
          </Route>
          <Route path='/EditWOD/:id'>
            <EditWod wods={wods}
              setToggleFetch={setToggleFetch}
              toggleFetch={toggleFetch} />
          </Route>
          {/* <Route path='/EquipmentList'>
            <EquipmentList equipment={equipment}
            />
          </Route> */}
        </div >
        {/* Content column ends here */}
        <div className='add-column-area'>
          <Add />
        </div>
        {/* <div className='add-column'>
          <div className='finish-nav'></div>
          <div className='add-title'>
          </div>
          <a id='crossfit' href='https://www.crossfit.com/'>
            <img id='add-one' src='data:image/png;base64,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'
              alt='CrossFit' />
          </a>
          <a id='ga' href='https://generalassemb.ly/'>
            <img id='add-two' src='data:image/png;base64,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'
              alt='GA' />
          </a>
        </div> */}
        <div className='footer'>
          <a href='https://github.com/runcatha'>
            <img id='github' src='https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png'
              alt='Github' />
          </a>
          <a href='https://www.linkedin.com/in/cathleen-runde-10692b204/'>
            <img id='linkedin' src='https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png'
              alt='LinkedIn' />
          </a>
        </div>
      </div >
    </>
  );
}

export default App;
