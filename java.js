document.addEventListener("DOMContentLoaded", function() {
    const pricingPlans = document.querySelectorAll(".pricing-plan");

    // Add hover effect to pricing plans
    pricingPlans.forEach(plan => {
        plan.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.5s ease";
        });

        plan.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
    const priceElements = document.querySelectorAll(".price");
    priceElements.forEach(price => {
        price.addEventListener("click", function() {
            const monthlyPrice = this.getAttribute("data-monthly");
            const yearlyPrice = this.getAttribute("data-yearly");
            const currentPrice = this.textContent.trim();
            if (currentPrice === monthlyPrice + "/month") {
                this.innerHTML = yearlyPrice + "/year";
            } else {
                this.innerHTML = monthlyPrice + "/month";
            }
        });
    });
});
