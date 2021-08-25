import axios from 'axios'
import { baseWodURL, config } from '../services'
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
    await axios.post(baseWodURL, { fields: newWod }, config)
    props.setToggleFetch(!props.toggleFetch)
    history.push('/AllOfTheWODs')
  }

  return (
    <>
      <div className='add-title'>
        <h1>Add a WOD</h1>
      </div>
      <div className='add'>
        <form className='add-wod' onSubmit={handleSubmit}>
          <div className='name-spot'>
            <label>name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='desc-spot'>
            <label>description</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className='equip-spot'>
            <label>equipment</label>
            <input value={equipment} onChange={(e) => setEquipment(e.target.value)} />
          </div>
          <button id='add' type='submit'>Let's go!!</button>
        </form >
      </div>
    </>
  )
}

export default AddWOD