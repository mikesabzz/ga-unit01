function bubbleSort(array) {
    let swapHappened;
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn
    do {
    for (let i = 0; i < array.length - 1; i++) {
        
    // reset swapHappened to false each time so we can detect if a swap
    // happened in this specific iteration.
    swapHappened = false;
    
    // Make another loop (inside the first one) to go through one 
    // round of swapping from the start of the list to the end
    for (let j = 0; j < array.length[i] - 1; j++) {
    // Inside inner loop:
    // compare each pair of elements near each other
    // swap them if the bigger one was at a lower index.
    if (array[j] < array[j + 1]) {
        // swapHappened = true;

        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp
    }
}    
}
    // Make sure to keep track of whether a swap happened!
} while (swapHappened);
    // After both loops have exited, remember to return the array
    return array;
}

module.exports = bubbleSort;
console.log(bubbleSort([3, 6, 1, 0, 45, 67, 32, 21]))



//solution:

function bubbleSort(array) {
    let swap = true
    let tempEl
    while (swap) {
        swap = false
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]) {
                tempEl = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tempEl
                swap = true
                console.log(array)
            }
        }
    }
    return array
 }
 
 let testArr = [4, 66, 1, 5, 27, 3, 98]
 
 console.log(testArr)
 console.log(bubbleSort(testArr))
 
 module.exports = bubbleSort