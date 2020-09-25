const axios = require('axios');

const getClima = async(lat, lng) => {
    const apiKey = '5b7be2e9bc439da4f392edf0802cca89';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);

    return resp.data.main.temp;

}

module.exports = {

    getClima

}