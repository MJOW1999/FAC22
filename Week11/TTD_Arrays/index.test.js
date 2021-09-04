// testing map()

test("map() should return an array with the same number of elements", () => {
    const result = map([1], () => {});
    equal(result.length, 1);
  });
  
  test("map() should transform each element of the array using the fn argument", () => {
    const result = map([1], (x) => x + 1);
    equal(result[0], 2);
  });

  test("map requires array and fn arguments", () => {
    equal(map(), "Please pass an array")
    equal(map([]), "Please pass a mapping function")
  })
  test("map should transform 2 elements using fn", () => {
    const result = map([1, 2], (x) => x + 1);
    equal(result[1], 3);
  })
  test("map should transform 10 elements using fn", () => {
    const result = map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x + 1);
    equal(result[9], 11);
  })

  // Test filter
  test("filter should return the same array when all elements fit the criteria", () => {
    const arr = [1,2,3]
    equal(filter(arr, (x) => x < 5), [1,2,3]);
  })

  test("filter should remove elements that don't fit the criteria", () => {
    const arr = [1,2,3];
    equal(filter(arr, (x) => x % 2 === 0), [2])
  })

  // Test every
  test("every should return true if all the array elements fit the criteria", () => {
    const arr = [1,2,3];
    equal(every(arr, (x) => x < 5), true);
  })
  test("every should return false if at least one element does not fit the criteria", () => {
    const arr = [1,2,3];
    equal(every(arr, (x) => x < 0), false);
    equal(every(arr, (x) => x % 3 === 0), false)
  })

  // Test some
  test("some should return true if at least one of the elements fit the criteria", () => {
    const arr = [1,2,3];
    equal(some(arr, (x) => x % 3 === 0), true, "3 is divisble by 3") // 1 element is true (3)
    equal(some(arr, (x) => x % 2 === 1), true, "1 and 3 are odd numbers") // 2 odd numbers
    equal(some(arr, (x) => x === 2), true)
  })

  test("some should return false if all of the elements do not fit the criteria", () => {
    const arr = [1,2,3];
    equal(some(arr, (x) => x % 4 === 0), false, "None of the numbers are divisible by 4") // 1 element is true (3)
    equal(some(arr, (x) => x > 5), false, "All numbers are less than or equal to 5") // 2 odd numbers
    
  })

  // testing find()

test("find() should return the first element that passes the test", () => {
  const result = find([100, 200], (x) => x > 10);
  equal(result, 100);
});

test("find() should return the undefined if no element passes the test", () => {
  const result = find([1, 2], (x) => x > 10);
  equal(result, undefined);
});

// testing reduce()

test("reduce() should call the fn for each element and use the return value as the new accumulator", () => {
  const result = reduce([1, 2, 3], (total, x) => total + x, 0);
  equal(result, 6);
});

test("reduce() should use the first element of array if no accumulator passed", () => {
  const result = reduce([1, 2, 3], (total, x) => total + x);
  equal(result, 6);
});

// testing flat()

test("flat() should turn a nested array into a single-level array", () => {
  const result = flat([1, [2, 3]]);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});

test("flat() should flatten nested arrays 2 levels deep", () => {
  const result = flat([1, [2, [3]]], 2);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});
 