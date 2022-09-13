import { useQuery } from 'react-query'
import ThemeChanger from './components/Themes/ThemeChanger'
import { fetchCharacter } from './apis/character'

export default function App() {
  const { data, status, isError } = useQuery('character', () =>
    fetchCharacter({ name: '迪卢克' })
  )
  console.log(data, status, isError)

  return (
    <>
      <div>developing...</div>
      <ThemeChanger />
    </>
  )
}
