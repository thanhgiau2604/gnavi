interface SearchPayload {
  search_term: string
}

interface NewPostPayload {
  content: string
  place: string
  theme: string
  new_theme: string
}

export type { SearchPayload, NewPostPayload }
