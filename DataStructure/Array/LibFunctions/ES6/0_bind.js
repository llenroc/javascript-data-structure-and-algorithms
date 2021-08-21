//https://stackoverflow.com/questions/22103354/javascripts-bind-implementation
//https://gist.github.com/manar007/299fb93a69b5d7703366


(function(){
    const logs = new ConsoleLog("bind-apply-call", false);

    //ES5 - This solution does not work if we move out from current IIFE function 
    Function.prototype.bind_ES5 = function() {
        var that = this,
            args = Array.prototype.slice.call(arguments),
            context = args.shift();
            return function() {
                return that.apply(
                    context,
                    args.concat(Array.prototype.slice.call(arguments))
                );
            }
    }

    // ES6  implementations 
    Function.prototype.bind_ES6 = function( ...args ) {
        let that = this,
            [context, ...rest ] = args;
    
        return function ( ...args ) {
            return that.apply( context, [ ...rest, ...args ]);
        }
    }

    //FINAL bind_ES6_Final ---> concise
    Function.prototype.bind = ( context, ...rest ) => {
        return ( ...args ) => {
            return this.apply( context, [ ...rest, ...args ]);
        }
    }
  
    // Example :-1 
    var foo = {
        x: 3
    }
    
    var bar = function(p,b){
        logs.push(this.x+' '+p+' '+b);
    }
    
    var boundFunc = bar.bind_ES6(foo,1,2);
    boundFunc(); //3 1 2 


    //Example :-2
    x = 9;
    var module = {
        x: 81,
        getX: function () {
            return this.x;
        }
    };

    logs.push("case 1 - 81 = ", module.getX()); // 81

    var getX = module.getX;
    logs.push("case 2 - 9 = ", getX()); // 9, because in this case, "this" refers to the global object

    // create a new function with 'this' bound to module
    var boundGetX = getX.bind_ES6(module);
    logs.push("case 3 - 81 = ", boundGetX()); //81
  
    logs.print();
  })();


// DO NOT refer this code 
/* Function.prototype.bind = function(context){
    var	that = this,
        slicedArgs = Array.prototype.splice.call(arguments, 1),
        bounded = function (){
            var newArgs = slicedArgs.concat(Array.prototype.splice.call(arguments));
            return that.apply(context,newArgs);
        }
    bounded.prototype = that.prototype;
    return bounded;
}; */


  
