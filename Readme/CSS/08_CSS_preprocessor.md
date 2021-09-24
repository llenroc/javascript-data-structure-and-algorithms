

## SaSS

https://www.mugo.ca/Blog/7-benefits-of-using-SASS-over-conventional-CSS

- Make CSS syntax friendly

- variables 
- nested syntax
- @mixins
- mathematical operations 
- functions 
- import modules 
- loops



## variables

```
$blue: #004BB4;
$ubuntu-font: 'Ubuntu', 'Arial', 'Helvetica', sans-serif;
$nunito-font: 'Nunito', 'Arial', 'Helvetica', sans-serif;

h1 {
  font: $ubuntu-font;
  color: $blue;
}
a {
  font: $nunito-font;
  background-color: $blue;
  padding: 6px;
}

```

## nested syntax

```
.navbar {
  font: $ubuntu-font;
  color: $blue;
  li {
    margin-left: 1rem;
    a {
      padding: 5px;
      font-size: 1.5rem;
      span {
        font-weight: 600;
      }
    }
  }
}

```


##  mixins 

```
@mixin set-font( $family: 'Ubuntu' , $weight: 400 , $style: normal ) {
  font-family: $family , 'Arial', 'Helvetica', sans-serif;
  font-style: $style;
  font-weight: $weight;
}

h1 {
  @include set-font;
  color: $blue;
}

h1.callout {
  @include set-font('Nunito',600);
  color: $blue;
}

```


## import modules

```
@import "source/font-awesome";           
@import "source/slick";                         
@import "framework/bootstrap";  
@import "my-custom-theme";

```