function flip(array, n) {
    if(n > array.length + 1){
        n = array.length + 1
    }
    var j = n * 2;
    n--;
    for (let i = 0; i < j; i++) {
        for (let index = 0; index < n ; index++) {
            const element = array[index];
            array[index] = array[index + 1];
            array[index + 1] = element;
        }
        n--;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for(let i = array.length; i > 1; i--){
        let smallest = 0;
        for (let index = 1; index < i; index++) {
            if(array[index] < array[smallest]){
                smallest = index;
            }
        }
        flip(array, smallest+1);   
        
        flip(array, i)
    }
    flip(array, array.length)
    return array;
}
