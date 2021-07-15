import axios from 'axios';

export default axios.create({
  baseURL: 'https://ufoss.herokuapp.com/api/',
});
