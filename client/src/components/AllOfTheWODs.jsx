import { Link, Route, useParams } from 'react-router-dom'
import React from 'react'
import WODSpecs from './WODSpecs'

function AllOfTheWODs(props) {

  console.log(props.wods.records)
  const { wods } = props
  return (
    // const { index } = useParams()
    // const wod = {
    <>
      {
        props.wods.records.map((workOuts, index) => (
          <React.Fragment key={index} >
            <div className='wod-list'>
              <Link to={`/WODSpecs/${index}`} key={index}>
                <button id='wod-name'>{workOuts.fields.name}</button>
              </Link>
            </div>
          </React.Fragment>
        ))
      }
    </>
  )
  // return !wod ? (
  //   <h1>Alert, alert, WOD's not found...</h1>
  // ) : (
  //   <>
  //     <div className='api-wods' key={props.WODs._id}>
  //       <h3>{props.WODs.name}</h3>
  //     </div>
  //   </>
  // )
}

export default AllOfTheWODs