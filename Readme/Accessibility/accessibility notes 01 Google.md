
TODO Google developer reference :- 

Accessibility :- https://www.youtube.com/watch?v=HtTyRajRuyY&index=30&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g

## Benefits of accessibility and SEO

1. More people can access your content
2. A brave ne wworld of devices open for new possibilities 
3. Content is easier to read and understand 
4. Cleaner, more semantic markup
5. Increases `findability` in serach engines 
6. Increases `shareability` on social networks

## Tools to check accessibility
1. Wave chrome extension 
2. AA checker 
3. Color extension
4. Axe node package 

## How do I check accessibility check

Some of the things I look for are:
- Does the tab order make sense and can I reach all controls on the page?
- Is there a clear focus indicator for interactive controls?
- Are there any offscreen elements which should not be focusable?
- Can I traverse the page with a screen reader without getting stuck?
- Is there appropriate alt text on images?
- Do custom controls work with a screen reader?
- Is the user alerted to new content added to the page?
- Are there appropriate headings?
- What about landmark elements?
- Is text high contrast enough to be legible?

And here are some of the tools I like to use:
- Chrome aXe extension: https://goo.gl/67Bm24
- Chrome accessibility devtools extension: https://goo.gl/DvAxi2
- aXe-core: https://github.com/dequelabs/axe-core


## Top 10 Accessibility tips

https://aerolab.co/blog/web-accessibility/ 

1. Use Implicit Semantics 

  - Similar to focus, native elements get rich semantics for free.
  - Examples 

    - texfield
    -  button
    -  combobox 

2. Landmarks
      - Some elements act as landmarks. Screen readers can quickly jump to these sections on the page.
      - Examples 
        -  `<h1> ... <h6>`
        -  `<main>`
        -  `<nav>`
        -  `<footer>`
3. Do not depend on color, Add descriptive message along with it.
4. Do not block zoom
    - `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">`
    - Don't add [maximum-scale=1]
5. Rediscover the alt attribute
    - compulsory to every img tag
    - empty alt attribute is completely valid
    - Screen readers tell the user that an `<img>` tag
    - no need to be redundant and begin your alt with “Picture of
    - alt value should be meaningful
6. Equivalent option of <img /> like SVG 
    - Add `<title>` - for short description
    - Add `<desc>` - for longer description
```
    <symbol id="langIcon">
        <title>Language Icon</title>
        <desc>Longer description</desc>
        <path d="M0 2C6.47 2 2 6.48 2 12s4.47 10 9.99 0h24v24H0z" />
    </symbol>
```

7. Add subtitles and captions to your videos

8. Semantics = accessibility

9. Use the right mark-up
    - Time vs. Datetime
```
        <time>14:54</time> Hours and minutes
        <time>2018-06</time> Year and month
        <time>-03:00</time> Time zones
        <time>2h 32m</time> Harry Potter 2 Duration
        <p>
            CSSConf Argentina took place on 
            <time datetime=”2016-08-07”>August 7th</time>
        </p>
```
8. Button vs. `<a>` tag

    - `<a>` tags are meant to link one file to another or open links in a new tab or in the current one. 
    - However, this tag is not ideal whenever we wish to trigger actions such as hamburger menus or image galleries.
    - The `<button>` element is the right choice for these situations and is usually achievable with JavaScript.
    - Also, the button tag can be easily confused with the input type=”button” but the difference relies in 
      the former being able to take more content (text, image + text or only images).
    -  if the content of a button is not explicit enough (take an “X” in a close button for example), we must add an aria-label attribute to help explain the function.


       ` <button aria-label="Close">X</button>`

9.  Use roles when necessary

    - In order to tell screen reader users that our link triggers an action and it is not, 
      in fact, an ordinary `<a>` tag, we must add the role attribute with the value “button”.

    - When writing your JavaScript you need to call your functions not only on click but also when 
      the user presses the spacebar. 
      
    - This is necessary because the behavior used for buttons is 
      different from the one used for links and the user should be able to trigger the action on 
      either of these commands. 
```
    
      {
            <a href="img/kitten.jpg" 
                role="button" 
                onclick="handleBtnClick(event)" 
                onKeyPress="handleBtnKeyPress(event)"
            >
                Button
            </a>
        
            function handleBtnClick(event) {    
                // Do something
            }
        
            function handleBtnKeyPress(event) {
                // Check to see if space or enter were pressed
                if (event.keyCode === 32 || event.keyCode === 13) {
                    // Prevent the default action to stop scrolling when space is pressed
                    event.preventDefault();
                    
                    // Do something
                }
            }
      }
```
10. aria roles are not usually necessary unless you break the rules

      - “navigation” for the `<nav>` tag
      - “link” for the `<a>` tag

11. On hiding elements
      
      - display: none 
            - Hides element from view and its original space is lost, next element in the flow will take its place.
            - Not readable  <--- IMPORTANT
            - Works everywhere, yay!

      - visibility: hidden;
            - Hides element from view but its original space remains occupied (pretty much like opacity: 0;)
            - Not readable  <--- IMPORTANT
            - Works everywhere, yay!
      
      - HTML5: hidden attribute
            - Same as display: none;
            - Not readable <--- IMPORTANT
            - works IE+ and elsewhere

      - Aria-hidden = “true”
            - Content is displayed in the browser, but not conveyed to the user via the assistive technology
            - Not readable <--- IMPORTANT
            - works IE+ and elsewher
    
      // `BEST OPTION `
      - .visuallyHidden class 
            - Hides the element from view and removes it from workflow 
            - Readable 
            - Works everywhere
```            
  .visually-hidden { 
      position: absolute !important;
      clip: rect(1px 1px 1px 1px); // IE6, IE7 
      clip: rect(1px, 1px, 1px, 1px);
      padding:0 !important;
      border:0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden;
  }

  body:hover .visually-hidden a, 
  body:hover .visually-hidden input, 
  body:hover .visually-hidden button { 
      display: none !important; 
  }
```

12. Audit and review
    - ChromeVox
    - Accessibility Developer Tools for Chrome
    - Color Filter
    - W3C Validator
    - WAVE


## `WAI- ARIA` 
  
  The Web accessibility initiative - Accessible Rich Internet Applications (ARIA) specifications adds the ability to `modify and enhance the semantic meaning` of elements in the DOM.

[How do I learn ARIA ?](https://www.w3.org/TR/wai-aria-practices-1.1/)

> ARIA does not change behavior 

> ARIA lets you fill in gaps in the accessibility tree.



## Q:-  Meaning of tabindex="-1"

https://stackoverflow.com/questions/32911355/whats-the-tabindex-1-in-bootstrap-for

> The tabindex attribute explicitly defines the navigation order for focusable elements (typically links and form controls) within a page. It can also be used to define whether elements should be focusable or not.

> [Both] tabindex="0" and tabindex="-1" have special meaning and provide distinct  functionality in HTML. A value of 0 indicates that the element should be placed in the default navigation order. This allows elements that are not natively focusable  (such as `<div>, <span>, and <p>`) to receive keyboard focus. Of course one should generally  use links and form controls for all interactive elements, but this does allow other  elements to be focusable and trigger interaction.

> A tabindex="-1" value removes the element from the default navigation flow (i.e., a user cannot tab to it), but it allows it to receive programmatic focus, meaning focus can be set to it from a link or with scripting.** This can be very useful for elements that should not be tabbed to, but that may need to have focus set to them.

> A good example is a modal dialog window - when opened, focus should be set to the dialog so a screen reader will begin reading and the keyboard will begin navigating within the dialog. Because the dialog (probably just a <div> element) is not focusable by default, assigning it tabindex="-1" allows focus to be set to it with scripting when it is presented.

> A value of -1 can also be useful in complex widgets and menus that utilize arrow keys or other shortcut keys to ensure that only one element within the widget is navigable with the tab key, but still allow focus to be set on other components within the widget.


## Some Accessibility tips 

1. Use of class="sr-only" 
2. Use of class="sr-only sr-only-focusable"
3. Alerts  => `[ role="alert"  and .sr-only ]`
4. Non descriptive buttons `[type="button"  aria-label="Close",  aria-hidden="true"]`
5. Badge `[ type="button" sr-only ]`
6. Breadcrumb `[aria-label="breadcrumb" aria-current="page" ]`
7. Buttons  `[ type="button", role="button", aria-pressed="true", disabled, .disabled, aria-disabled="true"  ]`
8. Button group `[  role="group",  aria-label="Basic example", role="toolbar" ]`
9. dropdown 
  ```
    [ 
        button[ id="dropdownMenuButton", role="button", aria-haspopup="true", aria-expanded="false" ], 

        div[ aria-labelledby="dropdownMenuButton" ] 
    ]
  ```

10. Forms 
```
    [
        label [for="exampleInputEmail1"]
        input [id="exampleInputEmail1" aria-describedby="emailHelp" ]
        span  [ id="emailHelp"]
    ]
```

## Tips in details

1. Use of class="sr-only" 

    - additional visual information or cues for non-visual users.
```
    <p class="text-danger">
        <span class="sr-only">Danger: </span>
        This action is not reversible
    </p>
```

2. Use of class="sr-only sr-only-focusable"

    - visually hidden interactive controls
    - traditional “skip” links
    - This will ensure that the control becomes visible once focused (for sighted keyboard users).

    `<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>`

3. Alerts  => [ role="alert"  and .sr-only ]
```
    <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
    </div>
```

4. Non descriptive buttons `[type="button"  aria-label="Close",  aria-hidden="true"]`

```
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
```
5. Badge `[ type="button" sr-only ]`

```
    <button type="button" class="btn btn-primary">
        Profile <span class="badge badge-light">9</span>
        <span class="sr-only">unread messages</span>
    </button>
```
6. Breadcrumb `[aria-label="breadcrumb" aria-current="page" ]`
```
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>
```
7. Buttons  `[ type="button", role="button", aria-pressed="true", disabled, .disabled, aria-pressed="true"  ]`

```
    - [ type="button" ] <button type="button" class="btn btn-link">Link</button>

    - [ role="button" ] <a class="btn btn-primary" href="#" role="button">Link</a>
    - [ type="submit" ] <button class="btn btn-primary" type="submit">Button</button>
    - [ type="button" ] <input class="btn btn-primary" type="button" value="Input">
    - [ type="submit" ] <input class="btn btn-primary" type="submit" value="Submit">
    - [ type="reset" ] <input class="btn btn-primary" type="reset" value="Reset">


    - Active - [ role="button", aria-pressed="true" ] <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
    
    - Disabled 
        - [ disabled ] <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
        - [ .disabled role="button" aria-disabled="true" ] <a href="#" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
            - add a [tabindex="-1"]
```

8. Button group  `[  role="group",  aria-label="Basic example", role="toolbar" ]`
```
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">Left</button>
        <button type="button" class="btn btn-secondary">Middle</button>
        <button type="button" class="btn btn-secondary">Right</button>
    </div>
```

9. dropdowns 
```   
    [ 
        button[ id="dropdownMenuButton", role="button", aria-haspopup="true", aria-expanded="false" ], 
        div[ aria-labelledby="dropdownMenuButton" ] 
    ]

    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
```
10. Forms 
```
    [
        label [for="exampleInputEmail1"]
        input [id="exampleInputEmail1" aria-describedby="emailHelp" ]
        span  [ id="emailHelp"]
    ]

    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
```




    
