function analizearray(array) {

    let obj = { average: calcAvg(array),
        min: calcMin(array),
        max: calcMax(array),
        length: array.length };
    return obj
}

function calcMin(array) {
    let sortedArray = mergeSort(array);
    return sortedArray[0];
}

function calcMax(array) {
    let sortedArray = mergeSort(array);
    return sortedArray[array.length -1];
}

function calcAvg(array) {
    let average = 0;
    array.forEach(value => {
        average += value;
    });

    average = average / array.length;

    return average;
}




function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const index = Math.floor(array.length / 2);

    const firstHalf = mergeSort(array.slice(0, index));
    const secondHalf = mergeSort(array.slice(index));

    return merge(firstHalf, secondHalf);
}

function merge(array1, array2) {
    const mergedArr = [];

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) {
            mergedArr.push(array1.shift());
        } else {
            mergedArr.push(array2.shift());
        }
    }

    return mergedArr.concat(array1, array2);
}


module.exports = analizearray;