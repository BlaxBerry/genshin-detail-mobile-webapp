import React from 'react'
import ReactMarkdown from 'react-markdown'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { getElementColor } from '../../utils'

interface TabPanel2Props {
  dataSource: { [key: string]: unknown }
  constellations: { [key: string]: unknown }[]
}

export default React.memo(function TabPanel2({
  dataSource,
  constellations,
}: TabPanel2Props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {constellations instanceof Array &&
        constellations.length > 0 &&
        constellations?.map((item) => (
          // @ts-ignore
          <React.Fragment key={item.name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  // @ts-ignore
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
                {/* @ts-ignore */}
                <ListItemText primary={item?.name} />

                <ReactMarkdown style={{ margin: 0 }}>
                  {/* @ts-ignore */}
                  {item?.effect}
                </ReactMarkdown>
              </div>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
    </List>
  )
})
