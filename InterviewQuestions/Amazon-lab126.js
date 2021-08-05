// We are building a system to track two dimensional points. 
// We want to keep track of a configurable number of points that are closest to the origin.
// Write a program that handles this logic.


storage = {
    5 : [{key,value}, {key, value}] //--bucket1
    6 : [{key,value}, {key, value}] //--bucket2
},

minmum = "5" 

lenght > bucket.slice(0,5) ;
    

function  closetPoint( ) {
    this.storage = {};
    this.minimum = 0;
}

closetPoint.prototype.add = functions(x,y ) {
    var distance = getDistanceFrom(x,y);
    if( Number(this.minimum) && this.minimum > distance) {
        this.minimum = distance;
    } 
    if(this.storage[distance]) {
        this.storage[distance] = this.storage[distance].push({x,y});
    } else {
         this.storage[distance] = [{x,y}]
    }
}

closetPoint.protptype.getClosest = functions(nPoints) {
    const bucket = this.storage[this.minimum] || [];
    if(bucket.length > nPoints) {
        return bucket.slice(0,nPoints);
    } else {
        return bucket;
    }
    
    // Fetch All the bucket keys from the array
    // Sort the buckets keys
    // Run while loop till 
        //get nPoints or 
        //stotage ends
        
    let keys = Object.key(this.storage);
    keys.sort(function(a,b) {
        return a-b;
    });
    
    var result = [];
    
    while (nPoints > 0) {
        let bucket =  
    }
}
[5,6,7,8]