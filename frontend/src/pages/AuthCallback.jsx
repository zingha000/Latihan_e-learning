import { useEffect, useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AuthCallback() {
  const [searchParams] = useSearchParams()
  const { loginWithToken } = useAuth()
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const token = searchParams.get('token')
    if (!token) {
      setStatus('error')
      return
    }

    loginWithToken(token)
      .then(() => setStatus('done'))
      .catch(() => setStatus('error'))
    // ponytail: mount-only, token comes from the URL Google redirected us with
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (status === 'done') return <Navigate to="/" replace />

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light px-4">
      <p className="text-sm text-gray-500">
        {status === 'error' ? 'Login Google gagal, silakan coba lagi.' : 'Menyelesaikan login...'}
      </p>
    </div>
  )
}

export default AuthCallback
