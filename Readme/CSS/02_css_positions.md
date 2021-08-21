### Static vs Relative vs Absolute vs Fixed Positioning ###

## position: static
	
1. Default position 
2. Static positioned elements are not effected by top, bottom, left and right properties.
3. An element with `position: static;` is not positioned in any special way; it is always positioned according to the `normal flow of the page`:
  

    div.static {
        position: static;
        border: 3px solid #73AD21;
    }
	
## position: relative 
	
1. An element with `position: relative;` is positioned `relative to its normal position`.
2. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position.
3. Other content will not be adjusted to fit into any gap left by the element.


	div.relative {
	    position: relative;
	    left: 30px;
	    border: 3px solid #73AD21;
    }
	
## position: fixed

1. An element with `position: fixed;` is positioned `relative to the viewport`, 
2. It always stays in the same place even if the page is scrolled. 
3. The top, right, bottom, and left properties are used to position the element.


	div.fixed {
	    position: fixed;
	    bottom: 0;
	    right: 0;
	    width: 300px;
	    border: 3px solid #73AD21;
	}
	
## position: absolute

1. An element with `position: absolute;`  is positioned relative to the `nearest positioned ancestor` (instead of positioned relative to the viewport, like fixed).
2. However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
3. Note: A "positioned" element is one whose position is anything except static.

Eg:-


	<div class="relative">This div element has position: relative;
	  <div class="absolute">This div element has position: absolute;</div>
	</div>
	

	div.relative {
	    position: relative;
	    width: 400px;
	    height: 200px;
	    border: 3px solid #73AD21;
	} 
	
	div.absolute {
	    position: absolute;
	    top: 80px;
	    right: 0;
	    width: 200px;
	    height: 100px;
	    border: 3px solid #73AD21;
	}


   
	
	
