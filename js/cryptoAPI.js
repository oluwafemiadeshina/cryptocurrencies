class CryptoAPI{


    //Get all the cyrtocurrency
    async getCrytoCurrenciesList(){
        let api_link = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?';
        let api_key = '179f19d0-6b1f-42e4-86a7-611b706321da';
        // let api_key = '179f19d0';

        const url = await fetch(
            api_link + new URLSearchParams({
                CMC_PRO_API_KEY: api_key,
            }));

        //Return this as a json
        const crytocurrencies = await url.json();

        //Return the object
        return {
            crytocurrencies
        }
    }


    //query the rest api with the values returned
    async queryAPI(currency, cryptocurrency){
        let api_link = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?';
        let api_key = '179f19d0-6b1f-42e4-86a7-611b706321da';
        // let api_key = '179f19d0';

        const url = await fetch(
            api_link + new URLSearchParams({
                CMC_PRO_API_KEY: api_key,
                id: cryptocurrency,
                convert: currency
            })
        );
        //Return this as a json
        const result = await url.json();

        //Return the object
        return {
            result
        }
    }
}



//179f19d0-6b1f-42e4-86a7-611b706321da
// X-CMC_PRO_API_KEY 


// https://pro-api.coinmarketcap.com/v1/key/info?CMC_PRO_API_KEY=179f19d0-6b1f-42e4-86a7-611b706321da


// https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=179f19d0-6b1f-42e4-86a7-611b706321da


// https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=179f19d0-6b1f-42e4-86a7-611b706321da&id=1&convert=EUR

// https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=179f19d0-6b1f-42e4-86a7-611b706321da&id=1&convert=BTC,USD