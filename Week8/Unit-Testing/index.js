// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
    return "https://pokeapi.co/api/v2/" + name;
}

// Challenge 2
// Test string: "name=oliver&email=hello@oliverjam.es" Expected: { name: "oliver", email: "hello@oliverjam.es" }
function searchParamsToObject(string){
  const parameters = new URLSearchParams(string);
  return Object.fromEntries(parameters);
}

// Challenge 3
function isLeapYear(year){
  if(typeof(year) !== "number"){
    return "Please enter a number"
  }
  if(year < 0){
    return "Enter a valid year";
  }else if(year % 400 === 0){
    return true;
  }else if(year % 100 === 0){
    return false;
  }else if(year % 4 === 0){
    return true;
  }
  return false;
}