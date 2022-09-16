import { CSSProperties, memo, useMemo } from 'react'
import Fire from '../../../assets/images/element-1.png'
import Water from '../../../assets/images/element-2.png'
import Wind from '../../../assets/images/element-3.png'
import Electronic from '../../../assets/images/element-4.png'
import Ice from '../../../assets/images/element-5.png'
import Glass from '../../../assets/images/element-6.png'
import Rock from '../../../assets/images/element-7.png'
import Block from '../../../assets/images/block.png'

interface CharacterElementProps {
  element: string
  style?: CSSProperties
}

export default memo(function CharacterElement({
  element,
  style,
}: CharacterElementProps): JSX.Element {
  const characterElement = useMemo(() => {
    switch (element) {
      case '火':
        return Fire
      case '水':
        return Water
      case '风':
        return Wind
      case '雷':
        return Electronic
      case '冰':
        return Ice
      case '草':
        return Glass
      case '岩':
        return Rock
      default:
        return Block
    }
  }, [element])

  return (
    <img
      src={characterElement}
      style={{
        width: '1rem',
        height: '1rem',
        transform: 'translate(70%, 70%)',
        ...style,
      }}
    />
  )
})
