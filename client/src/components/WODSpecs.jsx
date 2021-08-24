import axios from 'axios'
import { baseURL, config } from '../services'
import { Link, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function WODSpecs(props) {
  // const params = useParams()
  const { id } = useParams()
  const wod = props.wods.find((wod) => wod.id === id)
  console.log(wod)
  const history = useHistory()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [equipment, setEquipment] = useState('')

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${wod.id}`, config)
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
    history.push('/AllOfTheWODs')
  }

  useEffect(() => {
    if (wod.id && props.wods.length > 0) {
      const wodToEdit = props.wods.find(wod => wod.id === id)
      if (wodToEdit) {
        setName(wodToEdit.fields.name)
        setDescription(wodToEdit.fields.description)
        setEquipment(wodToEdit.fields.equipment)
      }
    }
  }, [wod.id, props.wods])

  return (
    <div className='wod-specs'>
      <h1>Name: {wod.fields.name}</h1>
      <p>Desc: {wod.fields.description}</p>
      <p>Equp: {wod.fields.equipment}</p>
      <button onClick={handleDelete}>This workout sucks</button>
    </div>
  )
}

export default WODSpecs