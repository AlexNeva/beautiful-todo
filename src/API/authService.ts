import { AuthRequestType, AuthResponseType } from "../types/types";

export default class AuthService {

  API_KEY = process.env.REACT_APP_API_KEY;

  async postResource<T>(url: string, body: any): Promise<T> {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)

    });

    const data = await res.json();


    if (!res.ok) {
      throw data
    }


    return data;
  }



  createAccount(user: AuthRequestType): Promise<AuthResponseType> {
    return this.postResource(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`, user);
  }

  login(user: AuthRequestType): Promise<AuthResponseType> {
    return this.postResource(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`, user);
  }

}