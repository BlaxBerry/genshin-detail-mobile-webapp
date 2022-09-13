import ThemeChanger from './components/Themes/ThemeChanger'
import ThemeProvider from './components/Themes/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <div>xxx</div>
      <ThemeChanger />
    </ThemeProvider>
  )
}
