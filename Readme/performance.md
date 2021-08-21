## Web Performance

### High level best practices 


#### Middle-End :-

* YSlow
* Resources ( CSS, JS, images)
* Architecture
* Communication

#### Front-end

* Resources Loading
* Abstractions
* JS-to-CSS
* UI thread & GC
* jsPerf

#### Methods :- 

* Minification
* Less Images 
* Load less critical scripts later ( Like analytics )



### Father for setting Web Performance rules 
http://stevesouders.com/hpws/rules.php


#### `YSlow Big-14 Rules` :- 

1. Fewer HTTP Requests
2. Use a CDN 
   - Shared cached resources ( Multiple common scripts might be available in browser cache)  
   - Larger footprints of CDN server
3. Expires/Cache-Control Header
4. Gzip * ( Important )
5. Stylesheet at Top
6. Scripts at Bottom
7. CSS Expressions
8. External JS/CSS
9. Fewer DNS Lookups ( effects CPU usage , battery consumption )
10. Minify JS/CSS
11. Avoiding Redirects (Round trips from server makes site slow)
12. Duplicate Scripts
13. ETags
14. Cacheable Ajax

#### Beyond the Big 14 :- 
`More Yslow` :-  http://developer.yahoo.com/performance/rules.html

15. Reduce Cookie Size
16. Cookie-free Domains ( Setup separate domain for image like resources without any cookies)
17. Optimize Sprites ( Horizontally large sprites image are more performant than vertical large sprite image)
		 - Gives very bad memory performances 
18. `<img src=""> or <a href="" />` Browsers are not intelligent to ignore empty resource link and will make server call





## 1. Fewer HTTP Requests
* Image Sprites
* Concat JS/CSS  ( Minification) 
* mod_deflate (Apache)
* Zip Test ( http://www.gidnetwork.com/tools/gzip-test.php )
* Conditional Requests =>  Expires / Cache-Control / Etag 
 (http://calendar.perfplanet.com/2010/bloated-request-response-headers/)



 #### Middle-End :-

* YSlow plugin 
* Resources ( CSS, JS, images)
    1. Image Leanificationizing  (Image shrinking ) 
    2. Image Sprites
    3. Inline Images ( Need to maintain the balance)
    4. Minification 
    5. Concatenation

* Architecture
    1. `Data Validation `

        a. Having two copies of same validation (one at server and One at client ) is no a good idea  :- X

        b. Having no validation at client side is also not a good  idea :- X

        c. Implement a stateless validation api at middle-end using NodeJS

    2. `JSON , Ajax and Web-Sockets `

* Communication

#### Front-end

* Resources Loading
    1. PreLoading Images (`rel="prefetch"`)
    2. Lazy Loading
    3. Parallel Loading 
    4. Dynamic Loading
* Abstractions - `Remove Abstractions`
* JS-to-CSS
  1. JS Animation  vs CSS Animation
     ```
      Use of requestAnimationFrame instead of setTimeout
        -> it gives to control the setTimeOut 
        -> More performant way
        -> More efficient way
        -> Browser pauses the process in case of idle state.

  2. CSS transition v/s Animation

* UI thread & GC
  1. Single Threaded 
  2. Async.  vs Parallel  ( Javascript is Async but not parallel )
  3. Dynamic Memory Allocation
  4. Aviod Web workers

* jsPerf - http://jsperf.com 



#### Methods :- 

* Minification
* Less Images 
* Load less critical scripts later ( Like analytics )
  