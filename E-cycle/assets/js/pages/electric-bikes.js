    document.addEventListener('DOMContentLoaded', function() {
            const videoTrigger = document.getElementById('open-video-trigger');
            const videoModal = document.getElementById('video-modal');
            const closeVideoBtn = document.getElementById('close-video-modal');
            const videoPlayer = document.getElementById('dummy-video-player');

            if (videoTrigger && videoModal && closeVideoBtn) {
                videoTrigger.addEventListener('click', function() {
                    videoModal.classList.add('active');
                    if (videoPlayer) {
                        videoPlayer.play().catch(e => console.log('Autoplay prevented', e));
                    }
                });

                function closeModal() {
                    videoModal.classList.remove('active');
                    if (videoPlayer) {
                        videoPlayer.pause();
                        videoPlayer.currentTime = 0;
                    }
                }

                closeVideoBtn.addEventListener('click', closeModal);

                videoModal.addEventListener('click', function(e) {
                    if (e.target === videoModal) {
                        closeModal();
                    }
                });

                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                        closeModal();
                    }
                });
            }
        });