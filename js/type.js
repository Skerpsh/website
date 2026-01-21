document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("type-text");
    const text = element.textContent;
    element.textContent = "";

    let index = 0;
    const speed = 10;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
