(function(){
    const logs = new ConsoleLog("braces_order", false);

    var checkOrder = logs => {
        let order = 0;
        for(let i=0; i<logs.length; i++) {
            order = logs.charAt(i) === "(" ? ++order : --order;
            if(order < 0) return false;
        }
        return order !== 0 ? false : true;
    }

    logs.push(" (()((() => false ", checkOrder('(()((()') );
    logs.push(" )(()((() => false ", checkOrder(')(()((()') );
    logs.push(" (())(())((())) => true ", checkOrder('(())(())((()))') );


    logs.print();
})();