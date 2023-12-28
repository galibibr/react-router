import React from 'react'
import { useParams } from 'react-router-dom'

const EditPost = () => {
   const { id } = useParams()
  return (
    <div>Edit this { id }</div>
  )
}

export default EditPost