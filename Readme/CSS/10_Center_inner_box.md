## Center inner box 


### Using flex-box 

```
<div class="outer-div">
  <div class="inner-div">
  </div>
</div>

.outer-div {
  width: 500px;
  height: 500px;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center
}

.inner-div {
  width: 100px;
  height: 100px;
  background: red;
}

```


### Using plain class

```
<div class="outer-div">
  <div class="inner-div">
  </div>
</div>

.outer-div {
  width: 500px;
  height: 500px;
  background: yellow;
  position: relative;
}

.inner-div {
  width: 100px;
  height: 100px;
  background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

```

