export interface APIResponse<T> {
  data?: T
  message?: string
  code?: number
}
