export default async function getData(
  endpoint = 'incomes',
  { dateFrom = '', dateTo = '', page = 1, limit = 100 } = {}
) {
  const protocol = import.meta.env.VITE_API_PROTOCOL
  const host = import.meta.env.VITE_API_HOST
  const port = import.meta.env.VITE_API_PORT
  const key = import.meta.env.VITE_API_KEY

  const url = `${protocol}${host}:${port}/api/${endpoint}?dateFrom=${encodeURIComponent(dateFrom)}&dateTo=${encodeURIComponent(dateTo)}&page=${page}&key=${encodeURIComponent(key)}&limit=${limit}`

  const response = await fetch(url, {
    headers: {
      Authorization: key,
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok) {
    console.error('Ошибка ответа сервера:', response.status, response.statusText)
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return await response.json()
}
