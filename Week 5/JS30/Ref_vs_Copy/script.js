    // start with strings, numbers and booleans

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;
    // You might think we can just do something like this:

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice(); // this is a copy
    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    // or use the new ES6 Spread
    const team4 = [...players];
    // now when we update it, the original one isn't changed
    players[5] = "Michael";
    // The same thing goes for objects, let's say we have a person object
    const team5 = Array.from(players);
    // with Objects
    const person = {
      name: 'Michael',
      age: 22
    };

    // and think we make a copy:
    const cap = person;
    // how do we take a copy instead?
    const cap2 = Object.assign([], person, {number: 7, age: 55});
    // We will hopefully soon see the object ...spread
    // const cap3 = {...person};
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    // A way to deep clone is:

    const cap4 = JSON.parse(JSON.stringify(person));

