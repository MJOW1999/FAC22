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