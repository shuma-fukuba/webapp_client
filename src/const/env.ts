export const LARAVEL_API_URI = String(process.env.NEXT_PUBLIC_API_URI)

export const PATH =
  process.env.NODE_ENV === 'development' ? '/posse_webapp' : null

export const LARAVEL_PASSPORT_CLIENT_ID = Number(
  process.env.LARAVEL_PASSPORT_CLIENT_ID
)

export const LARAVEL_PASSPORT_CLIENT_SECRET = String(
  process.env.LARAVEL_PASSPORT_CLIENT_SECRET
)
