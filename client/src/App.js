import AllOfTheWODs from './components/AllOfTheWODs';
import './App.css';
import axios from 'axios'
import { baseURL, config } from './services'
import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';

function App() {
  const [WODs, setWODs] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    const getWods = async () => {
      const resp = await axios.get(baseURL, config)
      console.log(resp.data)
      setWODs(resp.data)
    }
    getWods()
  }, [toggleFetch])

  return (
    <>
      <Route path='/' exact>
        <link to='/AllOfTheWODs'>
          <h1>wod list</h1>
          <button id='wod'>Give me a WOD</button>
        </link>
      </Route>
      <div className='mega-grid'>
        <div className='header'>
          <button id='home'>Home</button>
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
            <AllOfTheWODs WODs={WODs} />
            {/* <Link to={`/AllOfTheWODs`}> */}
            {/* </div> */}
            {/* </Link> */}
          </Route>
        </div >
        <div className='add-column'></div>
        <div className='footer'></div>
      </div >
    </>
  );
}

export default App;
