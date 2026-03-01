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

    function runAxeTest() {
        if (!window.axe || typeof window.axe.run !== "function") {
            console.warn("axe-core is not available. Check that the script tag loaded.");
            return;
        }

        window.axe.run(document, {}, function (err, results) {
            if (err) {
                console.error("axe-core error:", err);
                return;
            }

            console.group("axe-core results");
            console.log("Violations:", results.violations);
            console.log("Incomplete:", results.incomplete);
            console.log("Passes:", results.passes);
            console.log("Inapplicable:", results.inapplicable);
            console.groupEnd();
        });
    }

    setTimeout(runAxeTest, 0);
});
