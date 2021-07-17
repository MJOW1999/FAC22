const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
//console.log("Hello")
// Interpolated
//console.log("Hello I %s Michael", "am");

// Styled
console.log("%c Hello I am Michael", "background: black; color: white; font-size: 4rem")

// warning!
console.warn("I've got a bad feeling about this");

// Error :|
console.error("Bad move, Little Ant")


// Info
console.info("FYI: Dragon Ball is my favourite anime")

// Testing
const p = document.querySelector('p')
console.assert(p.classList.contains("ouch"), "No, not that!")

// clearing
//console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name.toUpperCase()}`);
    console.log(`This is ${dog.name}, they are ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name.toUpperCase()}`)
})

// counting
console.count('Michael');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/MJOW1999')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });