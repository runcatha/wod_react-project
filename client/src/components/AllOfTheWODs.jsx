import { Link, Route, useParams } from 'react-router-dom'
import React from 'react'
import WODSpecs from './WODSpecs'

function AllOfTheWODs(props) {

  const { wods } = props
  console.log(wods)
  return (
    <>
      <div className='wod-list-title'>
        <h1>WOD list</h1>
      </div>
      <div className='wod-container'>
        {
          wods.map((workOuts, index) => (
            <React.Fragment key={index} >
              <div className='wod-list'>
                <Link to={`/WODSpecs/${workOuts.id}`} key={workOuts.id}>
                  <button id='name'>{workOuts.fields.name}</button>
                </Link>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </>
  )
}

export default AllOfTheWODs