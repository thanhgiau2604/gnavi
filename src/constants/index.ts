import { Variables } from 'styles/styled/app/Variables'

const routes = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  SKILL_INSTRUCTION: '/skillcheck/instruction',
  SKILL_CHECK: '/skillcheck',
}

const buttonLikeThemes = {
  THEME01: {
    src: '/icons/like.svg',
    activeSrc: '/icons/like_active_green.svg',
  },
  THEME02: {
    src: '/icons/like.svg',
    activeSrc: '/icons/like_active_red.svg',
  },
}

const buttonHeartThemes = {
  THEME01: {
    src: '/icons/heart.svg',
    activeSrc: '/icons/heart_active_red.svg',
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
  STYLE05: {
    BGCOLOR: Variables.colorWhite,
    COLOR: Variables.colorTextCommon,
    BORDER: `none`,
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
  XLARGE: '2rem',
}

export { routes, buttonColors, fontSize, buttonUploadColors, buttonLikeThemes, buttonHeartThemes }
