# Scope css styles

### Get started

```html
 <script type="module" src="https://cdn.skypack.dev/@raneio/scoped-style?min"></script>
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
![Screenshot](https://raw.githubusercontent.com/raneio/scoped-style/main/screenshot.png)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright 2021, Rane Ahonen, [Rane.io](https://rane.io)
