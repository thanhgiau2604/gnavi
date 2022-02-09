import { Variables } from 'styles/styled/app/Variables'

const BUTTON_LIKE_THEMES = {
  theme01: {
    src: '/icons/like.svg',
    activeSrc: '/icons/like_active_green.svg',
  },
  theme02: {
    src: '/icons/like.svg',
    activeSrc: '/icons/like_active_red.svg',
  },
}

const BUTTON_HEART_THEMES = {
  theme01: {
    src: '/icons/heart.svg',
    activeSrc: '/icons/heart_active_red.svg',
  },
}

const BUTTON_COLORS = {
  style01: {
    bgColor: Variables.color1,
    color: Variables.colorWhite,
    border: `1px solid ${Variables.colorPrimary}`,
  },
  style02: {
    bgColor: Variables.color2,
    color: Variables.colorWhite,
    border: `1px solid ${Variables.colorSecondary}`,
  },
  style03: {
    bgColor: 'transparent',
    color: Variables.color1,
    border: `1px solid ${Variables.colorPrimary}`,
  },
  style04: {
    bgColor: 'transparent',
    color: Variables.colorBlack,
    border: `1px solid ${Variables.colorPrimary}`,
  },
  style05: {
    bgColor: Variables.colorWhite,
    color: Variables.colorTextCommon,
    border: `none`,
  },
  style06: {
    bgColor: 'linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%)',
    color: Variables.colorBlack,
    border: `1px solid ${Variables.color3}`,
  },
}

const BUTTON_UPLOAD_COLORS = {
  style01: {
    bgColor: Variables.color1,
    color: Variables.colorWhite,
    border: `1px solid ${Variables.colorPrimary}`,
  },
  style02: {
    bgColor: 'linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%)',
    color: Variables.colorBlack,
    border: `1px solid ${Variables.color3}`,
  },
}

export { BUTTON_COLORS, BUTTON_UPLOAD_COLORS, BUTTON_LIKE_THEMES, BUTTON_HEART_THEMES }
