import { Link, Route, useParams } from 'react-router-dom'
import React from 'react'
import WODSpecs from './WODSpecs'

function AllOfTheWODs(props) {

  const { wods } = props
  console.log(wods)
  return (
    <>
      {
        wods.map((workOuts, index) => (
          <React.Fragment key={index} >
            <div className='wod-list'>
              <Link to={`/WODSpecs/${workOuts.id}`} key={workOuts.id}>
                <button id='wod-name'>{workOuts.fields.name}</button>
              </Link>
            </div>
          </React.Fragment>
        ))
      }
    </>
  )
}

export default AllOfTheWODs