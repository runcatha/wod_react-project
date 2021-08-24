import axios from 'axios'
import { baseURL, config } from '../services'
import { Link, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function WODSpecs(props) {
  const params = useParams()
  const { id } = useParams()
  console.log(props.wods)
  const history = useHistory()

  if (props.wods.length === 0) {
    return null
  }
  const wod = props.wods.find((wod) => wod.id === id)
  console.log(wod)
  const { fields } = props

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
      <Link to={`/EditWOD/${wod.id}`}>
        <button id='edit'>I can fix this</button>
      </Link>
    </div>
  )
}

export default WODSpecs