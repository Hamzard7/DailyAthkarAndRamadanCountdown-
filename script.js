
document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const newYearElement = document.getElementById('new-year-timer');

    function updateCountdown(targetDate, element) {
        const now = new Date();
        const diff = targetDate - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            element.textContent = 'The event has started!';
        }
    }

    // Countdown to New Year 2025
    const newYearDate = new Date('January 1, 2025 00:00:00');
    setInterval(() => updateCountdown(newYearDate, newYearElement), 1000);

    // Countdown to Ramadan 2025
    const ramadanDate = new Date('February 28, 2025 00:00:00');
    setInterval(() => updateCountdown(ramadanDate, timerElement), 1000);
});
