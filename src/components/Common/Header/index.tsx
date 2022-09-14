import React from 'react'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ThemeChanger from '../../Themes/ThemeChanger'
import { ColorModeContext } from '../../Themes/ThemeProvider'
import { getPageTitle } from '../../../utils'

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const title = useMemo((): string => pathname.split('/')[1], [pathname])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  return (
    <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
      <Toolbar variant="dense" style={{ padding: 0 }}>
        {/* left title */}
        <div
          style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          onClick={() => navigate(-1)}
        >
          {pathname.split('/').length >= 3 && <ArrowBackIosIcon />}
          <h3>{getPageTitle(decodeURI(title))}</h3>
        </div>

        {/* setting dropdown menu */}
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                colorMode.toggleColorMode()
                handleClose()
              }}
            >
              <ThemeChanger />
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}
