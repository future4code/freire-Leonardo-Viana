import axios from 'axios' 
import { baseURL } from './baseURL'; 

// a) get

// b) Promise<any[]>

// c) 

async function getSubscribers(): Promise<any[]>  {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };