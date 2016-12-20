import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=123';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log('request', request);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
