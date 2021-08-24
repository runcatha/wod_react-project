import axios from 'axios'
import { baseURL, config } from '../services'
import { Link, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function WODSpecs(props) {
  const params = useParams()
  const { id } = useParams()
  const wod = props.wods.find((wod) => wod.id === id)
  console.log(wod)
  const history = useHistory()

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${wod.id}`, config)
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
    history.push('/AllOfTheWODs')
  }

  return (
    <div className='wod-specs'>
      <h1>{wod.fields.name}</h1>
      <p>{wod.fields.description}</p>
      <p>{wod.fields.equipment}</p>
      <button onClick={handleDelete}>This workout sucks</button>
      <Link to='/EditWOD'>
        <button id='edit'>I can fix this</button>
      </Link>
    </div>
  )
}

export default WODSpecs