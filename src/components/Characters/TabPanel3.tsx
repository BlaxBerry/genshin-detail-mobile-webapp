import React, { Fragment, useMemo } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'

interface TabPanel3Props {
  costs: unknown
}

export default React.memo(function TabPanel3({ costs }: TabPanel3Props) {
  const levels = ['20', '40', '50', '60', '70', '80']

  const list = useMemo(() => {
    let allCostsList = []
    // @ts-ignore
    for (const key in costs) {
      // @ts-ignore
      allCostsList.push(costs[key])
    }
    return allCostsList
  }, [costs])

  return (
    <List sx={{ width: '100%' }}>
      <ListItem style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h4 style={{ flex: '0.5', textAlign: 'center' }}>突破等级</h4>
        <div style={{ flex: 1, textAlign: 'center' }}>需要材料</div>
      </ListItem>
      {list?.map((item, index) => (
        <Fragment key={index}>
          <Divider />
          <ListItem
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <h3
              style={{ flex: '0.5', textAlign: 'center', paddingLeft: '10px' }}
            >
              {levels[index]}
            </h3>

            <div style={{ flex: 1, paddingLeft: '4rem' }}>
              {/* @ts-ignore */}
              {item?.map((e) => (
                <div key={e.name}>
                  {e.name}
                  <strong style={{ margin: '.5rem' }}>x {e.count}</strong>
                </div>
              ))}
            </div>
          </ListItem>
        </Fragment>
      ))}
    </List>
  )
})
