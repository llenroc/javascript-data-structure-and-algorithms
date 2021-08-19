/*

Rotation of an Array :- https://www.youtube.com/watch?v=EpP6YuqzHe8&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&index=3

array = [ 3, 5, 7, 8, 9, 12, 15, 17, 25, 28, 32, 37] Rotate by 4 =>  [ 25, 28, 32, 37, 3, 5, 7, 8, 9, 12, 15, 17]

*/



(function() {
    let logs = new ConsoleLog("F_E_M_ReverseArray", false);

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

    var array = [3, 5, 7, 8, 9, 12, 15];
    logs.push(`reverse of ${array} => [15, 12, 9, 8, 7, 5, 3] = `, reverseArray(array));
    logs.print();
})();