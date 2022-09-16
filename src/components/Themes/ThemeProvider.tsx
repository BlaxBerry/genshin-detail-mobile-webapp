import { createContext, ReactNode, useMemo, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

interface CustomerThemeProviderProps {
  children: ReactNode
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

export default function CustomerThemeProvider({
  children,
}: CustomerThemeProviderProps): JSX.Element {
  // 默认主题
  const [mode, setMode] = useState<'light' | 'dark'>('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
