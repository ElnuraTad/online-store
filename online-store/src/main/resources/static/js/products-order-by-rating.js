let html_actual = ' ';
window.MyLib = {
    selectedProduct: 0
};


fetch("http://localhost:9898/products/order-by-rating")
    .then(data=>{
        return data.json()
    }).then(result=>{
        renderProduct(result);
    // localStorage.setItem('products', JSON.stringify(result));
//     result.forEach(product=>{
//         MyLib.products.push(product);
//         // console.log(MyLib.productId);
//         html_actual += `<div class="col-md-4" >
//                     <br>
//                     <div class="container">
//                         <img src="${product.productPicture}" alt=""
//                              width="220" height="200">
//                     </div>
//                     <div class="text-center-left">
//                    <a href="/product_page">
//                         <p id="product-name" class=${product.id} >${product.name}</p>
//                         </a>
//                         <p style="color: black">price:${product.productPrice}</p>
//                         <br>
//                     </div>
//                     <br>
//                 </div>
// `;
//     })

    // .innerHTML = html_actual;
});

function renderProduct(data) {
    for (const p of data) {
        const productList = document.getElementById('productList');

        let div = document.createElement('div');
        div.className = "col-md-4";
        let br = document.createElement('br');
        let divCon = document.createElement('div');
        divCon.className = "container";
        let img = document.createElement('img');
        img.src = p.productPicture;
        img.width = 220;
        img.height = 200;
        let divTextLeft = document.createElement('div');
        let link = document.createElement('a');
        link.href = '/product_page';
        let pName = document.createElement('p');
        pName.innerText = p.name;
        let pPrice = document.createElement('p');
        pPrice.innerText = "price:" + p.productPrice;

        divCon.appendChild(img);
        link.appendChild(pName);
        divTextLeft.appendChild(link);
        divTextLeft.appendChild(pPrice);

        link.addEventListener('click', (e) => {
            localStorage.setItem('selectedProduct', p.id);
            alert(p.id);
        })

        div.appendChild(br);
        div.appendChild(divCon);
        div.appendChild(divTextLeft);
        div.appendChild(br);

        productList.append(div);
    }
}