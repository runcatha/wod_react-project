import axios from 'axios'
import { baseWodURL, config } from '../services'
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
    await axios.delete(`${baseWodURL}/${wod.id}`, config)
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
    history.push('/AllOfTheWODs')
  }

  return (
    <div className='wod-specs'>
      <div className='name-box'>
        <div className='name-title'>
          <h1>Name</h1>
        </div>
        <div className='name-name'>
          <h1>{wod.fields.name}</h1>
        </div>
      </div>
      <div className='desc-box'>
        <div className='desc-name'>
          <h3>Description</h3>
        </div>
        <div className='desc-desc'>
          <p>{wod.fields.description}</p>
        </div>
      </div>
      <div className='equip-box'>
        <div className='equip-name'>
          <h3>Equipment</h3>
        </div>
        <div className='equip-equip'>
          <p>{wod.fields.equipment}</p>
        </div>
      </div>
      <button id='delete' onClick={handleDelete}>This workout sucks</button>
      <Link to={`/EditWOD/${wod.id}`}>
        <button id='edit'>I can fix this</button>
      </Link>
    </div >
  )
}

export default WODSpecs