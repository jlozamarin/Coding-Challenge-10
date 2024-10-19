
// Step 2: Add Event Listeners for Product Selection
let productPrice = document.getElementById("product-price");
let colorOptions = document.getElementById("color-selector");
let addPurchaseButton = document.getElementById("purchase-button");

colorOptions.addEventListener("change", (event) => { //event listener for the color dropdown
    let setPrice = event.target.value; 
    productPrice.textContent = `$${setPrice}`; 
});

addPurchaseButton.addEventListener("click", () => { //event listener for the "Shop Now" button
    let chosenColor = colorOptions.options[colorOptions.selectedIndex].dataset.color; // Get the selected color
    console.log(`You bought the ${chosenColor} Coach Tabby Shoulder Bag for ${productPrice.textContent}.`);
    alert(`You bought the ${chosenColor} Coach Tabby Shoulder Bag for ${productPrice.textContent}.`);
});
