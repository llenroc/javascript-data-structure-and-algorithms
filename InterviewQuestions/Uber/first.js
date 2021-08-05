//https://www.frontendinterview.com/code/057f4534-48b8-47ff-98fd-143d762da7d1

console.log("hi")

/* HTML 
<div>
    <input id="input" placeholder="type something"/>
    <ul id="myList"></ul>
</div>
*/

function fromEvent(el, eventType) {
    return new Promise (function(done) {
        $(el).bind(eventType, done);
    });
}


$(document).ready(function() {
    var input = $("#input");
    var myPromise = fromEvent(input, "keypress");

    function fakeAjax(url, cb) {
        var result = "Success";
        setTimeout(function(){
            cb(url);
        }, 1000)
    }

    function getData(url) {
        console.log("value = "+url);
        return new Promise(function(resolve) {
               fakeAjax(url, resolve) ;
        });
    }

    myPromise
        .then(function(evt) {
            console.log(evt.target.id);
            var myId = "#"+ evt.target.id;
            console.log($(myId));
            return getData("Value = "+ evt.target.value);
        })
        .then(function(data) {
            console.log("Success = "+ data);
            $("#myList").append($('<li>' + data +'</li>'));
        })
        .catch(function(error) {
            console.log("Error = "+ error);
        });

})