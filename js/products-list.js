const products = [
    {
        id: '1',
        name: 'Baby Yoda',
        price: 100,
        image: 'img/baby-yoda.svg',
        description: 'Some quick example text to build on the card title and make up the bulk of thecards content.'
    },
    {
        id: '2',
        name: 'Banana',
        price: 120,
        image: 'img/banana.svg',
        description: 'Some quick example text to build on the card title and make up the bulk of thecards content.'
    },
    {
        id: '3',
        name: 'Viking',
        price: 130,
        image: 'img/viking.svg',
        description: 'Some quick example text to build on the card title and make up the bulk of thecards content.'
    },
    {
        id: '4',
        name: 'Girl',
        price: 10,
        image: 'img/girl.svg',
        description: 'Some quick example text to build on the card title and make up the bulk of thecards content.'
    },

]

products.sort(() => Math.random() - 0.5);

const renderProducts = (products) => {
    let html = '';
    for (const product of products) {
        html +=
            `<article class="card col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" data-bs-toggle="modal" data-bs-target="#product-info-modal" class="btn btn-info">Info</a>
                <a href="#" class="btn btn-primary">Buy ${product.price}</a>
            </div>
        </article>
        `
    }

    const productList = document.querySelector('.products__list');
    productList.innerHTML = html;
}

renderProducts(products);
