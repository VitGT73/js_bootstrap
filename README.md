

## BOOTSTRAP

Include via CDN
When you only need to include Bootstrap’s compiled CSS or JS, you can use jsDelivr. See it in action with our simple quick start, or browse the examples to jumpstart your next project. You can also choose to include Popper and our JS separately.


```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

```

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
```

## SWEETALERT2


```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```
## LIST.JS

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js"></script>
```


Второй урок - исправления:

<button class="add btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">&#10010;</button>

Чтобы кнопка позеленела надо написать имя класса class="btn btn-success" или class="add btn btn-success" :

<button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">&#10010;</button>

И тип кнопки, наверное, надо бы указать:

<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">&#10010;</button>


Во второй таблице: "цена/шт."
