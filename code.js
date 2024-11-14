function flip(array, n) {
    if(n > array.length){
        n = array.length
    }
    let top = 0, bottom = n - 1
    while(top < bottom){
        [array[top], array[bottom]] = [array[bottom], array[top]];
        top++;
        bottom--;
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
