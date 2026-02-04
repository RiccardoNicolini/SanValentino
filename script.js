const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.getElementById('questionText');
const displayGif = document.getElementById('displayGif');

// Funzione per far scappare il tasto "No"
const moveNoButton = (e) => {
    if (e && e.type === 'touchstart') e.preventDefault(); // evita che il touch scateni anche il click
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

// registra per mouse, touch e pointer
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('pointerenter', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton, { passive: false });

// Cosa succede quando clicca "Sì"
yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "SPAEVO CHE ERA UN SI!!";
    displayGif.src = "https://i.pinimg.com/originals/88/14/9b/88149b0400750578f4d07d9bc3fb0fee.gif"; // GIF felice
    noBtn.style.display = 'none'; // Nasconde il tasto No
    yesBtn.style.display = 'none'; // Nasconde anche il tasto Sì
});
