// https://plnkr.co/edit/06hFpY54nWey2nDO?p=preview&preview

// There’s a list of messages with removal buttons [x]. Make the buttons work.
// P.S. Should be only one event listener on the container, use event delegation.

container.onclick = function(event) {
  if(event.target.className != "remove-button") return;
  let pane = event.target.closest(".pane");
  pane.remove();
}