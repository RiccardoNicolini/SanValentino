const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.getElementById('questionText');
const displayGif = document.getElementById('displayGif');

// Funzione per far scappare il tasto "No"
noBtn.addEventListener('mouseover', () => {
    // Calcola posizioni casuali sullo schermo
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Cosa succede quando clicca "Sì"
yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "SPAEVO CHE ERA UN SI!!";
    displayGif.src = "https://i.pinimg.com/originals/88/14/9b/88149b0400750578f4d07d9bc3fb0fee.gif"; // GIF felice
    noBtn.style.display = 'none'; // Nasconde il tasto No
    yesBtn.style.display = 'none'; // Nasconde anche il tasto Sì
});