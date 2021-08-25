import { Link, Route, useParams } from 'react-router-dom'
import React from 'react'

function EquipmentList(props) {

  const { equipment } = props
  // console.log(equipment)

  return (
    <>
      {
        equipment.map((items, index) => (
          <React.Fragment key={index} >
            <div className='equipment-list'>
              <button id='equ'>{items.fields.name}</button>
            </div>
          </React.Fragment>
        ))
      }
    </>
  )
}

export default EquipmentList