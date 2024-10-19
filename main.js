
// Step 2: Add Event Listeners for Product Selection
let productPrice = document.getElementById("productPrice");
let colorOptions = document.getElementById("colorOptions");
let addPurchaseButton = document.getElementById("addPurchaseButton");

colorOptions.addEventListener("change", (event) => { //event listener for the color dropdown
    let setPrice = event.target.options[event.target.selectedIndex].dataset.price; 
    productPrice.textContent = `$${setPrice}`; 
});

addPurchaseButton.addEventListener("click", () => { //event listener for the "Shop Now" button
    let chosenColor = colorOptions.options[colorOptions.selectedIndex].dataset.color; // Get the selected color
    console.log(`You bought the ${chosenColor} Coach Tabby Shoulder Bag for ${productPrice.textContent}.`);
    alert(`You bought the ${chosenColor} Coach Tabby Shoulder Bag for ${productPrice.textContent}.`);
});
