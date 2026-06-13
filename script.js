// --- JAVÍTOTT VISSZASZÁMLÁLÓ ---
// Megadjuk az esküvő pontos idejét.  (2027. jún. 26. 15:00)
const targetDate = new Date("2027-06-26T15:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const countdownElement = document.getElementById("countdown");

    if (diff <= 0) {
        countdownElement.innerText = "Elérkezett a Nagy Nap!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // Óra és perc hozzáadása, hogy a főoldalon folyamatosan ketyegjen
    countdownElement.innerText = `${days} nap • ${hours} óra • ${minutes} perc`;
}

// Azonnal lefuttatjuk, aztán percenként frissítjük az oldalon
updateCountdown();
setInterval(updateCountdown, 1000 * 60);

// --- GÖRDÜLŐ (SCROLL) ANIMÁCIÓK ---
// Szépen úsznak be a szövegek és képek
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.15 }); 

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});
