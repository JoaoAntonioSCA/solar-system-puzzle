const link = document.getElementById('link');
        const audio = document.getElementById('audio');
        const fadeOutDuration = 3000; // Duração do fade-out em milissegundos

        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('fade-out');

            // Fade-out do áudio
            const fadeAudio = setInterval(() => {
                if (audio.volume > 0.01) {
                    audio.volume -= 0.01;
                } else {
                    audio.volume = 0;
                    clearInterval(fadeAudio);
                }
            }, fadeOutDuration / 300);

            // Aguarda o fade-out antes de ir para a próxima página
            setTimeout(() => {
                window.location.href = link.href;
            }, fadeOutDuration);
        });