import React from 'react'
import { useParams } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'

function WODSpecs(props) {

  const { id } = useParams()
  // const wod = props.wods.records[Number(index)]
  const wod = props.wods.find((wod) => wod.id === id)
  // console.log(props.wods)

  return (
    <div className='wod-specs'>
      <h1>Name: {wod.fields.name}</h1>
      <p>Desc: {wod.fields.description}</p>
      <p>Equp: {wod.fields.equipment}</p>
    </div>
  )
}

export default WODSpecs