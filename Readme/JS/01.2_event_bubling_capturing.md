
[Event bubbling capturing](https://javascript.info/bubbling-and-capturing#bubbling_)

## Bubbling

The bubbling principle is simple.

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:


```
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

```

A click on the inner `<p>` first runs onclick:

 * On that `<p>`.

 * Then on the outer `<div>`.

 * Then on the outer `<form>`.

 * And so on upwards till the document object.


### event.target  and event.currentTarget

A handler on a parent element can always get the details about where it actually happened.

#### The most deeply nested element that caused the event is called a target element, accessible as event.target.

Note the differences from `this ( = event.currentTarget)`:

`event.target` – is the “target” element that initiated the event, it doesn’t change through the bubbling process.

`this` – is the “current” element, the one that has a currently running handler on it.

For instance, if we have a single handler `form.onclick`, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to <form> and runs the handler.

In form.onclick handler:

* `this (=event.currentTarget)` is the `<form>` element, because the handler runs on it.
* `event.target` is the actual element inside the form that was clicked.


### Stopping bubbling

`event.stopPropagation()`

event.stopPropagation() stops the move upwards, but only on the current element all other handlers will run.

For instance, here body.onclick doesn’t work if you click on <button>:


```
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

`event.stopImmediatePropagation()` 

To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.


## Capturing 

There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.

The standard DOM Events describes 3 phases of event propagation:

1. `Capturing phase` – the event goes down to the element.
2. `Target phase` – the event reached the target element.
3. `Bubbling phase` – the event bubbles up from the element.

To catch an event on the capturing phase, we need to set the handler capture option to true:

```
elem.addEventListener(..., {capture: true})
// or, just "true" is an alias to {capture: true}
elem.addEventListener(..., true)
```

There are two possible values of the capture option:

If it’s `false` (default), then the handler is set on the bubbling phase.
If it’s `true`, then the handler is set on the capturing phase.


```
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
</script>
```


## `removeEventListener`

To remove the handler, removeEventListener needs the same phase


If we `addEventListener(..., true)`, then we should mention the same phase in `removeEventListener(..., true)` to correctly remove the handler.


## `event.eventPhase`

There’s a property `event.eventPhase` that tells us the number of the phase on which the event was caught. But it’s rarely used, because we usually know it in the handler.

`the current phase (capturing=1, target=2, bubbling=3).`

## Listeners on same element and same phase run in their set order

If we have multiple event handlers on the same phase, assigned to the same element with addEventListener, they run in the same order as they are created:

```
elem.addEventListener("click", e => alert(1)); // guaranteed to trigger first
elem.addEventListener("click", e => alert(2));
```




## Each handler can access event object properties:

`event.target` – the deepest element that originated the event.

`event.currentTarget (=this)` – the current element that handles the event (the one that has the handler on it)

`event.eventPhase` – the current phase (capturing=1, target=2, bubbling=3).

