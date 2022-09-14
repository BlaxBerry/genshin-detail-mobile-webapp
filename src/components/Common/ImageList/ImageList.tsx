import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { useQuery } from 'react-query'
import { fetchCharacter } from '../../../apis/character'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

interface ImageListProps {
  dataSource: string[]
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
    <ImageListItem onClick={() => navigate(`/characters/${name}`)}>
      <Paper
        elevation={10}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(250, 250, 250, 0.5)',
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
          <img
            src={characterData?.images?.icon}
            srcSet={characterData?.images?.icon}
            alt={name}
            loading="lazy"
            style={{
              width: '85px',
              height: '85px',
            }}
          />
        )}
      </Paper>
    </ImageListItem>
  )
})

function CustomImageList({ dataSource }: ImageListProps): JSX.Element {
  if (!dataSource || !(dataSource instanceof Array)) return <>无数据</>

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
