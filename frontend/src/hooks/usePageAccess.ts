import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'

export const usePageAcess = () => {
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()
  const checkAcessRights = useCallback((userInfo) => {
    if (router.pathname !== '/login' && !userInfo) {
      router.push('/login')
    } else if (router.pathname === '/login' && userInfo) {
      router.push('/')
    } else {
      setIsChecked(true)
    }
  }, [router])

  return { isChecked, checkAcessRights }
}
