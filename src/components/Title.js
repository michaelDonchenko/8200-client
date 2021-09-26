import React from 'react'
import { Typography } from '@material-ui/core'

const Title = ({ text }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <Typography variant='h3' align='center'>
        {text}
      </Typography>
    </div>
  )
}

export default Title
