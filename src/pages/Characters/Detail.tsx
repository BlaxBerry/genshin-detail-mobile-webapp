import React from 'react'
import { useEffect, useLayoutEffect } from 'react'
import { useQuery } from 'react-query'
import { fetchCharacter } from '../../apis/character'

export default function CharacterDetail() {
  const {
    data: characterData,
    isLoading: characterQueryIsLoading,
    isError: characterQueryIsError,
  } = useQuery('character', () => fetchCharacter({ name: '迪卢克' }))

  console.log(!!characterData, characterQueryIsLoading)

  useEffect(() => {
    if (characterQueryIsError) throw new Error('请求出错了')
  }, [characterQueryIsError])

  return <div>Character Detail</div>
}
