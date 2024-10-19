
// Step 2: Add event listeners for product selection
document.addEventListener("DOMContentLoaded", () => {
    let productPrice = document.getElementById("product-price"); 
    let colorOptions = document.getElementById("color-selector"); 
    let addPurchaseButton = document.getElementById("purchase-btn"); 

    // Check if the elements are correctly found
    console.log("Product Price Element:", productPrice); // Should not be null
    console.log("Color Options Element:", colorOptions); // Should not be null
    console.log("Purchase Button Element:", addPurchaseButton); // Should not be null

    if (productPrice && colorOptions && addPurchaseButton) {
        colorOptions.addEventListener("change", (event) => {
            let setPrice = event.target.value; // Get the price from the value attribute
            productPrice.textContent = `$${setPrice}`; // Update the displayed price
            addPurchaseButton.addEventListener("click", () => {
                let chosenColor = colorOptions.options[colorOptions.selectedIndex].text.split(" - ")[0]; // Get the chosen color name
            });
        });
        // Step 4: Create a checkout event
        addPurchaseButton.addEventListener("click", () => {
            let availabilityStatus = colorOptions.options[colorOptions.selectedIndex].dataset.availability;
            let chosenColor = colorOptions.options[colorOptions.selectedIndex].text;

            if (availabilityStatus === "in-stock") {
                alert(`Congratulations! You successfully bought the ${chosenColor} Coach Tabby Shoulder Bag for ${productPrice.textContent}.`);
            } else {
                alert(`Alert: The ${chosenColor} Coach Tabby Shoulder Bag is out of stock.`);
            }
        });
    } else {
        console.error("Error: Required elements not found.");
    }
});
