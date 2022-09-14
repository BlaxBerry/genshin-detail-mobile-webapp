import { useMemo } from 'react'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
// import { ColorModeContext } from './ThemeProvider'

export default function ThemeChanger() {
  const theme = useTheme()
  // const colorMode = React.useContext(ColorModeContext)
  const ThemeName = useMemo(() => {
    if (theme.palette.mode === 'dark') return '暗黑主题'
    return '明亮主题'
  }, [theme.palette.mode])

  return (
    <div>
      <IconButton
        sx={{ mr: 1 }}
        color="inherit"
        // onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>

      {ThemeName}
    </div>
  )
}
