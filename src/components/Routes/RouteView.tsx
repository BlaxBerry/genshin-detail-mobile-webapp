import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import CharacterList from '../../pages/Characters/List'
import CharacterDetail from '../../pages/Characters/Detail'
import WeaponList from '../../pages/Weapons/List'
import WeaponDetail from '../../pages/Weapons/Detail'
import Error404 from '../../pages/404'
import Error500 from '../../pages/500'

export default function RouteView() {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/index`} element={<Home />} />
      <Route path={`/home`} element={<Home />} />

      <Route path={`/characters`} element={<CharacterList />} />
      <Route path={`/character/:name`} element={<CharacterDetail />} />
      <Route path={`/weapons`} element={<WeaponList />} />
      <Route path={`/weapon/:name`} element={<WeaponDetail />} />

      <Route path={`/404`} element={<Error404 />} />
      <Route path={`/500`} element={<Error500 />} />

      <Route path={`/*`} element={<Error404 />} />
    </Routes>
  )
}
