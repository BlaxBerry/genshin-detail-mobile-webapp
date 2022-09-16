import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Skeleton from '@mui/material/Skeleton'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { fetchWeapon } from '../../apis'
import { CharacterInfo, Tabs } from '../../components/Common'

export default function WeaponDetail() {
  const { pathname } = useLocation()
  const name = useMemo(
    (): string => pathname.split('/')[pathname.split('/').length - 1],
    [pathname]
  )
  const {
    data: weaponData,
    isLoading: characterQueryIsLoading,
    isError: characterQueryIsError,
  } = useQuery(['weapon', name], () => fetchWeapon(name))

  useEffect(() => {
    if (characterQueryIsError) throw new Error('请求出错了')
  }, [characterQueryIsError])

  console.log(weaponData)

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
        {!weaponData?.name && (
          <>
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={100} sx={{ fontSize: '24px' }} />
          </>
        )}
        {weaponData?.name && (
          <>
            <div style={{ fontSize: '24px' }}>{weaponData?.name}</div>
            <span style={{ fontSize: '0.8rem' }}>{weaponData?.effectname}</span>
          </>
        )}

        {/* description */}
        <div>
          {!weaponData?.description && (
            <>
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} />
            </>
          )}
          {weaponData?.description && (
            <span style={{ fontSize: '0.8rem' }}>
              {weaponData?.description}
            </span>
          )}
        </div>
      </div>
    )
  }, [weaponData?.effectname, weaponData?.name, weaponData?.description])

  const RightIcon = useMemo((): JSX.Element => {
    return (
      <div style={{ padding: 10 }}>
        {!weaponData?.images?.icon && (
          <Skeleton variant="rounded" width={120} height={120} />
        )}
        {weaponData?.images?.icon && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{ width: '120px', height: '120px' }}
              alt={weaponData?.name}
              src={weaponData?.images?.icon}
            />
            <Rating
              defaultValue={Number(weaponData?.rarity)}
              max={Number(weaponData?.rarity)}
              readOnly
            />
          </div>
        )}
      </div>
    )
  }, [weaponData?.images?.icon, weaponData?.rarity, weaponData?.name])

  return (
    <>
      <CharacterInfo>
        {/* left */}
        {LeftDescription}
        {/* right */}
        {RightIcon}
      </CharacterInfo>

      {/* tabs  */}
      {/* <Tabs dataSource={weaponData} /> */}
    </>
  )
}
