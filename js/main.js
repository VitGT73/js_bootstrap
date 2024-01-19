if (!localStorage.getItem("goods")) {
  localStorage.setItem("goods", JSON.stringify([]));
}

let myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
  keyboard: false,
});

document.querySelector("button.add_new").addEventListener("click", function (e) {
  let name = document.getElementById("good_name").value;
  let price = document.getElementById("good_price").value;
  let count = document.getElementById("good_count").value;
  if (name && price && count) {
    document.getElementById("good_name").value = "";
    document.getElementById("good_price").value = "";
    document.getElementById("good_count").value = "1";
    let goods = JSON.parse(localStorage.getItem("goods"));
    goods.push(["good_" + goods.length, name, price, count, 0, 0, 0]);
    localStorage.setItem("goods", JSON.stringify(goods));
    update_goods()
    myModal.hide();
  } else {
    Swal.fire({
      icon: "error",
      title: "Ошибка",
      text: "Пожалуйста заполните все поля!",
    });
  }
});

update_goods()

function update_goods(){
  let result_price = 0
  let tbody = document.querySelector('.list')
  tbody.innerHTML = ""
  document.querySelector('.cart').innerHTML = ""
  let goods = JSON.parse(localStorage.getItem('goods'))
  if (goods.length){
    table1.hidden = false
    table2.hidden = false
    for(let i=0; i < goods.length; i++){
      tbody.insertAdjacentHTML('beforeend',
      `
      <tr class = "align-middle">
      <td>${i+1}</td>
      <td class="name">${goods[i][1]} </td>
      <td class="price">${goods[i][2]} </td>
      <td>${goods[i][3]} </td>
      <td><button class="good_delete btn-danger" data-delete="${goods[i][0]}">&#10006;</td>
      <td><button class="good_delete btn-danger" data-goods="${goods[i][0]}">&#10149;</td>
      `)
    }
  }
}
