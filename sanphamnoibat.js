document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.getElementById('sortSelect');
    const productList = document.getElementById('danhmucList');
  
    sortSelect.addEventListener('change', () => {
        const products = Array.from(productList.children);
        const sortOrder = sortSelect.value;
  
        products.sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));
  
            if (sortOrder === 'asc') {
                return priceA - priceB;
            } else if (sortOrder === 'desc') {
                return priceB - priceA;
            } else {
                return 0; 
            }
        });
  
        products.forEach(product => danhmucList.appendChild(product));
    });
  });
  function showPage(pageNumber) {
    let products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'none';
    });

    let currentPageProducts = document.querySelectorAll(`.page${pageNumber}`);
    currentPageProducts.forEach(product => {
        product.style.display = 'block';
    });
}

// Hiển thị trang đầu tiên khi tải trang
showPage(1);