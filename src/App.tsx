import { useQuery } from 'react-query'
import { fetchCharacter } from './apis/character'
import ThemeChanger from './components/Themes/ThemeChanger'
import LayoutWrap from './components/Layout'
import RouteView from './components/Routes/RouteView'

export default function App() {
  // const { data, status, isError } = useQuery('character', () =>
  //   fetchCharacter({ name: '迪卢克' })
  // )
  // console.log(data, status, isError)

  return (
    <LayoutWrap>
      <ThemeChanger />

      <RouteView />
    </LayoutWrap>
  )
}
