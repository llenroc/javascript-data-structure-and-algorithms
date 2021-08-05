// Q1) Write a function named get, that would accept an an object path along with an object
// eg) get(input, 'model.action.textSpans[1].accessibilityText', defaultValue) 
// to return 'Click here to start your search on iphones'
// eg) get('input', 'model.action.textSpans[2].text', defaultValue) to return defaultValue

//https://codepad.remoteinterview.io/HYGNAFIMXU



const input = {
    model: {
        action: {
            url: 'https://www.ebay.com/sch/iphone',
            textSpans: [
                {
                    text: 'Search for iphone on eBay'
                },
                {
                    accessibilityText: 'Click here to start your search on iphones'
                }
            ],
        },
        list: [1, 2, 3],
        count: 20,
        disabled: false
    }
};


function get(input, path, defaultValue) {
  
    const outputObj = path.split(".").reduce((input, current) => {          
        return input[current] || defaultValue;
    }, input);
  
    return  outputObj;
}

console.log(get(input, 'model.action.url', "Sameer"))

//console.log(input['model.action.url']);

console.log(get(input, 'model.action.textSpans[2].text', "Sameer"))

//console.log(input['model.action.url']);