import axios from "axios"
import { baseURL, config } from '../services'
import { Link, Route } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function EditWod(props) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [equipment, setEquipment] = useState('')
  const params = useParams()

  useEffect(() => {
    if (params.id && props.wods.length > 0) {
      const wodToEdit = props.wods.find(wod => params.id === wod.id)
      if (wodToEdit) {
        setName(wodToEdit.fields.name)
        setDescription(wodToEdit.fields.description)
        setEquipment(wodToEdit.fields.equipment)
      }
    }
  }, [params.id, props.wods])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newWod = {
      name,
      description,
      equipment
    }
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newWod }, config)
    } else {
      await axios.post(baseURL, { fields: newWod }, config)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input
        id='name'
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor='description'>Description: </label>
      <input
        id='description'
        type='text'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label htmlFor='equipment'>Equipment: </label>
      <input
        id='equipment'
        type='text'
        onChange={(e) => setEquipment(e.target.value)}
        value={equipment}
      />
    </form>
  )
}

export default EditWod