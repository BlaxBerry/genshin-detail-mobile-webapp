import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Skeleton from '@mui/material/Skeleton'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { fetchCharacter } from '../../apis/character'
import { CharacterInfo, Tabs } from '../../components/Common'

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
  } = useQuery(['character', name], () => fetchCharacter(name))

  useEffect(() => {
    if (characterQueryIsError) throw new Error('请求出错了')
  }, [characterQueryIsError])

  console.log(characterData)

  const LeftDescription = useMemo((): JSX.Element => {
    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {/* title & name */}
        {!characterData?.fullname && (
          <>
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={100} sx={{ fontSize: '24px' }} />
          </>
        )}
        {characterData?.fullname && (
          <>
            <span>{characterData?.title}</span>
            <div style={{ fontSize: '24px' }}>{characterData?.fullname}</div>
          </>
        )}

        {/* description */}
        <div>
          {!characterData?.description && (
            <>
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} />
            </>
          )}
          {characterData?.description && (
            <span style={{ fontSize: '0.8rem' }}>
              {characterData?.description}
            </span>
          )}
        </div>
      </div>
    )
  }, [
    characterData?.title,
    characterData?.fullname,
    characterData?.description,
  ])

  const RightIcon = useMemo((): JSX.Element => {
    return (
      <div style={{ padding: 10 }}>
        {!characterData?.images?.icon && (
          <Skeleton variant="rounded" width={120} height={120} />
        )}
        {characterData?.images?.icon && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              component="img"
              sx={{ width: '120px', height: '120px' }}
              alt={characterData?.fullname}
              src={characterData?.images?.icon}
            />
            <Rating
              defaultValue={Number(characterData?.rarity)}
              max={Number(characterData?.rarity)}
              readOnly
            />
          </div>
        )}
      </div>
    )
  }, [
    characterData?.images?.icon,
    characterData?.rarity,
    characterData?.fullname,
  ])

  return (
    <>
      <CharacterInfo>
        {/* left */}
        {LeftDescription}
        {/* right */}
        {RightIcon}
      </CharacterInfo>

      {/* tabs  */}
      <Tabs dataSource={characterData} />
    </>
  )
}
