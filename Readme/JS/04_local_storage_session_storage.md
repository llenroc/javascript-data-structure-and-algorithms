### What is difference between session storage and local storage?

[Referenec Local storage and Session storage link](https://javascript.info/localstorage)


1. `localStorage` has a different expiration time, localStorage lasts until you delete it or the user deletes it. 

   `SessionStorage` will only be accessible while and by the window that created it is open. 
	
2. Both local storage and session storage are scoped to document origin, so

  - https://mydomain.com/ 
  - http://mydomain.com/ 
  - https://mydomain.com:8080/
  

  All of the above URL's will not share the same storage. (Notice path of the web page does not affect the web storage)


3. `Session storage` is different even for the document with same origin policy open in different tabs, so same web page open in two different tabs cannot share the same session storage.

4. Both local and session storage are also scoped by browser vendors. So storage data saved by IE cannot be read by Chrome or FF.