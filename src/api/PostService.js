import axios from "axios";

export default class PostService {
  static async postAppData(appData) {
    return await axios.post(
      "https://app-state.herokuapp.com/v1/apps",
      appData,
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    );
  }

  static async getAll() {
    return await axios.get("https://app-state.herokuapp.com/v1/apps");
  }

  static async getAppById(id) {
    return await axios.get(
      "https://app-state.herokuapp.com/v1/apps?app_id=" + id
    );
  }

  static async deleteById(id) {
    return await axios.delete(
      "https://app-state.herokuapp.com/v1/apps?app_id=" + id
    );
  }

  static async editDescription(descriptionData) {
    return await axios.post(
      'https://app-state.herokuapp.com/v1/apps/update',descriptionData,
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    )
  }
}
