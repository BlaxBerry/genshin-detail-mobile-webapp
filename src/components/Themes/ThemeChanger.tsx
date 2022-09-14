import React from 'react'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from './ThemeProvider'

export default function ThemeChanger() {
  const theme = useTheme()
  // const colorMode = React.useContext(ColorModeContext)

  return (
    <div>
      {theme.palette.mode} 主题
      <IconButton
        sx={{ ml: 1 }}
        color="inherit"
        // onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </div>
  )
}
