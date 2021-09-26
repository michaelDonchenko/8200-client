import React from 'react'

const Alert = ({ color, message }) => {
  return (
    <div style={{ color: color, margin: '1rem 0', textAlign: 'center' }}>
      {color === 'red' && 'Error: '}
      {color === 'green' && 'Success: '}
      {message}
    </div>
  )
}

export default Alert
