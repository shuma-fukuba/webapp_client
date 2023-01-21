export const WEBAPP_API_URI = `${String(process.env.NEXT_PUBLIC_API_URI)}/v1`
export const PATH =
  process.env.NODE_ENV === 'development' ? '/posse_webapp' : null
