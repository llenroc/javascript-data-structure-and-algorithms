
[BEM - Block Element Modifier](https://www.youtube.com/watch?v=SLjHSVwXYq4)

http://getbem.com/introduction/

https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/


## Rules 
```
.block {}
.block__element {}
.block--modifier {}
```

```
.site-search {} /* Block */
.site-search__field {} /* Element */
.site-search--full {} /* Modifier */
```


```
.person {}
.person__hand {}
.person--female {}
.person--female__hand {}
.person__hand--left {}
```

## Examples

```

<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>

.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}

```

<br />

```

.media {}
.media__img {}
.media__img--rev {}
.media__body {}

<div class="media">
    <img src="logo.png" alt="Foo Corp logo" class="img-rev">
    <div class="body">
        <h3 class="alpha">Welcome to Foo Corp</h3>
        <p class="lede">Foo Corp is the best, seriously!</p>
    </div>
</div>


<div class="media">
    <img src="logo.png" alt="Foo Corp logo" class="media__img  media__img--rev">
    <div class="media__body">
        <h3 class="alpha">Welcome to Foo Corp</h3>
        <p class="lede">Foo Corp is the best, seriously!</p>
    </div>
</div>

```