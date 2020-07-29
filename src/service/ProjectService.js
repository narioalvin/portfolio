import axios from 'axios';
// const url = 'http://localhost:5000/api/';
const url = 'https://my-personal-portfolio-api.herokuapp.com/api/';

class LikeService {
  static getProjects() {
    return axios.get(`${url}project/all`);
  }

  static like(value) {
    return axios.put(`${url}project/like`, {
      ...value,
    });
  }

  static unlike(value) {
    return axios.put(`${url}project/unlike`, {
      ...value,
    });
  }
}

export default LikeService;
