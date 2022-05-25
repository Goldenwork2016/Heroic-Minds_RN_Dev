import React from 'react'
import { CognitoUser } from '@aws-amplify/auth'
import { AuthContext } from './index'

interface AuthProps {
   children: React.ReactNode
}
export const AuthProvider = ({ children }: AuthProps) => {
   const [user, setUser] = React.useState<CognitoUser | null>(null)
   const [tutorialStatus, setTutorialStatus] = React.useState(false)

   const AuthContextObject = {
      user,
      setUser,
      tutorialStatus,
      setTutorialStatus,
   }

   return <AuthContext.Provider value={AuthContextObject}>{children}</AuthContext.Provider>
}

export default AuthProvider
