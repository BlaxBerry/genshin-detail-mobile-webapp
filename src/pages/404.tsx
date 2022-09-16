import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Img from '../assets/images/confuse.jpg'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <Box
          component="img"
          sx={{ width: '100vw', maxWidth: '390px' }}
          src={Img}
        />
        <h2>404 没找到页面</h2>
        <Button
          variant="contained"
          style={{ width: '100%', color: 'white' }}
          onClick={() => navigate('/', { replace: true })}
        >
          返回首页
        </Button>
      </div>
    </>
  )
}
