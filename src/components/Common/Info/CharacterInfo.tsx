import { memo, ReactNode } from 'react'

interface CharacterInfoProps {
  children: ReactNode
}
export default memo(function CharacterInfo({ children }: CharacterInfoProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  )
})
