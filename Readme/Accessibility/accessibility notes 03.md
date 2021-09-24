- Git :- https://github.com/jkup/learn-a11y

- Google Developer :- https://www.youtube.com/watch?v=HtTyRajRuyY&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=30

- Keyboard Accessibility :- https://webaim.org/techniques/keyboard/#intro
- https://github.com/wicg/inert   <-- Important


## accessibility => A11ycasts with Rob Dodson
- tab -> move forward
- shift + tab  -> move bacward
- document.querySelector('[tabindex="-1"]').focus()
- Use aria-label where you can't give the name  to the component 
    - aria-label = "menu"  
    - aria-labelledBy = "menu-button menu-dropdown"



1. WICG inert polyfill 

    - To correct the focus on tab on the websites
    - https://github.com/wicg/inert   <-- Important

    - Some Example 
        - https://codepen.io/WW3/pen/d538105651dc6569c8fcd8f14d6a6097
        - https://codepen.io/kunukn/full/dXKEJg
        - https://codepen.io/gillibrand/pen/oLaGLk


2. What is focus ?

    - Keyboard Accessibility :- https://webaim.org/techniques/keyboard/#intro

    - When an item has keyboard 'focus', it can be activated or manipulated with the keyboard."" In other words, 
        
        - if an element is currently focused, and you press a key on your keyboard, that keyboard event will be directed at that element. 

    - Users can change the currently focused element by pressing either the Tab or Shift-Tab keys. 
        - The order that elements receive focus is known as the ""Tab Order"". Making sure you have a consistent, logical tab order is extremely important, especially for users who rely on the keyboard as their primary means of navigating a page.

    - Example :- https://output.jsbin.com/fafuqi/1
    - Example :- https://jsbin.com/yavige/edit?html,output

    - Tab order will be same as the order on focusable elements in the DOM tree.

3. Controlling focus with tabIndex 

    -  Whenever possible you want to use native HTML elements for your custom controls. The button tag, for instance, is very easy to style, and has built-in keyboard support and semantics.
    -  But there are times when you need to build something that doesn't have a corresponding native element. Sometimes you've just gotta build something new! In these cases it's important to remember to add in crucial keyboard support so all of your users can access your content.
    -  The first step is to make sure that a user can actually focus your control. To accomplish this you can use the tabindex attribute.

    - tabindex = -1
        -  Will remove the element from the normal focus flow.
        -  call focus method in JS for tabindex = -1
             - document.querySelector('[tabindex="-1"]').focus()

        - Example :-  https://jsbin.com/mogoram/5/edit?html,output

    - tabindex > 0 
        - Anti pattern
        - higher value , will get focus first .

4. Just use button

    - Talking about tabindex and custom controls is super fun, and we'll definitely be doing more of it in the future. But I wanted to pause for a moment and shine a light on some of the awesomness of the humble button element. Too often I see developers use divs or spans to make buttons, but when you do this you're missing out on SO MANY FEATURES. You may not realize just how much accessibility and general purpose functionality is built into the simple button, but it's actually a wonderful tool that should be your first and last option whenever you're adding an action to your page.
    - So today I want to sing the praises of button and clue you in to a few handy features you might not have seen before.

    - Example -  https://output.jsbin.com/dajoha
    - custom button - voice over or screen reader will read this as group not button

    - Custom button
        - will not be focuable on tab
        - will not be removed on adding 'disabled'
        - will loose lot of functionality of button which should work with screen reader

5. Removing tabindex

    - Link:- https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton

    - Custom RadioButton and RadioGroup

6. Screen Reader Basics: VoiceOver 

    [Keyboard shortcuts](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)

    - Mac buit-in screen reader - voice Over
    - Open/ close -> command + F5
    - rotor :- VO + u
    - VO(Voice Over ) -> Ctrl + alt(option)

    - Navigate :- VO+ right arrow (>)
    - Heading :- VO + command + H
    - click :- VO + spaceBar
    - stop talking :- Ctrl
    - VO increase decrease pitch :- VO + command + up/down arrow
    - VO menu :-  VO + up/down arrow

    Focus voiceover on browser
        - VO + shift + down arrow


7. Why do semantics matter ?

    - It's easy to overlook the importance of semantics in web development. After all, a div and a section tag all render the same, right? But in the world of accessibility semantics are extremely important. Today on the show we'll cover how proper semantics let you express the affordances for your UIs, and I'll explain how those affordances get transformed into the accessibility tree. If you've ever wondered HOW a screen reader turns a bunch of HTML into a spoken UI then you'll definitely enjoy today's episode :)

    - All dom element should have below attributes 
        - role
        - name
        - state ( some will have)
        - value ( some will have)

    - Application => GUI + Accessibility tree => Assistive technology => User

    - Implicit Semantics 
        - Examples :-
            1. Password input field :- 'secure edit text'
            2. <button /> :- 'button
            3. Select box :- "pop-up button"
            4. <div> :- group

    - Chrome in-built Accessibility tool

8. Screen Reader Basics: NVDA

    - https://www.nvaccess.org/
    - NVDA (NonVisual Desktop Access) is a free “screen reader” which enables blind and vision impaired people to use computers. It reads the text on the screen in a computerised voice. You can control what is read to you by moving the cursor to the relevant area of text with a mouse or the arrows on your keyboard.
    
    - open/close:- VO + N
    - Headings :- H / shift + H
    - nextLine :-  Up/down arrow
    - Jump to next / previous form :- F / shift + F
    - enter/exit forms mode :- CapsLock + spaceBar
    - 


9. Alerts

    - role="alert"
    - custom alert 

10. How do I check accessibility check

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

    Sidenote: at 5:18, not sure why the video didn't announce the different sizes but I tried again later and it was working. Maybe a VoiceOver quirk. 



11. The art of labelling 

    - Every interactive control in your application needs to have an accessible "name", more often referred to as a "label". In today's episode I'll show you how elements actually get their accessible names, and some techniques you can use to provide proper labeling. After you're done watching, be sure to skim through your current site or app to make sure all of your controls have labels!
    - Chrome Accessibility dev tool

    - Defining label to checkbox or input fields 

```
    <label for="checkBoxId">Some Text</label>
    <input type="checkbox" checked id="checkBoxId" />

    <label>
        <input type="checkbox" checked />
        Some Text
    </label>
```
    - aria-label = "menu"
    - aria-labelledBy = "menu-button menu-dropdown"