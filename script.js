document.addEventListener("DOMContentLoaded", () => {
    const loadingElements = document.querySelectorAll('.loading-image, .loading-svg');
    let index = 0;

    const showNextElement = () => {
        if (index < loadingElements.length) {
            loadingElements[index].classList.add('show');
            index++;

            setTimeout(showNextElement, 500);
        } else {
            const textElement = document.querySelector('.text');
            textElement.style.opacity = 1; 
            textTypingEffect(textElement, "SOMETIMES I'LL BE \n DRAMATIC \nJUST LET ME BE \nDRAMATIC");
        }
    };

    showNextElement();

    function textTypingEffect(element, text, i = 0) {
        if (i === 0) {
            element.textContent = ""; 
        }

        element.textContent += text[i]; 

        if (i === text.length - 1) {
            return; 
        }

        setTimeout(() => textTypingEffect(element, text, i + 1), 50);
    }
});

