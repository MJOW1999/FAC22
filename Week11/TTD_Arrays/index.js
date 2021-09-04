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

// some

function some(arr, fn){
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const shouldKeep = fn(element, i);
        if (shouldKeep) filteredArray.push(element);
    }
    return filteredArray.length > 0;
}

// Find

function find(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      const match = fn(el, i);
      if (match) {
        return el;
      } else {
        return undefined;
      }
    }
}


// Reduce

function reduce(array, fn, initialAccumulator) {
    let newAccumulator = initialAccumulator || array[0]; // starting value
    let startCount = initialAccumulator ? 0 : 1; // if no acc passed we skip first iteration
    for (let i = startCount; i < array.length; i++) {
      const el = array[i];
      newAccumulator = fn(newAccumulator, el, i); // fn should return new acc each time
    }
    return newAccumulator;
  }

  // Flat

  function flat(array, depth = 1) {
    let flattened = [];
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      // we need to deal with nested arrays (if we haven't hit our depth limit)
      if (Array.isArray(el) && depth > 0) {
        flattened = flattened.concat(flat(el), depth - 1); // recursively call flat again, and lower depth by 1 each time
      } else {
        flattened.push(el);
      }
    }
    return flattened;
  }