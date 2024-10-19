
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
            let setPrice = event.target.value; // Get the price from the color attribute
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

 // Step 2: Add event listeners for Coach Classic T-Shirt
 let tshirtPrice = document.getElementById("tshirt-selector");
 let addPurchaseButtonTshirt = document.getElementById("purchase-btn-tshirt");

 // Check if the elements for T-shirt are correctly found
 console.log("T-shirt Selector Element:", tshirtPrice); // Should not be null
 console.log("T-shirt Purchase Button Element:", addPurchaseButtonTshirt); // Should not be null

 if (tshirtPrice && addPurchaseButtonTshirt) {
     tshirtPrice.addEventListener("change", (event) => {
         let tshirtPriceValue = event.target.dataset.price; // Get the price from the selected option
         productPrice.textContent = `$${tshirtPriceValue}`; // Update the displayed price for T-shirt
     });

     // Step 4: Create a checkout event for Coach Classic T-Shirt
     addPurchaseButtonTshirt.addEventListener("click", () => {
         let tshirtAvailabilityStatus = tshirtPrice.options[tshirtPrice.selectedIndex].dataset.availability;
         let chosenTshirtSize = tshirtPrice.options[tshirtPrice.selectedIndex].text;

         if (tshirtAvailabilityStatus === "in-stock") {
             alert(`Congratulations! You successfully bought the ${chosenTshirtSize} for ${productPrice.textContent}.`);
         } else {
             alert(`Alert: The ${chosenTshirtSize} is out of stock.`);
         }
     });
 } else {
     console.error("Error: Required elements for Coach Classic T-Shirt not found.");
 }


 // Step 2: Add event listeners for Coach Sneakers
 let sneakersPrice = document.getElementById("sneakers-selector");
 let addPurchaseButtonSneakers = document.getElementById("purchase-btn-sneakers");

 // Check if the elements for Sneakers are correctly found
 console.log("Sneakers Selector Element:", sneakersPrice); // Should not be null
 console.log("Sneakers Purchase Button Element:", addPurchaseButtonSneakers); // Should not be null

 if (sneakersPrice && addPurchaseButtonSneakers) {
     sneakersPrice.addEventListener("change", (event) => {
         let sneakersPriceValue = event.target.dataset.price; // Get the price from the selected option
         productPrice.textContent = `$${sneakersPriceValue}`; // Update the displayed price for Sneakers
     });

     // Step 4: Create a checkout event for Coach Sneakers
     addPurchaseButtonSneakers.addEventListener("click", () => {
         let sneakersAvailabilityStatus = sneakersPrice.options[sneakersPrice.selectedIndex].dataset.availability;
         let chosenSneakerColor = sneakersPrice.options[sneakersPrice.selectedIndex].text;

         if (sneakersAvailabilityStatus === "in-stock") {
             alert(`Congratulations! You successfully bought the ${chosenSneakerColor} for ${productPrice.textContent}.`);
         } else {
             alert(`Alert: The ${chosenSneakerColor} is out of stock.`);
         }
     });
 } else {
     console.error("Error: Required elements for Coach Sneakers not found.");
 }
});

