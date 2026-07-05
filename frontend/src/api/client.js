const BASE_URL = import.meta.env.VITE_API_URL

export function getToken() {
  return localStorage.getItem('token') || sessionStorage.getItem('token')
}

export function setToken(token, remember) {
  ;(remember ? localStorage : sessionStorage).setItem('token', token)
}

export function clearToken() {
  localStorage.removeItem('token')
  sessionStorage.removeItem('token')
}

export async function apiFetch(path, options = {}) {
  const token = getToken()

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    const message = data?.errors ? Object.values(data.errors)[0]?.[0] : data?.message
    throw new Error(message || 'Terjadi kesalahan, coba lagi.')
  }

  return data
}
