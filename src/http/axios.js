import axios from 'axios';

// 'http://localhost:8080'

const instance = axios.create({
  baseURL: 'https://test-project-analytix-ba26f9e8b578.herokuapp.com/',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');

  return config;
});

export default instance;
