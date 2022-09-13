import ThemeChanger from './components/Themes/ThemeChanger'
import LayoutWrap from './components/Layout'
import RouteView from './components/Routes/RouteView'

export default function App() {
  return (
    <LayoutWrap>
      <ThemeChanger />

      <RouteView />
    </LayoutWrap>
  )
}
