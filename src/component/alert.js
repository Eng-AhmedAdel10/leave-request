import React from 'react'
import { useGlopalContext } from '../context'
const Alert = () => {
  const {
    alert: { msg, state },
  } = useGlopalContext()
  return (
    <div className='alert-container'>
      <p className={`alert ${state}`}>{msg}</p>
    </div>
  )
}

export default Alert
