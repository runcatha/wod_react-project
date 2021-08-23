import { useParams } from 'react-router-dom'
import React from 'react'

function AllOfTheWODs(props) {

  // console.log(WODs)
  return (
    // const { index } = useParams()
    // const wod = {
    < div >
      {
        props.WODs.map((WODs, index) => (
          <div>
            <h1> name:{WODs.fields.name}</h1>
          </div>
        ))
      }
    </div>
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