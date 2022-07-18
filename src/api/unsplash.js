import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID SDtBCy3nHwsDOkbgvSi6YFyRLwEPoi3dRca0YUA0utA'
    }
})