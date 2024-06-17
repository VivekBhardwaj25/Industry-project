import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1>Error Page</h1>
      <NavLink to = "/">Go back</NavLink>
    </div>
  )
}

export default Error
