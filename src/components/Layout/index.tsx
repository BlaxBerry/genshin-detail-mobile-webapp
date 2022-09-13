import { Fragment, ReactNode } from 'react'
import clsx from 'clsx'
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { BottomNavigation } from '../Common'

interface LayoutWrapProps {
  children: ReactNode
}

export default function LayoutWrap({ children }: LayoutWrapProps): JSX.Element {
  const theme = useTheme()

  return (
    <Fragment>
      <Container
        fixed
        maxWidth={'xs'}
        className={clsx(
          'main-content',
          theme?.palette?.mode === 'dark' && 'background-dark-mode',
          theme?.palette?.mode === 'light' && 'background-light-mode'
        )}
      >
        <main>{children}</main>
        <BottomNavigation />
      </Container>
    </Fragment>
  )
}
