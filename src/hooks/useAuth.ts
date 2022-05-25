import React from 'react'
import Auth, { CognitoUser } from '@aws-amplify/auth'

import {
   SignInInput,
   SignUpInput,
   ConfirmSignUpInput,
   ResendSignUpInput,
   ForgotPasswordInput,
   ResetPasswordInput,
} from '../types/types'

export const signIn = async ({ email, password }: SignInInput) => {
   return await Auth.signIn(email, password)
}

export const signUp = async ({ name, email, password, orgCode }: SignUpInput) => {
   return await Auth.signUp({
      username: email,
      password,
      attributes: {
         name,
         'custom:orgCode': orgCode,
      },
   })
}

export const signOut = async () => {
   return await Auth.signOut({ global: true })
}

export const isAuth = async () => {
   return await Auth.currentAuthenticatedUser({ bypassCache: true })
}

export const changePassword = async ({ user, oldPassword, newPassword }: any) => {
   return await Auth.changePassword(user, oldPassword, newPassword)
}
