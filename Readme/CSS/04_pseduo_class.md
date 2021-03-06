[CSS pseudo class part-1](https://www.youtube.com/watch?v=zGiirUiWslI)

[CSS pseudo class part-2](https://www.youtube.com/watch?v=xoRbkm8XgfQ)

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements


### How to color row (even + odd)
	
1) Color table row (even/odd)

```
tr:nth-child(even) {background: #CCC}
tr:nth-child(odd) {background: #FFF}
tr:first-child {background: #FFF}
tr:last-child {background: #FFF}
tr:nth-last-child {background: #FFF}
tr:nth-of-type {background: #FFF}
tr:first-of-type {background: #FFF}
```

2) This says that every 5th list item is bold, starting with the 3rd one. 
	In other words, the items numbered 3, 8, 13, 18, 23, etc., will be bold.
	
	`li:nth-child(5n+3) {font-weight: bold}`
	
3) EVEN AND ODD COLUMNS

```
<table>
<col><col><col><col><col><col><col><col><col><col>
<tr><th>Month<th>'94<th>'95<th>'96...
```

> (COL can be used for other things than style, but in this case all we need is that the COL elements are present.) The following rules give the first column a yellow background, and then every second column starting from column 3 a gray one:
	
```
col:first-child {background: #FF0}
col:nth-child(2n+3) {background: #CCC}
```

4. User action pseduo-classes

```
a:hover {}
a:active{}
a:focus{}
a:focus-visible {}
a:focus-within {}
```


# pseduo Element

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements


## Syntax 

```
selector::pseudo-element {
  property: value;
}
```

## Example 

```
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

```
p::after {

}

p::before {

}
```

