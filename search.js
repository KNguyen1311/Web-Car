function searchFunction() {
    let input, filter, productList, products, productName, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    productList = document.getElementById('danhmucList');
    products = productList.getElementsByClassName('product');

    for (i = 0; i < products.length; i++) {
        productName = products[i].getAttribute('data-name');
        txtValue = productName || products[i].textContent || products[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}