import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  let params = useParams()
  return (
    <div>
      <h1 >{params.detailsID}Details about the company</h1>
    </div>
  )
}

export default Details
