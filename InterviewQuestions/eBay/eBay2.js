//Web page - Track what are modules that user visited.

//Picture gallery

//Aggregate all the clicks module (all picture ids) 


//'exitEvent' aggregating all the clicks sending to the server..


function fakeAjx(d) {
    return new Promise (function(resolve, reject){
        setTimeout(function(){
            resolve(d)
        },1000)
    });
}

function fromEvent(el, eventType) {    
    var rsq = ASQ.react;
    $(el).bind(eventType, rsq.push)
    return rsq;
}

var getSeq = fromEvent(btn, 'keypress')


getSeq
    .val(function(done) {
        return done.target.className;
    })
    .seq(function(done, className) {
        fakeAjx( className, done)
    })
    .val(function(done){
        output("complete")
    });





// "a3c0d1"

//getNext() //a
//getNext() //a
//getNext() //a


//getNext() //d
//getNext() //undefined
//getNext() //undefined

function trigger(str){
    this.str = str || '';
    this.counter = 0;
    this.current = '';
    
    return function() {
            if(this.counter !== 0) {
                this.counter--;
                return this.current;
            } else {
            
                if(!this.str) return;
                 
                while(Number(this.counter) === 0){
                    this.current = str[0];
                    this.counter = str[1];
                    this.str = this.str.splice(2); 
                }
                return this.current
            }
    }
}
