document.addEventListener('DOMContentLoaded', () => {
    const spanViolin = document.getElementById('ipa-javi');
    const audio = document.getElementById('audio-javi');

    spanViolin.addEventListener('mouseover', () => {
        audio.play();
    });

    spanViolin.addEventListener('mouseout', () => {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
    });
});