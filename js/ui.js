class UI{
    constructor(){
        this.init();
    }
    init(){
        this.printCrytoCurrencies();
        // this.printMessage(1,2);
    }

    //Prints the <options>
    printCrytoCurrencies(){
        cryptoAPI.getCrytoCurrenciesList()
        .then(data => {
            const crytoCurrencies = data.crytocurrencies.data;
            // console.log(crytoCurrencies);

            //Build the <select> options from the REST API
            const select = document.getElementById('cryptocurrency');
            crytoCurrencies.forEach(currency => {
                //add the <option>
                const option = document.createElement('option');
                option.value = currency.id; 
                option.appendChild(document.createTextNode(currency.name));
                select.appendChild(option);



                // console.log(currency.name);

            });
        });
    }
    
    //Prints messages

    printMessage(message, className){
        const div = document.createElement('div');

        div.className = className;
        //add message
        div.appendChild(document.createTextNode(message));
        const messageDiv = document.querySelector('.messages');

        messageDiv.appendChild(div);

        //remove message
        setTimeout(()=>{
            document.querySelector('.messages div').remove();
        }, 3000);
    }


    //Display the result message
    displayResult(result, currency){

        const prevResult = document.querySelector('#result > div');

        if(prevResult){
            prevResult.remove();
        }


        let HTMLTemplate = '';

        HTMLTemplate +=`
        <div class="card cyan darken-3">
            <div class="card-content white-text">
                <span class="card-title">Result</span>
                <p>The Price of ${result.name} from ${currency} is ${result.quote[currency].price} </p>
                <p>Last Hour: ${result.quote[currency].percent_change_1h}%</p>
                <p>Last Day: ${result.quote[currency].percent_change_7d}%</p>
                <p>Last 7 Day: ${result.quote[currency].percent_change_24h}%</p>
            </div>
        </div> 
        `;
        

        this.showSpinner();
        setTimeout(() => {

        // ${result.quote[1].price} .quote[currencySelect]
        const divResult = document.querySelector('#result');
        divResult.innerHTML = HTMLTemplate;

            document.querySelector('.spinner img').remove();

        }, 3000);


        // console.log(result);
    }

    // Print the spinner
    showSpinner(){
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = './img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}