document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".rhnmtl_number");
    counters.forEach(counter => {
        counter.innerText = "0";
        const target = +counter.dataset.target;
        let current = 0;
        const increment = Math.ceil(target / 100);
        const update = () => {
            current += increment;
            if (current < target) {
                counter.innerText = current.toLocaleString();
                requestAnimationFrame(update);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        update();
    });
});
