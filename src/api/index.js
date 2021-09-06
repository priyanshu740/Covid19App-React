import axios from "axios";

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changeUrl = url

    if (country) {
        changeUrl = `${url}/countries/${country}`;
      }

    try {
        const {data: {confirmed,deaths,recovered,lastUpdate}} = await axios.get(changeUrl)
        const modifyData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        // console.log(modifyData);
        return modifyData
    }catch(error){

    }
}
export const fetchDailtData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed :dailyData.confirmed.total,
            deaths :dailyData.deaths.total,
            date :dailyData.reportDate
        }))
        return modifiedData 
        // console.log(data);
    }catch(error){
        console.log(error);
    }

}
export const fetchCountries = async () => {
    try{
        const {data : {countries}} = await axios.get("https://covid19.mathdro.id/api/countries")
        return countries.map((country) => country.name)

    }catch(error){
        console.log(error);
    }
}