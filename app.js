
// dom

const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const lowerElement = document.getElementById('lower');
const upperElement = document.getElementById('upper');
const numberElement = document.getElementById('number');
const symbolElement = document.getElementById('symbol');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');


const rFunc = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getSymbol
}




// event
// check the elements
generateBtn.addEventListener('click', () => {
    const length = +lengthElement.value;
    const lowerCheck = lowerElement.checked;
    const upperCheck = upperElement.checked;
    const numberCheck = numberElement.checked;
    const symbolCheck = symbolElement.checked;

    resultElement.innerText = generatePass(lowerCheck, upperCheck, numberCheck, symbolCheck, length);

});

// generate pass function

function generatePass(lower, upper, number, symbol, length) {
    // pw var
    // filter unchecked
    // loop over length call func for each
    // add final to var
   
    let randomPassword = '';

    const typesCount = lower + upper + number + symbol;
    
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    
    if (typesCount === 0) {
        return '';
    }

    
    for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            
			randomPassword += rFunc[funcName]();
        });
        
    }
    const passF = randomPassword.slice(0,length);
    return passF;
}









// functions to generate random nuymber 
// math.floor convert to integer
// math.random generate random number * 'number of chars'
// string.fromcharcode pick a random string from charcode (97, 65, 48)


function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}


function getUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}


function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

// math random * the lenght of symbol

function getSymbol() {
    const symb = '!@#$%&*(){}[].,;:<>/='
    return symb [Math.floor(Math.random()* symb.length)];

}
