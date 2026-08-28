import axios from 'axios'
async function fetchRate(url,pair){
    try {
        const response = await axios.get(url,{params:pair});
        let result = response.data.result;
        let firstObj = Object.values(result)[0];
        console.log(firstObj);
        let finalArray = Object.values(firstObj)[0];
        console.log("Final Array:",finalArray);
        let value =finalArray[0];
        console.log("Rate is :", value);
        let rate = response.data.result.XXBTZUSD.a[0]
        console.log(rate);
        console.log("Single Line Answer: ",(Object.values(Object.values((Object.values(result)[0]))[0])[0]))

    } catch (error) {
        console.error("Error While FetchRate :", error?.message ?? error);
    }

}
fetchRate('https://api.kraken.com/0/public/Ticker?',{"pair" : "BTCUSD"});