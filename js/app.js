
//Initiate the class
const cryptoAPI = new CryptoAPI(),
ui = new UI();

// create variables

const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    //read currency
    const currencySelect = document.getElementById('currency').value;
    //read cryptocurrency
    const cryptocurrencySelect = document.getElementById('cryptocurrency').value;

    //validate that the select has value
    if(currencySelect ==='' || cryptocurrencySelect===''){
        ui.printMessage('All the fields are required!', 'deep-orange darken-4 card-panel');
        // console.log('Failed');
    }else{
    //query the restapi
        cryptoAPI.queryAPI(currencySelect, cryptocurrencySelect)
        .then( data => {

            ui.displayResult(data.result.data[cryptocurrencySelect], currencySelect);

        
        // console.log(data.result);
        // console.log(data.result.data[cryptocurrencySelect].quote[currencySelect]);
        })
        // console.log('Success');
    }
});