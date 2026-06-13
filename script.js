// COUNTDOWN
const targetDate = new Date("2027-06-26T00:00:00").getTime();

function updateCountdown(){
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("countdown").innerText =
        "Még " + days + " nap van hátra";
}

updateCountdown();
setInterval(updateCountdown, 1000*60*60);

// SCROLL ANIMATION
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => observer.observe(el));
