document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-grid img");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                }
            });
        },
        { threshold: 0.3 } // Adjust for smoother trigger
    );

    images.forEach((img) => {
        observer.observe(img);
    });
});
