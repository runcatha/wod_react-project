import AllOfTheWODs from './components/AllOfTheWODs';
import './App.css';
import axios from 'axios'
import { baseURL, config } from './services'
import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import WODSpecs from './components/WODSpecs'

function App() {
  const [wods, setWods] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    const getWods = async () => {
      const resp = await axios.get(baseURL, config)
      // console.log(resp.data)
      setWods(resp.data)
    }
    getWods()
  }, [toggleFetch])

  return (
    <>
      <Route path='/' exact>
        <Link to='/AllOfTheWODs'>
          <button id='wod'>Give me a WOD</button>
        </Link>
      </Route>
      <Route path='/WODSpecs/:index'>
        <WODSpecs wods={wods} />
      </Route>
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
          <button id='equipment'>get equipment</button>
          <button id='add'>Add WOD</button>
        </div>
        <div className='content-column'>
          <Route path='/AllOfTheWODs' exact >
            <AllOfTheWODs wods={wods} />
          </Route>
        </div >
        <div className='add-column'></div>
        <div className='footer'></div>
      </div >
    </>
  );
}

export default App;
