document.addEventListener('DOMContentLoaded', () => {
    const surpriseBtn = document.getElementById('surprise-btn');
    const trickSection = document.getElementById('trick-section');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const loveMessage = document.getElementById('love-message');

    // Subtle falling snow — now works with scrolling
    const snowContainer = document.querySelector('.snow-container');
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.textContent = '❄';
        snowflake.style.position = 'absolute';
        snowflake.style.fontSize = Math.random() * 15 + 10 + 'px';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.top = '-20px'; /* Start above viewport */
        snowflake.style.opacity = Math.random() * 0.4 + 0.3;
        snowflake.style.animationDuration = Math.random() * 8 + 10 + 's';
        snowflake.style.animation = 'fall linear forwards'; /* forwards so it stays at bottom */
        snowContainer.appendChild(snowflake);

        setTimeout(() => snowflake.remove(), 18000);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }
    `;
    document.head.appendChild(style);

    setInterval(createSnowflake, 600);

    // Interactions
    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', () => {
            surpriseBtn.classList.add('hidden');
            trickSection.classList.remove('hidden');
            confetti({ particleCount: 80, spread: 60, colors: ['#ffd700', '#ffffff', '#c0c0c0'] });
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            trickSection.classList.add('hidden');
            loveMessage.classList.remove('hidden');
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 }, colors: ['#ffd700', '#ffffff'] });
        });
    }

    if (noBtn) {
        noBtn.addEventListener('mouseover', () => {
            noBtn.style.transition = 'all 0.3s';
            noBtn.style.left = Math.random() * 100 - 50 + 'px';
            noBtn.style.top = Math.random() * 60 - 30 + 'px';
            setTimeout(() => {
                noBtn.style.left = '0';
                noBtn.style.top = '0';
            }, 600);
        });
    }
});
