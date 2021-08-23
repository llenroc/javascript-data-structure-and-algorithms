[fetch url](https://javascript.info/fetch)


`let promise = fetch(url, [options])`

* `url` – the URL to access.
* `options` – optional parameters: method, headers etc

```
let response = await fetch(url);

if(response.ok) {
    let json = await response.json();
} else {
    alert("HTTP-Error: -" + response.status);
}
```

* `response.text()` -– read the response and return as text,
* `response.json()` - parse the response as JSON,
* `response.formData()` - return the response as FormData object
* `response.blob()` - return the response as Blob (binary data with type)
* `response.arrayBuffer()` - return the response as ArrayBuffer (low-level representation of binary data),
* `response.body` - response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.


### Example 1

```
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);
let commits = await response.json();
```

### Example 2

```

let user = {
    name: "Sameer",
    surname: "kumar"
}

let response = await fetch('/article/fetch/post/user', {
    method: "POST",
    headers: {
        "Content-Type": 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```

### Example 3

```
<!doctype html>
<body style="margin:0">
  <canvas id="canvasElem" width="100" height="80" style="border:1px solid"></canvas>

  <input type="button" value="Submit" onclick="submit()">

  <script>
    canvasElem.onmousemove = function(e) {
      let ctx = canvasElem.getContext('2d');
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };

    async function submit() {
      let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
      let response = await fetch('/article/fetch/post/image', {
        method: 'POST',
        body: blob
      });

      // the server responds with confirmation and the image size
      let result = await response.json();
      alert(result.message);
    }

  </script>
</body>
```