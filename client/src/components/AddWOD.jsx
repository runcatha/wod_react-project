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
      <div className='add-form'>

        <div className='add-wod-title'>
          <h1>Add a WOD</h1>
        </div>
        <div className='add'>
          <form id='add-wod-form' onSubmit={handleSubmit}>
            <div className='name-spot'>
              <label id='name-name-label'>name</label>
              <input
                id='name-name-text'
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className='desc-spot'>
              <label id='desc-name-spot'>description</label>
              <input
                id='desc-name-text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='equip-spot'>
              <label id='equip-name-spot'>equipment</label>
              <input
                id='equip-name-text'
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
              />
            </div>
            <button id='add-button' type='submit'>3... 2... 1... Go!</button>
          </form >
        </div>

      </div>
    </>
  )
}

export default AddWOD