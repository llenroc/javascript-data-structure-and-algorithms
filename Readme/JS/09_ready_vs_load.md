### Difference between load and ready

1. A Windows `load` event fires when all the content on your page is fully loaded including the DOM (document object model) content and asynchronous JavaScript, frames and images.

2. The `ready` event occurs after the HTML document has been loaded, while the `onload` event occurs later, when all content (e.g. images) also has been loaded.


3. The `onload` event is a standard event in the DOM, while the `ready` event is specific to `jQuery`. The purpose of the ready event is that it should occur as early as possible after the document has loaded, so that code that adds functionality to the elements in the page doesn't have to wait for all content to load.

4. Another difference between the two is that, while we can have more than one $(document).ready() function, we can only have one onload function. 

