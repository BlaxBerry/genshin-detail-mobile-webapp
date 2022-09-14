import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

interface CustomTabsProps {
  dataSource?: unknown[]
}

interface CustomTabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = React.memo(function TabPanel(props: CustomTabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      className="my-tab-panel"
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
})

export default React.memo(function CustomTabs({ dataSource }: CustomTabsProps) {
  const [value, setValue] = useState<number>(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="天赋命座" />
          <Tab label="升级材料" />
          <Tab label="立绘图片" />
          <Tab label="详细信息" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Box
          component="img"
          sx={{ width: '92vw', maxWidth: '390px' }}
          // @ts-ignore
          alt={dataSource?.fullname}
          // @ts-ignore
          src={dataSource?.images?.cover2 || dataSource?.images?.card}
          style={{ padding: 0 }}
        />
      </TabPanel>

      <TabPanel value={value} index={3}>
        Item Two
      </TabPanel>
    </>
  )
})
