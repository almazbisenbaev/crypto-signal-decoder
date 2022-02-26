const inputPriceEntry = document.querySelector('#input-price-entry');
const inputPriceMark = document.querySelector('#input-price-mark');
const inputPnl = document.querySelector('#input-pnl');
const inputRoe = document.querySelector('#input-roe');
const inputMargin = document.querySelector('#input-margin');
const inputLeverage = document.querySelector('#input-leverage');

const outputPriceEntryValue = document.querySelector('#output-price-entry-value');
const outputPriceMarkValue = document.querySelector('#output-price-mark-value');
const outputPnlValue = document.querySelector('#output-pnl-value');
const outputRoeValue = document.querySelector('#output-roe-value');
const outputMarginValue = document.querySelector('#output-margin-value');
const outputLeverageValue = document.querySelector('#output-leverage-value');

const outputPriceEntry = document.querySelector('#output-price-entry');
const outputPriceMark = document.querySelector('#output-price-mark');
const outputPnl = document.querySelector('#output-pnl');
const outputRoe = document.querySelector('#output-roe');
const outputMargin = document.querySelector('#output-margin');
const outputLeverage = document.querySelector('#output-leverage');



const calculateRoe = (priceEntry, priceMark, pnl) => {

    let roe;

    const price_diff = priceMark - priceEntry;
    const price_diff_pc = (price_diff / priceMark) * 100;
    
    console.log(roe);
};


const calculateMargin = (roe, pnl) => {

    let result = "Can't calulate";

    if(roe && pnl){
        result = (100 / roe) * pnl;
    }
    
    return result;
};


const calculateLeverage = (roe, priceEntry, priceMark) => {

    let result = "Can't calulate";

    if(roe && priceEntry && priceMark){

        const price_diff = priceMark - priceEntry;
        const price_diff_pc = (price_diff / priceMark) * 100;

        result = roe / price_diff_pc;
    }
    
    return result;
};



const updateOutput = () => {

    let priceEntry = inputPriceEntry.value;
    let priceMark = inputPriceMark.value;
    let pnl = inputPnl.value;
    let roe = inputRoe.value;
    let margin = inputMargin.value;
    // let leverage = inputLeverage.value;



    if(priceEntry){
        if(outputPriceEntryValue){
            outputPriceEntryValue.innerHTML = priceEntry;
        }
    }


    if(priceMark){
        if(outputPriceMarkValue){
            outputPriceMarkValue.innerHTML = priceMark;
        }
    }


    if(pnl){
        if(outputPnl){
            outputPnl.innerHTML = pnl;
        }
    } else {
        // Calculate PNL
    }


    if(roe){

        if(outputRoe){
            outputRoe.innerHTML = roe;
        }
 
        // To do:  Check if leverage not input manually
        let leverage = calculateLeverage(roe, priceEntry, priceMark);
        if(outputLeverage){
            outputLeverage.innerHTML = leverage + ' Calculated';
        }

    } else {
        if(pnl){
            calculateRoe(priceEntry, priceMark, pnl);
        }
    }


    // if(!margin.length){
    //     let margin = calculateMargin(roe, pnl);
    //     if(outputMargin){
    //         outputMargin.innerHTML = margin;
    //     }
    // }




    // if(margin){
    //     if(outputMargin){
    //         outputMargin.innerHTML = margin;
    //     }
    // }


    // if(leverage){
    //     if(outputLeverage){
    //         outputLeverage.innerHTML = leverage;
    //     }
    // }


};




if(inputPriceEntry){
    inputPriceEntry.addEventListener('input', e => {
        updateOutput();
    });
}


if(inputPriceMark){
    inputPriceMark.addEventListener('input', e => {
        updateOutput();
    });
}


if(inputPnl){
    inputPnl.addEventListener('input', e => {
        updateOutput();
    });
}

if(inputRoe){
    inputRoe.addEventListener('input', e => {
        updateOutput();
    });
}
