import { useEffect, useMemo } from 'react'
import { useQuery } from 'react-query'
import { fetchCharacter } from '../../apis/character'
import { ImageList } from '../../components/Common'

export default function CharacterList() {
  const {
    data: charactersData5,
    isLoading: charactersQuery5IsLoading,
    isError: charactersQuery5IsError,
  } = useQuery(['character5starts'], () => fetchCharacter('5'))

  const {
    data: charactersData4,
    isLoading: charactersQuery4IsLoading,
    isError: charactersQuery4IsError,
  } = useQuery(['character4starts'], () => fetchCharacter('4'))

  const dattSource = useMemo(() => {
    if (charactersData4 instanceof Array && charactersData5 instanceof Array) {
      return [...charactersData5, ...charactersData4]
    }
    return []
  }, [charactersData5, charactersData4])

  return (
    <div>
      <ImageList
        dataSource={dattSource}
        loading={charactersQuery5IsLoading && charactersQuery4IsLoading}
      />
    </div>
  )
}
