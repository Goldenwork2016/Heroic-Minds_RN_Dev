export type SignInInput = {
   email: string
   password: string
}
export type SignUpInput = {
   name: string
   email: string
   password: string
   orgCode: string
}
export type ConfirmSignUpInput = {
   email: string
   code: string
}
export type ResendSignUpInput = {
   email: string
}
export type ForgotPasswordInput = {
   email: string
}
export type ResetPasswordInput = {
   email: string
   code: string
   password: string
}
export type HeroicMindsThemeResponse = {
   code: string
   status: string
   data: []
}
export type Episode = {
   episodeId: string
   episodeTitle: string
   categoryId?: string
   categoryName?: string
   episodeText: string
   episodeInspiration: string
   isStory: boolean
   uploadDate: string
}
