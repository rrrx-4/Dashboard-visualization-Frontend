import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:3000/api/v1"
})



export const getIntensity = () => API.get("/intensity");

export const getRnC = () => API.get("/region&country");

export const getRnL = () => API.get('/relevance&likelihood');

export const getTopic = () => API.get('/topic');