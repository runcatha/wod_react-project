import axios from "axios"
import { baseWodURL, config } from '../services'
import { Link, Route } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function EditWod(props) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [equipment, setEquipment] = useState('')
  const params = useParams()
  const history = useHistory()

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
      await axios.put(`${baseWodURL}/${params.id}`, { fields: newWod }, config)
      props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
      history.push('/AllOfTheWODs')
    } else {
      await axios.post(baseWodURL, { fields: newWod }, config)
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
      <textarea
        id='description'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label htmlFor='equipment'>Equipment: </label>
      <textarea
        id='equipment'
        onChange={(e) => setEquipment(e.target.value)}
        value={equipment}
      />
      <button type='submit'>Let's GOOOOOO!</button>
    </form>
  )
}

export default EditWod