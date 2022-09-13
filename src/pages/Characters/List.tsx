import { Link } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

export default function CharacterList() {
  const navigate = useNavigate()

  const onClick = () => navigate('/character/xxxx')

  return (
    <div>
      Character list
      <br />
      <Button variant="contained" onClick={onClick}>
        Contained
      </Button>
    </div>
  )
}
