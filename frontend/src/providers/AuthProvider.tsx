import { createContext, useState, useLayoutEffect } from 'react'
import { usePageAcess } from '@/hooks/usePageAccess'

import { LoadingLayer } from '@/components/organisms/LoadingLayer'

import type { Dispatch, SetStateAction, FC } from 'react'

type LoginUser = {
  id: string;
  mail: string;
}
export type AuthContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: FC = ({ children }) => {
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null)
  const { isChecked, checkAcessRights } = usePageAcess()

  useLayoutEffect(() => {
    checkAcessRights(loginUser)
  }, [checkAcessRights, loginUser])

  return (
    <AuthContext.Provider value={{ loginUser, setLoginUser }}>
      {isChecked ? children : <LoadingLayer />}
    </AuthContext.Provider>
  )
}
