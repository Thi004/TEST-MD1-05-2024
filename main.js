let myStore = new Store("Cửa hàng điện thoại");
showHome();
function showHome() {
    document.getElementById("main").innerHTML = `
     <table border="1">
        <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Nơi sản xuất</th>
            <th>Giá</th>
        </tr>
        <tbody id="listProduct"></tbody>
    </table>
    `
    let list = myStore.listProduct;
    let html= ``;
    for (let i = 0; i < list.length; i++) {
        html += `
        <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].factory}</td>
            <td>${list[i].price}</td>
        </tr>
        `
    }
    document.getElementById("listProduct").innerHTML = html;
}
function showFormAdd() {
    document.getElementById("main").innerHTML = `
    <input type="text" id="id" placeholder="Mã sản phẩm">
    <input type="text" id="name" placeholder="Tên sản phẩm">
    <input type="text" id="factory" placeholder="Nơi sản xuất">
    <input type="number" id="price" placeholder="Giá">
    
    <button onclick="add()">Add</button>
    `
}

function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let factory = document.getElementById("factory").value;
    let price = document.getElementById("price").value;

    let newProduct = new Product(id, name, factory, price, );
    myStore.add(newProduct);
    showHome();
}
function sortAlphabet() {

    listProduct = myStore.sort();
    console.log(listProduct);
    showHome()
}