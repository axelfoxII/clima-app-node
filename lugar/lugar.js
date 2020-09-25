const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+"${encodeUrl}"?json=1`,
        headers: { 'x-rapidapi-key': 'e75158cfc8msh6dc23c93c18e7cap1f4edcjsne8a5295dc7bd' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {

        throw new Error(`No hay resultados para ${dir}`);

    }

    const data = resp.data;
    const direccion = data.standard.city;
    const pais = data.standard.prov;
    const lat = data.latt;
    const lng = data.longt;

    return {

        direccion,
        pais,
        lat,
        lng


    }

}

module.exports = {

    getLugarLatLng

}