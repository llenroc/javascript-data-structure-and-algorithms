### Promises

    const url = "https://jsonplaceholder.typicode.com/todos/1";

    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json));


### Promise.all()

https://alligator.io/js/promise-all-promise-race/ 

https://www.javascripttutorial.net/es6/javascript-promise-race/


```
const userContent = [
  new Promise(getFriendsList),
  new Promise(getGroups),
  new Promise(getLikedPages)
];

function initalizeUserContent() {
  Promise.all(userContent)  // 👈 gotta get em all!
    .then(displayHomepage)
    .catch(redirectLoginForm);
};

initalizeUserContent();
```
> All those promises are vital to properly displaying the Facebook homepage to the user. If any of those promises are rejected it’ll be required to exit Promise.all early, and redirect to the login page. 

<br />


### Promise.race()

```
const myStockBrokers = [
  eTrade,
  fidelity,
  interactiveBrokers,
  ameritrade,
  tradeStation,
  vanguard
];

function submitBuyOrder() {
  Promise.race(myStockBrokers)
    .then(updateMyPortfolio)
    .catch(cancelBuyOrder);
};

submitBuyOrder();
```

> The method name Promise.race is befitting because it causes all of the promises to “race” against each other with only a single winner. 