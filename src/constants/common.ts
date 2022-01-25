import { Variables } from 'styles/styled/app/Variables'

const ROUTES = {
  login: '/login',
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

const FONT_SIZES = {
  xsmall: '1.2rem',
  small: '1.4rem',
  medium: '1.6rem',
  large: '1.8rem',
}

export { ROUTES, BUTTON_COLORS, FONT_SIZES, BUTTON_UPLOAD_COLORS }
