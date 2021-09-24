[ CORS reference link ](https://javascript.info/fetch-crossorigin)

[WebAPI Interview Questions & Answers | How to resolve CORS issue in Web API?](https://www.youtube.com/watch?v=WZs3g6NlJYQ)

CORS (Cross origin Resource Sharing) is a `W3C standard that allows a server to relax the same-origin policy`. Using CORS, a server can explicitly allow some cross origin requests while rejecting others. 


`Access-Control-Allow-Origin`: https://javascript.info

`Access-Control-Expose-Headers`: Content-Length,API-Key


## Unsafe requests 

So, to avoid misunderstandings, any “unsafe” request – that couldn’t be done in the old times, the browser does not make such requests right away. First, it sends a preliminary, so-called “preflight” request, to ask for permission.

A `preflight` request uses the method OPTIONS, no body and two headers:

* `Access-Control-Request-Method` header has the method of the unsafe request.
* `Access-Control-Request-Headers` header provides a comma-separated list of its unsafe HTTP-headers.

If the server agrees to serve the requests, then it should respond with empty body, status 200 and headers:

* `Access-Control-Allow-Origin` must be either * or the requesting origin, such as https://javascript.info, to allow it.
* `Access-Control-Allow-Methods` must have the allowed method.
* `Access-Control-Allow-Headers` must have a list of allowed headers.
* Additionally, the header `Access-Control-Max-Age` may specify a number of seconds to cache the permissions. So the browser won’t have to send a preflight for subsequent requests that satisfy given permissions.