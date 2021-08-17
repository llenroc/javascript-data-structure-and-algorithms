/*

Rotation of an Array :- https://www.youtube.com/watch?v=EpP6YuqzHe8&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&index=3

array = [ 3, 5, 7, 8, 9, 12, 15, 17, 25, 28, 32, 37] Rotate by 4 =>  [ 25, 28, 32, 37, 3, 5, 7, 8, 9, 12, 15, 17]

*/



(function() {
    let logs = new ConsoleLog("F_E_M_RotationOfArray", false);

    function reverseArray(array, start, end) {
        start = start || 0;
        end = end || array.length - 1;

        function swap(i,j) {
            var keep = array[i];
            array[i] = array[j];
            array[j] = keep;
        }
        
        while (start < end ) {
            swap(start, end);
            start++;
            end--;
        }
        return array;
    };

    //1. Divide array into two parts in length =  Array[length - r],  Array[r]
    //2. reverse both the Array[length - r]  and Array[r]
    //3. Reverse the whole Array
    function rotate(array, r) {
        var end = array.length-1;
        reverseArray(array, 0, end-r); //reverse first section
        logs.push('reverse first section = ', array); //[9, 8, 7, 5, 3, 12, 15]
        reverseArray(array, end-r+1, end); // reverse second section => [9, 8, 7, 5, 3, 15, 12]
        logs.push('reverse second section = ', array);
        reverseArray(array); //reverse whole array 
        return array;
    };

    var array = [3, 5, 7, 8, 9, 12, 15];
    //logs.push(`reverse of ${array} => [15, 12, 9, 8, 7, 5, 3] = `, reverseArray(array));
    logs.push(`rotate by 2 ${array} => [12, 15, 3, 5, 7, 8, 9] = `, rotate(array,2));
    logs.print();
})();