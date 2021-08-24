import axios from 'axios'
import { baseURL, config } from '../services'
import { Link, Route, useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

function AddWOD(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [equipment, setEquipment] = useState('')
  const { fields } = props
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newWod = {
      name,
      description,
      equipment
    }
    await axios.post(baseURL, { fields: newWod }, config)
    props.setToggleFetch(!props.toggleFetch)
    history.push('/AllOfTheWODs')
  }

  return (
    <form className='add-wod' onSubmit={handleSubmit}>
      <h4>Add a WOD!</h4>
      <label>name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>description</label>
      <input value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>equipment</label>
      <input value={equipment} onChange={(e) => setEquipment(e.target.value)} />
      <button type='submit'>Let's go!!</button>
    </form >
  )
}

export default AddWOD