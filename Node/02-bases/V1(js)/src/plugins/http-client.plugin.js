const axios = require('axios');


const httpClientPlugin = {
    get: async(url) => {
        const resp = await fetch( url );
        return await resp.json();        
    },
    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url) => {},
}

const httpAxios = {
    get: async(url) => {
        const { data } = await axios.get( url );        
        return data;
    },
    post: async(url, body) => {
        const { data } = await axios.post( url, body );
        return data;
    },
    put: async(url, body) => {
        const { data } = await axios.put(url, body);
        return data;
    },
    delete: async(url) => {
        const { data } = await axios.delete(url);
        return data;
    }
}


module.exports = {
    // http: httpClientPlugin,
    http: httpAxios,
};