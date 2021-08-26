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
    <>
      <div className='edit-form'>

        <div className='edit-title'>
          <h1>Edit WOD</h1>
        </div>
        <div className='edit'>
          <form id='edit-wod-form' onSubmit={handleSubmit}>
            <div className='name-area'>
              <label id='name-name-area'>Name: </label>
              <input
                id='name-name-textarea'
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className='desc-area'>
              <label id='description-name-area'>Description: </label>
              <textarea
                id='description-equipment-textarea'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className='equip-area'>
              <label id='equipment-name-area'>Equipment: </label>
              <textarea
                id='edit-equipment-textarea'
                onChange={(e) => setEquipment(e.target.value)}
                value={equipment}
              />
            </div>
            <button id='edit-button' type='submit'>Let's GOOOOOO!</button>
          </form >
        </div>

      </div>
    </>
  )
}

export default EditWod