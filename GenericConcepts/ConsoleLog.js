function ConsoleLog(moduleName = new Date(), isLogsVisible = true) {
    this.logs = [],
    this.moduleName = moduleName;
    this.isLogsVisible = isLogsVisible;
    this._printAllLogs = false;
}

ConsoleLog.prototype.push = function(title, obj = '') {
    this.logs.push({
        title,
        obj: JSON.stringify(obj)
    });
}

ConsoleLog.prototype.print = function(){
    if(this.isLogsVisible || this._printAllLogs) {
        this.logs.forEach(({title, obj}, index) => console.log(this.moduleName +" "+ index + ":- "+title, JSON.parse(obj)));
    }
}

