import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

import { useMemo, useState } from 'react'
import { useEffect, useLayoutEffect } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { fetchCharacter } from '../../apis/character'
import { Tabs } from '../../components/Common'

export default function CharacterDetail() {
  const { pathname } = useLocation()
  const name = useMemo(
    (): string => pathname.split('/')[pathname.split('/').length - 1],
    [pathname]
  )
  const {
    data: characterData,
    isLoading: characterQueryIsLoading,
    isError: characterQueryIsError,
  } = useQuery('character', () => fetchCharacter(name))

  useEffect(() => {
    if (characterQueryIsError) throw new Error('请求出错了')
  }, [characterQueryIsError])

  console.log(characterData)

  const icon = useMemo(
    () => characterData?.images?.icon,
    [characterData?.images]
  )

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: 1 }}>
          {/* title & name */}
          <h2>
            {!characterData?.fullname && (
              <Skeleton
                variant="text"
                sx={{ fontSize: '24px', margin: '0.83rem 0' }}
              />
            )}
            {characterData && (
              <>
                {characterData?.title} {characterData?.fullname}
              </>
            )}
          </h2>

          {/* description */}
          <div>
            {!characterData?.description && (
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            )}
            {characterData?.description && <> {characterData?.description}</>}
          </div>
        </div>
        {!icon && <Skeleton variant="rounded" width={120} height={120} />}
        {icon && (
          <Box
            component="img"
            sx={{ width: '120px', height: '120px' }}
            alt={name}
            src={icon}
          />
        )}
      </div>

      {/* tabs  */}
      <Tabs />
    </>
  )
}
