
// Step 2: Add Event Listeners for Product Selection
document.addEventListener("DOMContentLoaded", () => {
    let productPrice = document.getElementById("productPrice");
    let colorOptions = document.getElementById("colorOptions");
    let addPurchaseButton = document.getElementById("addPurchaseButton");

    console.log(productPrice); // displays the product price element
    console.log(colorOptions); // displays sthe color options element
    console.log(addPurchaseButton); // displays the purchase button

    colorOptions.addEventListener("change", (event) => { // event listener for the color dropdown
        let setPrice = event.target.options[event.target.selectedIndex].dataset.price; 
        productPrice.textContent = `$${setPrice}`; 
    });
    addPurchaseButton.addEventListener("click", () => { // event listener for the "Shop Now" button
        let chosenColor = colorOptions.options[colorOptions.selectedIndex].dataset.color; // Get the selected color
        console.log(`You bought the ${chosenColor} Coach Tabby Shoulder Bag for ${productPrice.textContent}.`);
        alert(`You bought the ${chosenColor} Coach Tabby Shoulder Bag for ${productPrice.textContent}.`);
    });
});

