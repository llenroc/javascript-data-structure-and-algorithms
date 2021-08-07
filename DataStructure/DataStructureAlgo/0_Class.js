/* 
(function() {
    let logs = new ConsoleLog("F_E_M_Class", true);
    logs.push('',{});
    logs.print();
})();
 */


(function() {
    /* function Building(name, floors) {
        this = {}
        this.name = name;
        this.floors = floors;
        return this;
    } */

    function Building(name, floors) {
        this.name = name;
        this.floors = floors;
    };

    Building.prototype.countFloors = function() {
        return this.floors;
    };

    class ES6_Building {
        constructor(name = '', floors = 0){
            this.name = name;
            this.floors = floors;
        }

        countFloors(){
            return this.floors;
        }
    }


    let logs = new ConsoleLog("FrontEndMaster_Class", false);

    const myHouse = new Building("Siwan House", 5);
    logs.push(`myHouse = ${myHouse.name} floors = ${myHouse.countFloors()}`);

    const myNewHouse = new ES6_Building("US House", 2);
    logs.push(`myNewHouse = ${myNewHouse.name} floors = ${myNewHouse.countFloors()}`);
    logs.print();
})();