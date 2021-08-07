  
(function() {
    let logs = new ConsoleLog("F_E_M_HashTable", false);

    function simpleHash(str, tableSize) {
        var hash = 0;
        for(let i = 0; i < str.length; i++) {
            hash += str[i].charCodeAt() * (i+1);
        }
        return hash % tableSize;
    };

    
    function HashTable(size) {
    // implement me...
        this._storage = [];
        this._count = 0;
        this._size = size;
    };
    
    
    HashTable.prototype.find = function(key) {
    // implement me...
        var hash = simpleHash(key, this._size);
        this._storage[hash] = this._storage[hash] || [];
        var bucket = this._storage[hash];
        var match, matchIndex;
        bucket.forEach(function(item, index){
            if(item.hasOwnProperty(key)){
                match = item;
                matchIndex = index;
            }
        });
        return {
            match: match,
            bucket: bucket,
            matchIndex: matchIndex
        };
    };

    HashTable.prototype.resize = function(newSize) {
        var oldStorage = this._storage;
        this._count = 0;
        this._storage = [];
        this._size = newSize;
        var that = this;
        oldStorage.forEach(function(bucket){
            bucket.forEach(function(item){
                var key = Object.keys(item)[0];
                that.set(key, item[key]);
            });
        });
    };
    
    HashTable.prototype.set = function(key, value) {
    // implement me...
        var match = this.find(key).match;
        var bucket = this.find(key).bucket;
        if(match) {
            match[key] = value;
        } else {
           var newItem = {};
           newItem[key] = value;
           bucket.push(newItem);
           this._count++;

           if(this._count > (this._size * .75)) {
               this.resize(this._size * 2);
           }
        }
        return this;
    };
    // Time complexity:

    var myMap = new HashTable(10);
    logs.push('should be HT object = ', myMap.set('key', 'value'));
    logs.push('should be HT object = ', myMap.set('key1', 'value'));
    logs.push('should be HT object = ', myMap.set('key2', 'value'));
    logs.push('should be HT object = ', myMap.set('key3', 'value'));
    logs.push('should be HT object = ', myMap.set('key4', 'value'));
    logs.push('should be HT object = ', myMap.set('key5', 'value'));
    logs.push('should be HT object = ', myMap.set('key6', 'value'));
    logs.push('should be HT object = ', myMap.set('key7', 'value'));
    logs.push('should be HT object = ', myMap.set('key8', 'value'));
    logs.push('should be HT object = ', myMap.set('key9', 'value'));
    logs.push('should be HT object = ', myMap.set('key10', 'value'));
    
    HashTable.prototype.get = function(key) {
    // implement me...
        var match = this.find(key).match;
        
        return !!match && match[key];
    };
    // Time complexity:

    logs.push('should be value = ', myMap.get('key10'));
    
    HashTable.prototype.has = function(key) {
    // implement me...
        var match = this.find(key).match;
        return !!match;
    };
    // Time complexity:

    logs.push('should be true = ', myMap.has('key10'));
    logs.push('should be false = ', myMap.has('key11'));
    
    HashTable.prototype.delete = function(key) {
    // implement me...
        var match = this.find(key).match;

        if(match) {
            var bucket = this.find(key).bucket;
            var matchIndex = this.find(key).matchIndex;
            bucket.splice(matchIndex, 1);
            this._count--;

            if(this._count < this._size *25) {
                this.resize(this._size * .5);
            }
        }
        return !!match;

    };
    // Time complexity:
    logs.push('should be key4 = ', myMap.delete('key4'));
    logs.push('should be key5 = ', myMap.delete('key5'));
    logs.push('should be key6 = ', myMap.delete('key6'));
    logs.push('should be key7 = ', myMap.delete('key7'));
    logs.push('should be key8 = ', myMap.delete('key8'));
    logs.push('should be key9 = ', myMap.delete('key9'));
    logs.push('should be key10 = ', myMap.delete('key10'));
    logs.push('myMap = ', myMap);
    
    HashTable.prototype.count = function() {
    // implement me...
        return this._count;
    };
    // Time complexity:

    logs.push('count = ', myMap.count());
    
    HashTable.prototype.forEach = function(callback) {
    // implement me...
        var storage = this._storage;
        storage.forEach(function(bucket){
            bucket.forEach(function(item){
                callback(item);
            });
        });
        
    };
    // Time complexity:

    function print(item)  {
        logs.push("item = ",item);
    }
    myMap.forEach(print);

    logs.print();
})();
