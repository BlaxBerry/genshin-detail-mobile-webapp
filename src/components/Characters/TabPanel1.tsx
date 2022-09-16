import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import ReactMarkdown from 'react-markdown'

interface TabPanel1Props {
  talents: { [key: string]: unknown }
}

interface CustomTabPanelProps {
  index: number
  value: number
  talent: unknown
}

const TabPanel = React.memo(function TabPanel({
  value,
  index,
  talent,
}: CustomTabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      style={{
        width: '80%',
        padding: '1rem',
        height: '510px',
        overflow: 'scroll',
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/* @ts-ignore */}
          {!talent?.name && !talent?.info && (
            <>
              {[...new Array(10)].map((e, i) => (
                <Skeleton
                  key={i}
                  variant="text"
                  animation="wave"
                  sx={{
                    height: i === 0 ? '18.7px' : '1rem',
                    margin: i === 0 ? '18.7px 0' : '0',
                    width: i === 0 ? '50%' : '100%',
                  }}
                />
              ))}
            </>
          )}
          {/* @ts-ignore */}
          {talent?.name && talent?.info && (
            <>
              {/* @ts-ignore */}
              <h3>{talent?.name}</h3>
              {/* @ts-ignore */}
              <ReactMarkdown>{talent?.info}</ReactMarkdown>
            </>
          )}
        </Box>
      )}
    </div>
  )
})

export default React.memo(function TabPanel1({ talents }: TabPanel1Props) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {/* @ts-ignore */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider', padding: '1rem 0' }}
      >
        <Tab label="普通攻击" />
        <Tab label="元素战技" />
        <Tab label="元素爆发" />
        <Tab label="被动" />
        <Tab label="被动" />
        <Tab label="固定天赋" />
        {talents?.combatsp && <Tab label="特殊战技" />}
      </Tabs>
      <TabPanel value={value} index={0} talent={talents?.combat1} />
      <TabPanel value={value} index={1} talent={talents?.combat2} />
      <TabPanel value={value} index={2} talent={talents?.combat3} />
      <TabPanel value={value} index={3} talent={talents?.passive1} />
      <TabPanel value={value} index={4} talent={talents?.passive2} />
      <TabPanel value={value} index={5} talent={talents?.passive3} />
      <>
        {talents?.combatsp && (
          <TabPanel value={value} index={6} talent={talents?.combatsp} />
        )}
      </>
    </Box>
  )
})
