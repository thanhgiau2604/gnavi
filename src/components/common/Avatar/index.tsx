import React from 'react'
import Image from 'next/image'
import { AvatarContainer } from 'components/common/Avatar/styled'
import { NO_AVATAR } from 'constants/avatar'

interface AvatarProps {
  src: string | undefined
  alt: string
  size?: 'small' | 'medium' | 'large'
  sx?: { height: number; width: number }
}

const Avatar = ({ alt, src, size, sx }: AvatarProps) => {
  return (
    <AvatarContainer size={size} sx={sx}>
      <Image
        src={src || NO_AVATAR}
        alt={alt}
        layout="fill"
        objectFit="contain"
        priority={size === 'large' || (sx && (sx?.height > 69 || sx?.width > 69))}
      />
    </AvatarContainer>
  )
}

export default Avatar
