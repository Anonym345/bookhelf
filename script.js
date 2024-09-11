function searchProduct() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
