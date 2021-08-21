(function(){
    const logs = new ConsoleLog("print_logs", false);

    const a = () => logs.push("Calling a");
    const b = () => logs.push("Calling b");
    const c = () => logs.push("Calling c");
    const d = () => logs.push("Calling d");
    const e = () => logs.push("Calling e");

    const logger = (eventLogs) => {
        let index = 0,
            fn = eventLogs.charAt(index),
            counter = Number(eventLogs.charAt(index+1));
        
        const validate = () => {
                while(index < eventLogs.length -1 ) {
                    if(counter && counter > 0) {
                        break;
                    }
                    index = index+2;
                    fn = eventLogs[index];
                    counter = Number(eventLogs[index+1]);
                 }
            };

        return () => {
            validate();
            if(fn && counter > 0) {
                fn = eval(fn);
                fn();
                counter--;
            } else {
                logs.push("There is no valid log");
            }
        }
    }

    const next = logger("a2b1c0d1e0");

    next(); // a
    next(); // a
    next(); // b
    next(); // d
    next(); // There is no valid log
    next(); // There is no valid log

    logs.print();
})();