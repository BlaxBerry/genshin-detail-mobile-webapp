import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  const title = useMemo(
    (): string => pathname.split('/')[pathname.split('/').length - 1],
    [pathname]
  )

  return (
    <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
      <Toolbar variant="dense">{decodeURI(title)}</Toolbar>
    </AppBar>
  )
}
