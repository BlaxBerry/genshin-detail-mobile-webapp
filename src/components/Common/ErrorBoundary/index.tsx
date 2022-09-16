import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import Img from '../../../assets/images/confuse.jpg'
import BgK from '../../../assets/images/bg-img-dark.jpeg'

interface CustomErrorBoundaryProps {
  children: ReactNode
}

const ErrorHandler = (error: Error, info: { componentStack: string }) => {
  // Do something with the error
  // E.g. log to an error logging client here
}

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const navigate = useNavigate()
  return (
    <div className="my-error-boundary">
      <Box
        component="img"
        sx={{ width: '100vw', maxWidth: '390px' }}
        src={Img}
      />
      <div>
        <h2>无法获取数据</h2>
        <h2>{'可能是服务器崩了 ( ￣_￣ ")'}</h2>
      </div>
      <div
        style={{
          padding: '0 1rem',
          margin: '30% 0 0',
        }}
      >
        <Button
          variant="contained"
          style={{ width: '100%' }}
          onClick={() => {
            navigate('/', { replace: true })
            navigate(0)
          }}
        >
          返回首页
        </Button>
      </div>
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GitHubIcon /> &nbsp;
        <Link
          href="https://github.com/BlaxBerry/genshin-detail-mobile-webapp/issues"
          variant="body2"
        >
          联系我
        </Link>
      </div>
    </div>
  )
}

export default function CustomErrorBoundary({
  children,
}: CustomErrorBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler}>
      {children}
    </ErrorBoundary>
  )
}
