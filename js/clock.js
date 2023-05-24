const clockContainer = document.querySelector('.header__clock');

function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString('en-GB', { timeZone: 'UTC' });
}

setInterval(updateClock, 1000);

updateClock();