import React from 'react'
import { AvatarContainer } from 'components/common/Avatar/styled'

interface AvatarProps {
  src: string | undefined
  alt: string
  size?: 'small' | 'medium' | 'large'
  sx?: { height: number; width: number }
}

const Avatar = ({ alt, src, size, sx }: AvatarProps) => {
  return (
    <AvatarContainer size={size} sx={sx}>
      <img src={src || '/images/no_avatar.svg'} alt={alt} />
    </AvatarContainer>
  )
}

export default Avatar
