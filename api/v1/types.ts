export interface VercelRequest {
  method?: string
  query: Record<string, string | string[]>
  body?: unknown
}

export interface VercelResponse {
  status: (code: number) => VercelResponse
  json: (body: unknown) => void
  setHeader: (name: string, value: string | string[]) => void
}
