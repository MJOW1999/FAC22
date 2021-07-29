# Fetch challenge - my answers

## 1. Use `fetch` to make a request to `"https://pokeapi.co/api/v2/pokemon/pikachu"`, assign the return value to a variable and log it

```
const poke = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
console.log(poke);
```

## 2. Use `.then()` to access the result of your PokéAPI request.

```
poke.then((result) => console.log(result))
// gives fulfilled
```

## 3. Use `response.json()` to get the response body. Add another `.then()` to log the body. You should see a Pokémon object

```
poke
.then((response) => response.json())
.then((charizard) => console.log(charizard));
```

## 4. Remove the URL from your fetch call. You should see the browser warn you about an “uncaught error”. Add a `.catch()` to your code that logs the error instead

```
const pokePromise = fetch();
pokePromise
.then((response) => response.json())
.then((charizard) => console.log(charizard))
.catch((error) => console.log(error))
```

# Workshop Tasks

## 1. getUser

```
const GetUser = (username) =>
    fetch(`https://api.github.com/users/${username}`).then((response) => response.json());

    GetUser("mjow1999").then((user) => console.log(user)).catch((error) => console.log(error));
```

## 2. getRepos

```
const getRepos = (obj) => fetch(obj.repos_url).then((response) => response.json());
      GetUser("mjow1999")
        .then(getRepos)
        .then((user) => console.log(user))
        .catch((error) => console.log(error));
```
