import { Variables } from 'styles/styled/app/Variables'

const routes = {
  LOGIN: '/login',
}

const buttonLikeThemes = {
  STYLE01: {
    src: '/images/like.png',
    activeSrc: '/images/like_active_green.png',
  },
  STYLE02: {
    src: '/images/like.png',
    activeSrc: '/images/like_active_red.png',
  },
}

const buttonHeartThemes = {
  STYLE01: {
    src: '/images/heart.png',
    activeSrc: '/images/heart_active_red.png',
  },
}

const buttonColors = {
  STYLE01: {
    BGCOLOR: Variables.color1,
    COLOR: Variables.colorWhite,
    BORDER: `1px solid ${Variables.colorPrimary}`,
  },
  STYLE02: {
    BGCOLOR: Variables.color2,
    COLOR: Variables.colorWhite,
    BORDER: `1px solid ${Variables.colorSecondary}`,
  },
  STYLE03: {
    BGCOLOR: 'transparent',
    COLOR: Variables.color1,
    BORDER: `1px solid ${Variables.colorPrimary}`,
  },
  STYLE04: {
    BGCOLOR: 'transparent',
    COLOR: Variables.colorBlack,
    BORDER: `1px solid ${Variables.colorPrimary}`,
  },
}

const buttonUploadColors = {
  STYLE01: {
    BGCOLOR: Variables.color1,
    COLOR: Variables.colorWhite,
    BORDER: `1px solid ${Variables.colorPrimary}`,
  },
  STYLE02: {
    BGCOLOR: 'linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%)',
    COLOR: Variables.colorBlack,
    BORDER: `1px solid ${Variables.color3}`,
  },
}

const fontSize = {
  XSMALL: '1.2rem',
  SMALL: '1.4rem',
  MEDIUM: '1.6rem',
  LARGE: '1.8rem',
}

export { routes, buttonColors, fontSize, buttonUploadColors, buttonLikeThemes, buttonHeartThemes }
