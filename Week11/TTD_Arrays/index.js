function map(array, fn) {
    if(!Array.isArray(array)) return "Please pass an array";
    if(typeof fn !== "function") return "Please pass a mapping function"
    const result = [];

    for(let i = 0; i < array.length; i++){
        const item  = array[i];
        const mappedItem = fn(item);
        result.push(mappedItem)
    }

    return result;
}

// filter

function filter(arr, fn){
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const shouldKeep = fn(element, i);
        if (shouldKeep) filteredArray.push(element);
    }
    return filteredArray;
}

// every

function every(arr, fn){
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const shouldKeep = fn(element, i);
        if (shouldKeep) filteredArray.push(element);
    }
    return filteredArray.length === arr.length;
}