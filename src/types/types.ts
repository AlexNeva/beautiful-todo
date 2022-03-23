import { Dispatch, SetStateAction } from "react";
export default interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export type TodoType = {
  todoId: number | null,
  createdAt?: number | null,
  completed: false,
  descr: string,
  idx: number,
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

export type UserAuthType = {
  isAuth: boolean,
  isPending: boolean
}

export type AuthContextType = {
  userAuth: UserAuthType,
  setAuth: Dispatch<SetStateAction<UserAuthType>>
}