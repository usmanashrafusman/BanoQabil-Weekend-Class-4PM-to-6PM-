const products = [
    { name: "Pen", price: 10 },
    { name: "Pencil", price: 8 },
    { name: "Chart", price: 15 },
    { name: "Pencil Box", price: 50 },
    { name: "Pencil Color", price: 150 },
    { name: "Markers", price: 90 },
    { name: "Ink", price: 20 },
    { name: "Pointer", price: 40 },
    { name: "Ruler", price: 30 },
    { name: "Eraser", price: 17 }
];
const cart = [];

const productsDiv = document.querySelector(".products");

products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    const productName = document.createElement("p");
    const productNo = document.createElement("p");
    const productPrice = document.createElement("p");
    const buyBtn = document.createElement("button");
    buyBtn.innerText = "Buy"

    buyBtn.addEventListener("click", () => {
        cart.push(product)
    });

    productName.innerText = product.name;
    productPrice.innerText = product.price;
    productNo.innerText = index + 1;

    productDiv.appendChild(productNo);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(buyBtn);

    productsDiv.appendChild(productDiv);
})


document.getElementById("checkout").addEventListener("click", () => {
    const invoiceDiv = document.querySelector(".invoice");
    invoiceDiv.innerHTML = "";
    let totalAmount = 0;
    cart.forEach((item) => {
        const invoiceItem = document.createElement("div");
        const invoiceItemName = document.createElement("p");
        const invoiceItemPrice = document.createElement("p");
        invoiceItemName.innerText = item.name;
        invoiceItemPrice.innerText = item.price;

        invoiceItem.appendChild(invoiceItemName)
        invoiceItem.appendChild(invoiceItemPrice)

        invoiceDiv.appendChild(invoiceItem);
        totalAmount = totalAmount + item.price;

    });
    const totalAmountDiv = document.createElement("div");
    const totalAmoutName = document.createElement("p");
    const totalAmoutPrice = document.createElement("p");

    totalAmoutName.innerText = "Total Amount"
    totalAmoutPrice.innerText = totalAmount;
    totalAmountDiv.appendChild(totalAmoutName);
    totalAmountDiv.appendChild(totalAmoutPrice);

    invoiceDiv.appendChild(totalAmountDiv)

})


document.querySelector("#pay").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Please Buy Something to pay")
    } else {
        location.href = "thanks.html"
    }
})
