//https://www.frontendinterview.com/code/057f4534-48b8-47ff-98fd-143d762da7d1

$(document).ready(function() {
    var input = $("#input");

    function fakeAjax(url, cb) {
        var result = "Success";
        setTimeout(function(){
            cb(url);
        }, 1000)
    }

    function getData(url) {
        return new Promise(function(resolve) {
               fakeAjax(url, resolve) ;
        });
    }

    function inputHandler(evt) {
        getData(evt.target.value)
            .then(function(data) {
                $("#myList").append($('<li>' + data +'</li>'));
            })
            .catch(function(error) {
                console.log("Error = "+ error);
            });
    }

    function debounce(fn,wait) {
        var timeout;
        return function(){
            var context = this,
                args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                fn.apply(context, args);
            }, wait);
        }
    }

    var inputCallHandler = debounce(inputHandler, 3000);

    function fromEvent(el, eventType) {
        $(el).bind(eventType, inputCallHandler);
    }

    fromEvent(input, "keypress");
});

/*
// ECMA6 :- 
function debounce(func, wait){
    let timeout;
    return function(...args){
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait); 
    }
}*/