import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import CharacterList from '../../pages/Characters/List'
import CharacterDetail from '../../pages/Characters/Detail'
import WeaponList from '../../pages/Weapons/List'
import WeaponDetail from '../../pages/Weapons/Detail'
import Error404 from '../../pages/404'
import Error500 from '../../pages/500'
import { URL_ROOT } from '../../config'

export default function RouteView() {
  return (
    <Routes>
      <Route path={`${URL_ROOT}/`} element={<Home />} />
      <Route path={`${URL_ROOT}/index`} element={<Home />} />
      <Route path={`${URL_ROOT}/home`} element={<Home />} />

      <Route path={`${URL_ROOT}/characters`} element={<CharacterList />} />
      <Route
        path={`${URL_ROOT}/character/:name`}
        element={<CharacterDetail />}
      />
      <Route path={`${URL_ROOT}/weapons`} element={<WeaponList />} />
      <Route path={`${URL_ROOT}/weapon/:name`} element={<WeaponDetail />} />

      <Route path={`${URL_ROOT}/404`} element={<Error404 />} />
      <Route path={`${URL_ROOT}/500`} element={<Error500 />} />

      <Route path={`${URL_ROOT}/*`} element={<Error404 />} />
    </Routes>
  )
}
