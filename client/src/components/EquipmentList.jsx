import { Link, Route, useParams } from 'react-router-dom'
import React from 'react'

function EquipmentList(props) {

  const { equipment } = props

  return (
    <>
      <div className='equipment-title'>
        <h1>Equipment List</h1>
      </div>
      <div className='equipment'>
        {
          equipment.map((items, index) => (
            <React.Fragment key={index} >
              <div className='equipment-list'>
                <button id='equ'>{items.fields.name}</button>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </>
  )
}

export default EquipmentList