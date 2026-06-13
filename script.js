// --- ELEGÁNS VISSZASZÁMLÁLÓ ---
// Beállítva az esküvő és a szertartás pontos időpontjára (2027.06.26. 16:00)
const targetDate = new Date("2027-06-26T16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const countdownElement = document.getElementById("countdown");

    // Ha az időpont már elmúlt
    if (diff <= 0) {
        countdownElement.innerText = "Elérkezett a Nagy Nap!";
        return;
    }

    // Idő kiszámítása
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // Megjelenítés formázása
    countdownElement.innerText = `${days} nap • ${hours} óra • ${minutes} perc`;
}

// Azonnali futtatás betöltéskor, majd frissítés percenként
updateCountdown();
setInterval(updateCountdown, 1000 * 60);


// --- KIFINOMULT GÖRGETÉS (SCROLL) ANIMÁCIÓ ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Akkor indul az animáció, ha az elem 15%-a már látszik a képernyőn
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Hozzáadja a 'show' classt, ami elindítja a CSS animációt
            entry.target.classList.add('show');
            
            // Miután megjelent, levesszük róla a figyelőt, 
            // így nem fog folyamatosan újraanimálódni fel-le görgetéskor bevillanva
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Megkeressük az összes '.reveal' osztályú elemet, és rájuk tesszük az observert
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});
