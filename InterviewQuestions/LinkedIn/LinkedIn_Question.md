1. If we wanted to implement a method of tracking every click that the user made on the site, how would we want to do this?

2. What is the difference between event capturing and event bubbling in regards to JavaScript event delegation?

    - event capturing and 
    - event bubbling

3. Event Propagation - specifically event bubbling. Give example.

4. What are ```CSS Processors```? Give example(s) and give pros and cons.
    - Cleaner Code with reusable pieces.
    - More flexibility to do things on the fly.
    - Shareable snippets and libraries.
    - Easily produce CSS that works across browsers.

    - Sass
    - LESS
    - Stylus

5. Review JavaScript code. What will be the output?  

6. Write an algorithm to ```sort and organize API data```. 

7. CSS/JS basic: How do you ```hide an element``` in web page

8. ```How many ways can you compare two objects in javascript?```

9. UI questions related to Javascript,``` (closures, functions, object oriented) CSS, AJAX, etc```

10. Developers asked about javascript questions and asked to write pseduo code, CSS guru asked quite a bit of css specific questions
 

11. Javascript questions included 
    - binary tree, 
    - closures, 
    - inheritance,
    - execute a function without a constructor -> (function xyz(){....})();

12. write a function and return true or false if there is a pair of number that sum up as 10.  

13. Questions were based on 
    - Recursion
    - Traversing the DOM (using its APIs)
    - Strings manipulation
    - Objects and Arrays
    - Javascript core concepts 
       - Prototypal inheritance, 
       - closures, 
       - pure functions, 
       - ES6+ features, 
       - sorting objects, 
       - hashtables

14. Technical phone screen - This was a standard collabedit phone screen. 

    - Part-1 I was given some code and was asked the output and how to fix it. It was based on scope and JS inheritance.
    - Part-2 HTML/CSS Had to code it from an image they had. I was also asked to explain floats| promises| accessibility.
      This was pretty straightforward, make sure you brush up on core JS.

      - JS inheritance.
      - floats
      - promises
      - accessibility

    - Part-3
        - focused on UI(html/css/js) 
        - Algo string manipulation question, 
        - Write a jquery method in pure JS. Pragmatic UI.
        - build out the whole component as a plugin(html/css/js)

15. Phone Interview
    - DOM/Event
    - accessibility

14.  Phone Interview
    - How will I create cross browser Linkedin's top menu.  
    - Write "getElementsByClassName" function.


15. LinkedIn Questions

## HTML / HTML5 ##

16.  What is Doctype & why its important?

        - The ```<!DOCTYPE>```  declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.
        
17.  What are meta tags?

        - provides metadata about the HTML document
        - will not be displayed on the page, 
        - machine parsable
        - specify page description, keywords, author of the document, last modified,and other metadata.
        - The metadata can be used by browsers (how to display content or reload page), search engines (keywords), or other web services.
        - HTML5 introduced a method to let web designers take control over the viewport (the user's visible area of a web page), through the <meta> tag (See "Setting The Viewport" example below).
        
        1. ```Note```: <meta> tags always go inside the <head> element.

        2. ```Note```: Metadata is always passed as name/value pairs.

        3. ```Note```: The content attribute MUST be defined if the name or the http-equiv attribute is defined. If none of these are defined, the content attribute CANNOT be defined.

18.   What does meta viewport tag do?
        -   The viewport is the user's visible area of a web page. 
        -   It varies with the device, and will be smaller on a mobile phone than on a computer screen.
        -   You should include the following <meta> viewport element in all your web pages:

        ```
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ```
        - A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.

19.   Difference between div and span?
        1. span
            - span element is in-line
            - usually used for a small chunk of HTML inside a line (such as inside a paragraph)
        2. - element is block-line (which is basically equivalent to having a line-break before and after it) 
            -   and used to group larger chunks of code.

20.   What is html5?

21.   Name a few new tags in html5 and their advantages?

22.   What are the new media-related elements in HTML5?
        1. <audio>
        2. <video>
        3. <source>
        4. <embed>

24.   How can I create a div work like an input?

### CSS / CSS3 ### 
    -   Difference between position absolute and fixed?
         - Refer OneNote | Old Question Collection

    -   What is the difference between inline, inline-block, and block?
        - Refer OneNote | Old Question Collection

    -   Difference between ID and Class?
    -   What are sprites and why they are recommended?
    -   what are media queries?

        ```
        @media screen and (max-width: 699px) and (min-width: 520px) {
            ul li a {
                padding-left: 30px;
                background: url(email-icon.png) left center no-repeat;
            }
        }
        ```

    -   What is responsiveness?
    -   How to select last li of ul via CSS?
    -   Difference between; .class.class2 & .class .class & .class >    -  class ?
    -   What are CSS pre-processors?
    -   What is style reset sheet?
    -   What is float?
        - https://css-tricks.com/all-about-floats/

        - Float is a CSS positioning property.

        we can look to print design. In a print layout, images may be set into the page such that text wraps around them as needed. This is commonly and appropriately called "text wrap".

        In page layout programs, the boxes that hold the text can be told to honor the text wrap, or to ignore it. Ignoring the text wrap will allow the words to flow right over the image like it wasn't even there. This is the difference between that image being part of the flow of the page (or not).
        
        In web design, page elements with the CSS float property applied to them are just like the images in the print layout where the text flows around them. Floated elements remain a part of the flow of the web page. 

        - Absolutely positioned page elements are removed from the flow of the webpage, like when the text box in the print layout was told to ignore the page wrap. Absolutely positioned page elements will not affect the position of other elements and other elements will not affect them, whether they touch each other or not.

        ```
            #sidebar {
                float: right;			
            }
        ```


### Browser Compatibility ### 
    -   What tools do you use for cross-browser testing?
    -   Lets assume you have found a rendering issue in IE8 what will be your work around to solve that issue?
    -   How will you achieve same drop down menu UI in different browsers?
    -   How will you fix border-radius compatibility issue in IE8?


### JQuery / JavaScript ### 
    -   What is jQuery?
    -   What is difference between onload and ready?
    -   How to select class in jQuery?
    -   Which selector has better performance id or class and why?
    -   How to add a class to HTML element?
    -   What is jQuery toggle function?
    -   Explain difference .empty() between .remove() ?
    -   How can I select 20th div with jQuery?
    -   What is difference between .setinterval() & .delay() ?


### General Questions ### 
    -   Name some online resources that you reference when having CSS/HTML/JS issues.
    -   Favorite tools and IDEs?
    -   Why stack overflow so useful? and whats your rating?

 
## https://www.linkedin.com/pulse/preparing-front-end-web-development-interview-2017-david-shariff ##


```
    Build the layout and interactions of common web applications, such as the Netflix browser site.
    Implement widgets like a date picker, carousel or e-commerce cart.
    Write a function similar to debounce or clone an object deeply.
```

### JavaScript ### 
    -   Execution context, especially lexical scope and closures.
    -   Hoisting, function & block scoping and function expressions & declarations.
    -   Binding – specifically call, bind, apply and lexical this.
    -   Object prototypes, constructors and mixins.
    -   Composition and high order functions.
    -   Event delegation and bubbling.
    -   Type Coercion using typeof, instanceof and Object.prototype.toString.
    -   Handling asynchronous calls with callbacks, promises, await and async.
    -   When to use function declarations and expressions.


### DOM ### 
    -   Selecting or finding nodes using document.querySelector and in older browsers document.getElementsByClassName.
    -   Traversal up and down – Node.parentNode, Node.firstChild, Node.lastChild and Node.childNodes.
    -   Traversal left and right – Node.previousSibling and Node.nextSibling.
    -   Manipulation – add, remove, copy, and create nodes in the DOM tree. You should know operations such as how to change the text   content of a node and toggle, remove or add a CSS classname.
    -   Performance – touching the DOM can be expensive when you have many nodes, you should at least know about document fragments and node caching.


### CSS ### 
    -   Layout – sitting elements next to each other and how to place elements in two columns vs three columns.
    -   Responsive design – changing an element’s dimensions based on the browser width size.
    -   Adaptive design – changing an element’s dimensions based on specific break points.
    -   Specificity – how to calculate a selector’s specificity and how the cascade affects attributes.
    -   Appropriate namespacing and naming of classnames.


### HTML ### 

    -   Semantic markup.
    -   Tag attributes, such as disabled, async, defer and when to use data-*.
    -   Knowing how to declare your doctype (most people are not writing new pages every day and forget this) and what meta tags are available to use.
    -   Accessibility concerns, for example, making sure an input checkbox has a larger responding area (use label “for”). Also, role=”button”, role=”presentation”, etc.


### System Design ### 
    -   Rendering – client-side (CSR), server-side (SSR) and universal rendering.

    -   Layout – if you’re designing a system used by multiple development teams, you need to think about building components and if you require teams to follow a consist markup to use said components.
    State management such as choosing between unidirectional data flow or two-way data binding. You should also think about if your design will follow a passive or reactive programming model, and how components related to each other for example Foo–> Bar or Foo –>Bar.

    -   Async flow – your components may need to communicate in real-time with the server. The design you propose should consider XHR vs bidirectional calls. If your interviewer asks you to support older browsers, your design will need to choose between hidden iFrames, script tags or XHR for messaging. If not, you could propose using websockets or you might decide server-sent events (SSE) are better.
    Separation of concerns – Model-View-Controller (MVC), Model-View-ViewModel (MVVM) and Model-View-Presenter (MVP) patterns.

    -   Multi-device support – Will your design use the same implementation for the web, mobile web, and hybrid apps or will they be separate implementations? If you were building a site like Pinterest, you might consider three columns on the web but only one column on mobile devices. How would your design handle this?

    -   Asset delivery – In large applications, it’s not uncommon to have independent teams owning their own codebases. These different codebases probably have dependencies on each other and each usually has their own pipeline to release changes to production. Your design should consider how assets are built with dependencies (code splitting), tested (unit and integration tests) and deployed. You should also think about how you will vend assets through a CDN or inline them to reduce network latency.


### Web Performance ### 
    -   Critical rendering path.
    -   Service workers.
    -   Image optimizations.
    -   Lazy loading and bundle splitting.
    -   General implications of HTTP/2 and server-push.
    -   When to prefetch and preload resources.
    -   Reduce browser reflows and when to promote an element to the GPU.
    -   Differences between the browser layout, compositing and painting.

### Data Structures & Algorithms ### 
    -   This is probably controversial but having a basic understanding of Big-O time complexities and common runtimes such as O(N) and O     (N Log N) won’t hurt you.
    -   Single page apps are more common now and understanding things like memory management helps. For example, if you were asked to build a client-side spell checker, knowing common data structures and algorithms is going to make your life a lot easier.
    -   I’m not advocating you need a CS degree, but the industry has moved on from building simple web pages. There are a lot of resources online where you can pick up the basics fairly quickly.

### General Web Knowledge ### 
    -   HTTP requests – GET and POST along with associated headers such as Cache-Control, ETag, Status Codes, and Transfer-Encoding.
        REST vs RPC.
    -   Security – when to use JSONP, CORs, and iFrame policies.
