# Scope css styles

### Get started

```html
 <script type="module" src="./scoped-style.js"></script>
```

```html
<div class="test">
  <p>This should be red</p>
  <p class="info">This info should be blue</p>
</div>

<div>
  <p>This should be black</p>
  <p class="info">This info should be black</p>
</div>

<scoped-style scope=".test">
  <style media="not all">
    :root {
      color: red;
    }

    .info {
      color: cornflowerblue;
    }
  </style>
</scoped-style>
``` 

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright 2021, Rane Ahonen, [Rane.io](https://rane.io)
