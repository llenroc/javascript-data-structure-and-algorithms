[CSS box model refrence link ](https://www.youtube.com/watch?v=lPm8lK4C7nc)

[box-sizeing:border-box](https://www.youtube.com/watch?v=WlGQdgy-M6w)

[border box model](https://www.youtube.com/watch?v=rIO5326FgPE)


### 1. CSS box Model 

Box that wraps arond every single HTML element which include content, padding, border and margin.

 * margin
 * border
 * paadding 
 * content 

`Width of the box` = `content width` + `left padding` + `right padding` + `left border` + `right border` + `left margin` + `right margin`



### 2. box-sizing: border-box;
`Width of the box` = `content width`  + `left margin` + `right margin` 

> content width =  `content width` + `left padding` + `right padding` + `left border` + `right border`


#### Example 

```
<div class="box-sizing"></div>

.box-sizing{
  width: 100px;
  height: 100px;
  border: 5px solid red;
  padding: 20px;
  margin: 50px;
  background: yellow;
}
```
Box width =  100 + 20 + 20 + 5 + 5 + 50 + 50 = 250px


```
<div class="box-sizing"></div>

.box-sizing{
  width: 100px;
  height: 100px;
  border: 5px solid red;
  padding: 20px;
  margin: 50px;
  background: yellow;
  box-sizing: border-box;
}
```

Box width =  100 + 50 + 50 = 200px.


#### Implementations in website 

```
*, *::before,  *::after { box-sizing: inherit };

html { 
  box-sizing: border-box;
}

```