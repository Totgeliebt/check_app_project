import axios from 'axios'

export default class PostService {
  static async getAll(name) {
    const response = await axios.get('https://app-state.herokuapp.com/v1/apps', {
      params: {
        _name: name
      }
    })
    return response;
  }
}