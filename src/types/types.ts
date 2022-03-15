import { Dispatch, SetStateAction } from "react";
export default interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export type AuthResponseType = {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  displayName?: string,
  registered?: boolean
}


export type AuthRequestType = {
  email: string,
  password: string,
  readonly returnSecureToken: boolean
}

export type CheckAuthRequestType = {
  token: string | undefined,
  returnSecureToken: boolean
}

export type CheckAuthResponseType = {
  idToken: string,
  refreshToken: string,
  expiresIn: string
}

export type AuthContextType = {
  isAuth: boolean,
  setAuth: Dispatch<SetStateAction<boolean>>
}