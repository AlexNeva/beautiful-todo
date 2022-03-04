export default class TodoService {

  // API_KEY = '7d69d7ca3c0fc515994ec1af1752bd66';

  API_BASE: string = `https://jsonplaceholder.typicode.com/`;

  async getResource(url: string) {
    const res = await fetch(`${this.API_BASE}${url}`);

    if (!res.ok) {
      throw new Error('404')
    }

    return res.json();
  }

  getTodos() {
    return this.getResource('todos');
  }

}