import { useState, useCallback } from 'react'
import { useUserInfo } from '@/hooks/useUserInfo'
import { useRouter } from 'next/router'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const { setLoginUser } = useUserInfo()
  const router = useRouter()
  
  const login = useCallback(({ id, password }: { id: string; password: string }) => {
    setLoading(true)
    setLoginUser({ id, mail: 'test@test.com' })
    setLoading(false)
    router.push('/')
  }, [router, setLoginUser])

  return { login, loading }
}