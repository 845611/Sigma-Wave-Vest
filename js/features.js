document.addEventListener("DOMContentLoaded", function () {
    const featuresSection = document.getElementById("features");

    function checkVisibility() {
        const rect = featuresSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the section is in the viewport
        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
            featuresSection.classList.add("visible");
        } else {
            featuresSection.classList.remove("visible");
        }
    }

    // Check visibility on scroll
    window.addEventListener("scroll", checkVisibility);

    // Check visibility on page load (in case the section is already in view)
    checkVisibility();
});