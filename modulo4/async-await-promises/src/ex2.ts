import axios from 'axios'
import { baseURL } from './baseURL'

// 2-
const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };