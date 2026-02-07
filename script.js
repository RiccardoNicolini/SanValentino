const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.getElementById('questionText');
const displayGif = document.getElementById('displayGif');

let yesBtnScale = 1; // Traccia la dimensione del tasto Sì
let hasClicked = false; // Flag per sapere se è stato cliccato il sì

// Funzione per far scappare il tasto "No"
const moveNoButton = (e) => {
    if (hasClicked) return; // Non fare niente se è già stato cliccato
    
    if (e && e.type === 'touchstart') e.preventDefault(); // evita che il touch scateni anche il click
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Ingrandisci il tasto Sì quando il No si muove
    yesBtnScale += 0.1;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
};

// Funzione per aumentare la dimensione del tasto
const enlargeButton = () => {
    noBtn.style.transform = 'scale(1.3)';
};

// Funzione per ingrandire il tasto Sì quando il mouse si avvicina al No
const checkDistance = (clientX, clientY) => {
    if (hasClicked) return; // Non fare niente se è già stato cliccato
    
    const noBtnRect = noBtn.getBoundingClientRect();
    const distance = Math.sqrt(
        Math.pow(clientX - (noBtnRect.left + noBtnRect.width / 2), 2) +
        Math.pow(clientY - (noBtnRect.top + noBtnRect.height / 2), 2)
    );
    
    // Se il cursore è a meno di 200px dal tasto No, aumenta la scala del tasto Sì
    if (distance < 200) {
        yesBtnScale += 0.01; // Aumenta la dimensione progressivamente
        yesBtn.style.transform = `scale(${yesBtnScale})`;
    }
};

// Evento per mouse
document.addEventListener('mousemove', (e) => {
    checkDistance(e.clientX, e.clientY);
});

// Evento per touch (telefono)
document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        checkDistance(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: true });

// registra per mouse, touch e pointer
noBtn.addEventListener('mouseover', () => {
    enlargeButton();
    moveNoButton();
});
noBtn.addEventListener('pointerenter', () => {
    enlargeButton();
    moveNoButton();
});
noBtn.addEventListener('touchstart', (e) => {
    enlargeButton();
    moveNoButton(e);
}, { passive: false });
const handleYesClick = () => {
    hasClicked = true; // Imposta il flag
    questionText.innerHTML = "SPAEVO CHE ERA UN SI!!";
    displayGif.src = "https://i.pinimg.com/originals/88/14/9b/88149b0400750578f4d07d9bc3fb0fee.gif"; // GIF felice
    document.getElementById('waitingText').style.display = 'block'; // Mostra il testo "ti aspetto"
    noBtn.style.display = 'none'; // Nasconde il tasto No
    yesBtn.style.display = 'none'; // Nasconde anche il tasto Sì
};

yesBtn.addEventListener('click', handleYesClick);
yesBtn.addEventListener('touchend', handleYesClick);
