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
    edit: '',
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

export { ROUTES, FONT_SIZES }
