document.addEventListener("DOMContentLoaded", function () {
    var statusRegion = document.getElementById("status");

    function setStatus(message) {
        if (!statusRegion) {
            return;
        }
        statusRegion.textContent = message;
        setTimeout(function () {
            statusRegion.textContent = "";
        }, 4000);
    }

    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            var card = item.closest(".product-card");
            var name = card ? card.querySelector("h3") : null;
            var label = name ? name.textContent.trim() : "Item";
            setStatus(label + " has been added to the cart.");
        });
    });

    var newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            setStatus("Thanks for subscribing!");
            newsletterForm.reset();
        });
    }
});
