import AllOfTheWODs from './components/AllOfTheWODs';
import './style/App.css';
import './style/AllOfTheWODs.css'
import axios from 'axios'
import { baseURL, config } from './services'
import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import WODSpecs from './components/WODSpecs'
import AddWOD from './components/AddWOD';
import EditWod from './components/EditWOD';

function App() {
  const [wods, setWods] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  // const [name, setName] = useState('')

  useEffect(() => {
    const getWods = async () => {
      const resp = await axios.get(baseURL, config)

      setWods(resp.data.records)
    }
    getWods()
  }, [toggleFetch])

  return (
    <>
      <div className='mega-grid'>
        <div className='header'>
          <Link to='/' >
            <button id='home'>Home</button>
          </Link>
        </div>
        <div className='nav-bar'>
          <h1>Nav</h1>
        </div>
        <div className='nav-column'>
          <Link to='/AddWOD'>
            <button id='add'>Add WOD</button>
          </Link>
          {/* <Link to='/EquipmentList'>
            <button id='equipment'>get equipment</button>
          </Link> */}
        </div>
        {/* End nav column  */}
        {/* Begin content column  */}
        <div className='content-column'>
          <Route path='/' exact>
            <Link to='/AllOfTheWODs'>
              <button id='wod'>Give me a WOD</button>
            </Link>
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
        <div className='add-column'></div>
        <div className='footer'></div>
      </div >
    </>
  );
}

export default App;
