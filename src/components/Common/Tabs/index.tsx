import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { TabPanel1, TabPanel2, TabPanel3, TabPanel4 } from '../../Characters'

interface CustomTabsProps {
  dataSource: { [key: string]: unknown }
  constellations: {
    [key: string]: string
  }[]
  talents: { [key: string]: unknown }
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
      style={{ height: '510px', overflow: 'scroll' }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
})

export default React.memo(function CustomTabs({
  dataSource,
  constellations,
  talents,
}: CustomTabsProps) {
  const [value, setValue] = useState<number>(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="天赋" />
          <Tab label="命座" />
          <Tab label="材料" />
          <Tab label="立绘" />
        </Tabs>
      </Box>

      {/* 1. 天赋*/}
      <TabPanel value={value} index={0}>
        <TabPanel1 talents={talents} />
      </TabPanel>

      {/* 2. 命座 */}
      <TabPanel value={value} index={1}>
        <TabPanel2 dataSource={dataSource} constellations={constellations} />
      </TabPanel>

      {/* 3. 材料 */}
      <TabPanel value={value} index={2}>
        <TabPanel3 costs={dataSource?.costs} />
      </TabPanel>

      {/* 4. 立绘图片 */}
      <TabPanel value={value} index={3}>
        <Box
          component="img"
          sx={{ width: '92vw', maxWidth: '390px' }}
          // @ts-ignore
          alt={dataSource?.fullname}
          src={
            // @ts-ignore
            dataSource?.images?.portrait ||
            // @ts-ignore
            dataSource?.images?.cover2 ||
            // @ts-ignore
            dataSource?.images?.card
          }
          style={{ padding: 0 }}
        />
      </TabPanel>
    </>
  )
})
