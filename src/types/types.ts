export default interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export type SignupResponseType = {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

export type SignupRequestType = {
  email: string,
  password: string,
  readonly returnSecureToken: boolean
}