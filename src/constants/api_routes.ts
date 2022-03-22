const PREFIX = 'api/v1'

const API_ROUTES = {
  login: `${PREFIX}/login`,
  signup: `${PREFIX}/signup`,
  refresh_token: `${PREFIX}/auth/refresh`,
  logout: `${PREFIX}/logout`,
}

export { API_ROUTES }
