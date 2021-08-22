[Event delegation](https://javascript.info/event-delegation)

> Please refer above link if possible 

## Event delegation 

The idea is that if we have a `lot of elements` handled in a similar way, then instead of assigning a handler to each of them – `we put a single handler on their common ancestor`.

In the handler we get event.target to see where the event actually happened and handle it.

### Example - Our task is to highlight a cell <td> on click.

```
<table>
  <tr>
    <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
  </tr>
  <tr>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="n">...</td>
    <td class="ne">...</td>
  </tr>
  <tr>...2 more lines of this kind...</tr>
  <tr>...2 more lines of this kind...</tr>
</table>
```
```
  let selectedTd;

  table.onclick = function(event) {
    let target = event.target; // where was the click?

    if (target.tagName != 'TD') return; // not on TD? Then we're not interested

    highlight(target); // highlight it
  };

  function highlight(td) {
    if (selectedTd) { // remove the existing highlight if any
      selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight'); // highlight the new td
  }

```

### Issue with above - `The click may occur not on the <td>, but inside it.`

```
<td>
  <strong>Northwest</strong>
  ...
</td>
```

### Solution

In the handler table.onclick we should take such event.target and find out whether the click was inside <td> or not.

> if a click happens on that <strong> then it becomes the value of event.target.

```
table.onclick = function(event) {
  let td = event.target.closest('td'); // (1)

  if (!td) return; // (2)

  if (!table.contains(td)) return; // (3)

  highlight(td); // (4)
};
```

## Delegation example: actions in markup

[code link](https://plnkr.co/edit/?p=preview&preview)

```
<div id="menu">
  <button data-action="save">Save</button>
  <button data-action="load">Load</button>
  <button data-action="search">Search</button>
</div>

<script>
  class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      alert('saving');
    }

    load() {
      alert('loading');
    }

    search() {
      alert('searching');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Menu(menu);
</script>
```
