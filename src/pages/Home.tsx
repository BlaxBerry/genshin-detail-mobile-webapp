import Box from '@mui/material/Box'

export default function Home() {
  return (
    <div>
      {/* <Box
      component="img"
      sx={{ width: '100%' }}
      src={'http://hive.indienova.com/ranch/gamedb/2020/02/assets/ast-2523265-hKgPYA.png'}
    /> */}

      <h3 style={{ margin: '0 0 10px' }}>近期活动</h3>
      <Box
        component="img"
        sx={{ width: '100%' }}
        src={
          'https://patchwiki.biligame.com/images/ys/thumb/6/61/2mejfh4x6droaio8u8vslsna5dvas26.png/600px-%E3%80%8C%E7%89%87%E5%89%82%E6%B7%B1%E7%A0%94%E3%80%8D.png'
        }
      />
      <Box
        component="img"
        sx={{ width: '100%' }}
        src={
          'https://patchwiki.biligame.com/images/ys/thumb/8/89/o8x2clkfumobpwidy3mckt4bd8knbvp.png/600px-%E3%80%8C%E6%BA%A2%E7%A5%9E%E7%9A%84%E8%AE%BA%E8%AF%81%E3%80%8D.png'
        }
      />
      <Box
        component="img"
        sx={{ width: '100%' }}
        src={
          'https://patchwiki.biligame.com/images/ys/thumb/a/a9/ssu5kfdhbg1ll7lqc38187i6gqch1s6.png/600px-%E3%80%8C%E7%A7%98%E5%AE%9D%E8%BF%B7%E8%B8%AA%E3%80%8D%E7%AC%AC%E4%B8%89%E6%9C%9F.png'
        }
      />
      <Box
        component="img"
        sx={{ width: '100%' }}
        src={
          'https://patchwiki.biligame.com/images/ys/thumb/1/15/l5pw3ixm0xibsftq5ph60knkm9velub.png/600px-%E3%80%8C%E9%9B%95%E7%90%A2%E7%AB%A5%E5%BF%83%E3%80%8D.png'
        }
      />
    </div>
  )
}
