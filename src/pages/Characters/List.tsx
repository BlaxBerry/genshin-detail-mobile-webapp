import Button from '@mui/material/Button'
import { useQuery } from 'react-query'
import { fetchCharacter } from '../../apis/character'
import { ImageList } from '../../components/Common'

export default function CharacterList() {
  const {
    data: charactersData,
    isLoading: charactersQueryIsLoading,
    isError: charactersQueryIsError,
  } = useQuery('character', () => fetchCharacter('5'))

  return (
    <div>
      <ImageList dataSource={charactersData} />
    </div>
  )
}
