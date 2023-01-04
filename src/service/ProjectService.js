import axios from 'axios';
// const url = 'http://localhost:5000/api/';
const url = 'https://puzzled-school-uniform-pike.cyclic.app/api/';

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
