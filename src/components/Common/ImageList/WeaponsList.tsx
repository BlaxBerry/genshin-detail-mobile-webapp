import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import { Troubleshoot } from '@mui/icons-material'
import { fetchWeapon } from '../../../apis'
import { getCharacterBackgroundColor } from '../../../utils'
import CharacterWeaponType from '../Badges/CharacterWeaponType'
import Badge from '@mui/material/Badge'

interface ImageListProps {
  dataSource: string[]
  loading: boolean
}

interface ImageListItemProps {
  name: string
}

const CustomImageListItem = React.memo(function CustomImageListItem({
  name,
}: ImageListItemProps) {
  const navigate = useNavigate()

  const {
    data: weaponsData,
    isLoading: characterQueryIsLoading,
    isError: characterQueryIsError,
  } = useQuery(['weapons-list-item', name], () => fetchWeapon(name))

  return (
    <ImageListItem
      onClick={() =>
        navigate(`/weapon/${name}`, {
          state: { hiddenBottomNaviation: Troubleshoot },
        })
      }
    >
      <Paper
        elevation={10}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(250, 250, 250, 0.5)',
          width: '85px',
          height: '85px',
        }}
      >
        {!weaponsData?.images?.icon && (
          <Skeleton
            variant="rectangular"
            width={85}
            height={85}
            animation="wave"
          />
        )}
        {weaponsData?.images?.icon && (
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            badgeContent={
              <CharacterWeaponType
                weaponType={weaponsData?.weapontype}
                style={{
                  width: '1.2rem',
                  height: '1.2rem',
                }}
              />
            }
          >
            <img
              src={weaponsData?.images?.icon}
              srcSet={weaponsData?.images?.icon}
              alt={name}
              loading="lazy"
              style={{
                width: '85px',
                height: '85px',
                background: getCharacterBackgroundColor(weaponsData?.rarity),
              }}
            />
          </Badge>
        )}
      </Paper>
    </ImageListItem>
  )
})

function CustomImageList({ dataSource, loading }: ImageListProps): JSX.Element {
  // if (loading) return <>Loading...</>
  // if (!loading && (!dataSource || !(dataSource instanceof Array)))
  //   return <>无数据</>

  return (
    <ImageList cols={4}>
      {dataSource?.map((name: string) => (
        <CustomImageListItem key={name} name={name} />
      ))}
    </ImageList>
  )
}

export default React.memo(CustomImageList)
