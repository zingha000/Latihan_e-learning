import { createContext, useContext, useEffect, useState } from 'react'
import { login as apiLogin, fetchMe, logout as apiLogout } from '../api/auth'
import { getToken, setToken, clearToken } from '../api/client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!getToken()) {
      setLoading(false)
      return
    }

    fetchMe()
      .then(setUser)
      .catch(() => clearToken())
      .finally(() => setLoading(false))
  }, [])

  async function login(loginId, password, remember = true) {
    const data = await apiLogin(loginId, password)
    setToken(data.token, remember)
    setUser(data.user)
  }

  async function loginWithToken(token) {
    setToken(token, true)
    setUser(await fetchMe())
  }

  async function logout() {
    try {
      await apiLogout()
    } finally {
      clearToken()
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, loginWithToken, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
