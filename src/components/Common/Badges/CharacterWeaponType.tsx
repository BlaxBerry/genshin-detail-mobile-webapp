import { CSSProperties, memo, useMemo } from 'react'
import OneHandedSword from '../../../assets/images/weapon-1.png'
import DoubleHandedSword from '../../../assets/images/weapon-2.png'
import Pole from '../../../assets/images/weapon-3.png'
import Magic from '../../../assets/images/weapon-4.png'
import Bow from '../../../assets/images/weapon-5.png'
import Block from '../../../assets/images/block.png'

interface CharacterElementProps {
  weaponType: string
  style?: CSSProperties
}

export default memo(function CharacterWeaponType({
  weaponType,
  style,
}: CharacterElementProps): JSX.Element {
  const characterWeaponType = useMemo(() => {
    switch (weaponType) {
      case '单手剑':
        return OneHandedSword
      case '双手剑':
        return DoubleHandedSword
      case '长柄武器':
        return Pole
      case '法器':
        return Magic
      case '弓':
        return Bow
      default:
        return Block
    }
  }, [weaponType])

  return (
    <img
      src={characterWeaponType}
      style={{
        width: '1rem',
        height: '1rem',
        transform: 'translate(70%, 70%)',
        ...style,
      }}
    />
  )
})
