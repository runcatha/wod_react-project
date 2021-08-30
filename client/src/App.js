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

  useEffect(() => {
    const getWods = async () => {
      const resp = await axios.get(baseWodURL, config)

      setWods(resp.data.records)
    }
    getWods()
  }, [toggleFetch])
  useEffect(() => {
    const getEquipment = async () => {
      const resp = await axios.get(baseEquipmentURL, config)

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
        </div >
        {/* Content column ends here */}
        <div className='add-column-area'>
          <Add />
        </div>
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
