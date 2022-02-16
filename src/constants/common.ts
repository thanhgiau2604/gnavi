const ROUTES = {
  login: '/login',
  signup: '/signup',
  skill_instruction: '/skillcheck/instruction',
  skill_check: '/skillcheck',
  home: '/',
  tour_plan: {
    view: '/tourplan',
    detail: '/tourplan/detail?id=',
    create: '/tourplan/create',
    edit: '/tourplan/edit?id=',
  },
  tour_log: {
    view: '/tourlog',
    create: {
      instruction: '/tourlog/create/instruction',
      create_new: '/tourlog/create',
      complete: '/tourlog/create/complete',
    },
  },
}

const FONT_SIZES = {
  xsmall: '1.2rem',
  small: '1.4rem',
  medium: '1.6rem',
  large: '1.8rem',
  xlarge: '2rem',
}

const ENV = {
  dev: 'development',
  prod: 'production',
}

const DATETIME_FORMAT = {
  template01: 'YYYY年M月D日',
  template02: 'DD月MM日',
}

export { ROUTES, FONT_SIZES, ENV, DATETIME_FORMAT }
