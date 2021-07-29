import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'

export const useUserInfo = () => useContext(AuthContext)
