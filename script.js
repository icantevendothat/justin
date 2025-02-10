document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading-screen');
    const contentSection = document.querySelector('.content');
    const loadingElements = document.querySelectorAll('.loading-image, .loading-svg');
    
    contentSection.style.display = 'none';
    
    let index = 0;

    const showNextElement = () => {
        if (index < loadingElements.length) {
            const currentElement = loadingElements[index];
            currentElement.classList.add('show'); 

            if (currentElement.classList.contains('loading-svg')) {
                const textElement = document.querySelector('.text');
                textElement.style.opacity = 1;
                textTypingEffect(textElement, "SOMETIMES I'LL BE \n DRAMATIC \n JUST LET ME BE \n DRAMATIC");
            }

            index++;

            setTimeout(showNextElement, 500); 
        } else {
            setTimeout(() => {
                contentSection.style.display = 'flex';

                setTimeout(() => {
                    window.scrollTo({
                        top: window.innerHeight, 
                        behavior: 'smooth'
                    });
                }, 500); 
            }, 3000);
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
