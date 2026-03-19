const featuredVideo = document.querySelector(".featured-video");

if (featuredVideo) {
  const tryAutoplay = () => {
    const playAttempt = featuredVideo.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {
        featuredVideo.controls = true;
      });
    }
  };

  if (featuredVideo.readyState >= 2) {
    tryAutoplay();
  } else {
    featuredVideo.addEventListener("canplay", tryAutoplay, { once: true });
  }
}
