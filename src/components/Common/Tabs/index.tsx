import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { getElementColor } from '../../../utils'

interface CustomTabsProps {
  dataSource: { [key: string]: unknown }
  constellations: {
    [key: string]: string
  }[]
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

export default React.memo(function CustomTabs({
  dataSource,
  constellations,
}: CustomTabsProps) {
  const [value, setValue] = useState<number>(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="天赋" />
          <Tab label="命座" />
          <Tab label="材料" />
          <Tab label="立绘" />
        </Tabs>
      </Box>

      {/* 1. 天赋*/}
      <TabPanel value={value} index={0}>
        Item Two
      </TabPanel>

      {/* 2. 命座 */}
      <TabPanel value={value} index={1}>
        <List sx={{ width: '100%', maxWidth: 360 }}>
          {constellations instanceof Array &&
            constellations.length > 0 &&
            constellations?.map((item) => (
              <ListItem key={item.name}>
                <ListItemAvatar>
                  <Avatar
                    src={item?.image}
                    sx={{
                      // @ts-ignore
                      bgcolor: getElementColor(dataSource?.element),
                      width: 50,
                      height: 50,
                      marginRight: '1rem',
                    }}
                  />
                </ListItemAvatar>

                <div>
                  <ListItemText primary={item?.name} />
                  {/* @ts-ignore */}
                  <ReactMarkdown style={{ margin: 0 }}>
                    {item?.effect}
                  </ReactMarkdown>
                </div>
              </ListItem>
            ))}
        </List>
      </TabPanel>

      {/* 3. 材料 */}
      <TabPanel value={value} index={2}>
        Item Two
      </TabPanel>

      {/* 4. 立绘图片 */}
      <TabPanel value={value} index={3}>
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
