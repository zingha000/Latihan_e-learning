import { apiFetch } from './client'

export function login(login, password) {
  return apiFetch('/login', { method: 'POST', body: JSON.stringify({ login, password }) })
}

export function fetchMe() {
  return apiFetch('/user')
}

export function logout() {
  return apiFetch('/logout', { method: 'POST' })
}

export function googleRedirect() {
  return apiFetch('/auth/google/redirect')
}
