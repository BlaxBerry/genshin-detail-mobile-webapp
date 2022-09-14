import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { fetchWeapon } from '../../apis/wepaon'
import { WeaponsList } from '../../components/Common'

export default function WeaponList() {
  const {
    data: weaponsData5,
    isLoading: weaponQuery5IsLoading,
    isError: weaponQuery5IsError,
  } = useQuery(['weapons5starts'], () => fetchWeapon('5'))

  const {
    data: weaponsData4,
    isLoading: weaponQuery4IsLoading,
    isError: weaponQuery4IsError,
  } = useQuery(['weapons4starts'], () => fetchWeapon('4'))

  const dattSource = useMemo(() => {
    if (weaponsData5 instanceof Array && weaponsData4 instanceof Array) {
      return [...weaponsData5, ...weaponsData4].filter(
        (name) => name !== '「一心传」名刀'
      )
    }
    return []
  }, [weaponsData5, weaponsData4])

  return (
    <div>
      <WeaponsList
        dataSource={dattSource}
        loading={weaponQuery5IsLoading && weaponQuery4IsLoading}
      />
    </div>
  )
}
