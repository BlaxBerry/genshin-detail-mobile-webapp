import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Skeleton from '@mui/material/Skeleton'
import {
  CharacterInfo,
  Tabs,
  BadgeCharacterElement,
  BadgeCharacterWeapontype,
} from '../../components/Common'
import {
  fetchCharacter,
  fetchConstellations,
  fetchTalents,
} from '../../apis/character'
import { getCharacterBackgroundColor } from '../../utils'

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

  const {
    data: constellationsData,
    isLoading: constellationsQueryIsLoading,
    isError: constellationsQueryIsError,
  } = useQuery(['constellations', name], () => fetchConstellations(name))

  const {
    data: talentsData,
    isLoading: talentsQueryIsLoading,
    isError: talentsQueryIsError,
  } = useQuery(['talents', name], () => fetchTalents(name))

  const constellations = useMemo(() => {
    let list = []
    for (const item in constellationsData) {
      if (item !== 'name' && item !== 'images' && item !== 'version') {
        list.push({
          name: constellationsData[item].name,
          effect: constellationsData[item].effect,
          image: constellationsData.images[item],
        })
      }
    }
    return list
  }, [constellationsData])

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
        <div>
          {!characterData?.fullname && (
            <>
              <Skeleton variant="text" width={100} />
              <Skeleton variant="text" width={100} sx={{ fontSize: '24px' }} />
            </>
          )}
          {characterData?.fullname && (
            <>
              <div style={{ fontSize: '24px' }}>{characterData?.fullname}</div>
              <span style={{ fontSize: '0.8rem' }}>{characterData?.title}</span>
            </>
          )}
        </div>
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
        {/* type */}
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {!characterData?.element && <Skeleton variant="text" width={40} />}
            {characterData?.element && (
              <BadgeCharacterElement
                element={characterData?.element}
                style={{
                  width: '1.2rem',
                  height: '1.2rem',
                  transform: 'none',
                }}
              />
            )}
            <span style={{ marginLeft: '0.2rem' }}>
              {characterData?.element}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '1rem',
            }}
          >
            {!characterData?.element && <Skeleton variant="text" width={40} />}
            {characterData?.element && (
              <BadgeCharacterWeapontype
                weaponType={characterData?.weapontype}
                style={{
                  width: '1.2rem',
                  height: '1.2rem',
                  transform: 'none',
                }}
              />
            )}
            <span style={{ marginLeft: '0.2rem' }}>
              {characterData?.weapontype}
            </span>
          </div>
        </div>
      </div>
    )
  }, [
    characterData?.title,
    characterData?.fullname,
    characterData?.description,
    characterData?.element,
    characterData?.weapontype,
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
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{ width: '120px', height: '120px' }}
              alt={characterData?.fullname}
              src={characterData?.images?.icon}
              style={{
                background: getCharacterBackgroundColor(characterData?.rarity),
              }}
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
      <Tabs
        dataSource={characterData}
        constellations={constellations}
        talents={talentsData}
      />
    </>
  )
}
