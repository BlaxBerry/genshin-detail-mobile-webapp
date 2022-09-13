import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import EditOffIcon from '@mui/icons-material/EditOff'
import GroupIcon from '@mui/icons-material/Group'

type NavigationsListItem = {
  label: string
  value: string
  icon: JSX.Element
}

export default function CustomBottomNavigation(): JSX.Element {
  const navigate = useNavigate()
  const [value, setValue] = useState('home')

  const NavigationsList: NavigationsListItem[] = [
    {
      label: '角色',
      value: 'characters',
      icon: <GroupIcon />,
    },
    {
      label: '首页',
      value: 'home',
      icon: <HomeIcon />,
    },
    {
      label: '武器',
      value: 'weapons',
      icon: <EditOffIcon />,
    },
  ]

  useEffect(() => {
    navigate(`/${value}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Container
      fixed
      maxWidth={'xs'}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      style={{ padding: 0 }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        {NavigationsList.map(({ value, icon, label }: NavigationsListItem) => (
          <BottomNavigationAction
            key={value}
            label={label}
            value={value}
            icon={icon}
          />
        ))}
      </BottomNavigation>
    </Container>
    // <Paper

    //   sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    //   elevation={3}
    // >

    // </Paper>
  )
}
