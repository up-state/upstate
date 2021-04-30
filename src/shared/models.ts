export type ServerTimeResponse = { servertime: string }

export const GetServerTime = {
  url: '/api/server-time',
  method: 'GET',
}
