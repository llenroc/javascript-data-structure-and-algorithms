class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); //. Important
  }

  save() {
    console.log("saving");
  }

  load() {
    console.log("loading");
  }

  search() {
    console.log("searching");
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if(action) {
      this[action]();
    }
  }
 }

 new Menu(menu);