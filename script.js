// Star Generation
const starField = document.getElementById('starField');
for(let i=0; i<150; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.setProperty('--d', (Math.random() * 3 + 2) + 's');
    starField.appendChild(star);
}

// Lanterns
setInterval(() => {
    const l = document.createElement('div');
    l.className = 'lantern';
    l.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(l);
    setTimeout(() => l.remove(), 8000);
}, 2500);

// Navigation
function go(n) {
    const shutter = document.getElementById('shutter');
    shutter.classList.add('active');
    
    setTimeout(() => {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = (n === 'Hug') ? document.getElementById('pageHug') : document.getElementById('page' + n);
        target.classList.add('active');
        
        if(n === 2) startTypewriter();
        if(n === 4) document.getElementById('bdaySong').play();
        
        shutter.classList.remove('active');
    }, 450);
}

// Typewriter
const text = "Dearest N,\n\nIn a world of billions, you’re the one I’d choose for every adventure. Thank you for the laughs, the treks, and the magic.\n\nHappy Birthday! ❤️";
let idx = 0;
function startTypewriter() {
    if (idx < text.length) {
        document.getElementById('typewriter').innerHTML += text.charAt(idx) === '\n' ? '<br>' : text.charAt(idx);
        idx++;
        setTimeout(startTypewriter, 45);
    }
}

// Memory Jar
const notes = [
    "Our Life Path numbers brought us here, but your laugh is what keeps me here.",
    "That sunrise trek we did.",
    "The way you handle chaos with a smile.",
    "Our late-night coffee talks.",
    "Your chaotic energy (it's my favorite).",
    "How lucky I am to know you."
];

function popJar() {
    const note = document.createElement('div');
    note.style.cssText = `position:fixed; background:#fff9c4; padding:15px; border-radius:10px; font-family:Caveat; color:#333; z-index:100; box-shadow:0 10px 20px rgba(0,0,0,0.3); width:180px; transform: rotate(${Math.random()*20-10}deg);`;
    note.innerHTML = notes[Math.floor(Math.random()*notes.length)];
    note.style.left = (Math.random() * 60 + 10) + '%';
    note.style.top = (Math.random() * 50 + 20) + '%';
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 4000);
}

// Countdown
let timer;
function startCountdown() {
    clearInterval(timer);
    const dateInput = document.getElementById('adventureDate').value;
    const target = new Date(dateInput).getTime();
    
    timer = setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;
        if (diff < 0) return clearInterval(timer);

        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('mins').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('secs').innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);
}