(function() {
    let logs = new ConsoleLog("FrontEndMaster_Recursive", false);

    function rcursiveMultiplier(arr, num) { // [1,2,3] => [3,6,9]
        if(arr.length === 0){
            return arr;
        }
        var last = arr.pop();
        rcursiveMultiplier(arr, num);
        arr.push(last*num);
        return arr;
    }

    logs.push("Recursive multiplier [1,2,3] = ",rcursiveMultiplier([1,2,3],3));
    logs.print();
})();