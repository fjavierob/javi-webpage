document.addEventListener('DOMContentLoaded', () => {
    const audibleElement = document.getElementById('ipa-javi');
    const audio = document.getElementById('audio-javi');

    audibleElement.addEventListener('mouseover', () => {
        audio.play();
    });

    audibleElement.addEventListener('mouseout', () => {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
    });
});