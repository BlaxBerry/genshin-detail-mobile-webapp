import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import { Troubleshoot } from '@mui/icons-material'
import { fetchCharacter } from '../../../apis/character'
import { getCharacterBackgroundColor } from '../../../utils'
import Badge from '@mui/material/Badge'
import CharacterElement from '../Badges/CharacterElement'

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
    data: characterData,
    isLoading: characterQueryIsLoading,
    isError: characterQueryIsError,
  } = useQuery(['characters-list-item', name], () => fetchCharacter(name))

  return (
    <ImageListItem
      onClick={() =>
        navigate(`/character/${name}`, {
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
        {!characterData?.images?.icon && (
          <Skeleton
            variant="rectangular"
            width={85}
            height={85}
            animation="wave"
          />
        )}
        {characterData?.images?.icon && (
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            badgeContent={<CharacterElement element={characterData?.element} />}
          >
            <img
              src={characterData?.images?.icon}
              srcSet={characterData?.images?.icon}
              alt={name}
              loading="lazy"
              style={{
                width: '85px',
                height: '85px',
                background: getCharacterBackgroundColor(characterData?.rarity),
              }}
            />
          </Badge>
        )}
      </Paper>
    </ImageListItem>
  )
})

function CustomImageList({ dataSource, loading }: ImageListProps): JSX.Element {
  if (loading) return <>Loading...</>
  if (!loading && (!dataSource || !(dataSource instanceof Array)))
    return <>无数据</>

  return (
    <ImageList
      // sx={{ width: 100, height: 100 }}
      cols={4}
      // rowHeight={164}
    >
      {dataSource?.map((name: string) => (
        <CustomImageListItem key={name} name={name} />
      ))}
    </ImageList>
  )
}

export default React.memo(CustomImageList)
