import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import Img from '../../../assets/images/confuse.jpg'

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
    <>
      <Box
        component="img"
        sx={{ width: '100vw', maxWidth: '390px' }}
        src={Img}
        style={{ paddingTop: 35 }}
      />
      <div style={{ textAlign: 'center' }}>
        <h2>页面数据出错了</h2>
        <h2>可能是服务器崩了 ( ￣_￣ ")</h2>
        <Button
          variant="contained"
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
    </>
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
