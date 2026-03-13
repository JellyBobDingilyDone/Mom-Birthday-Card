const openButton = document.getElementById("open-video-btn");
const closeButton = document.getElementById("close-video-btn");
const modal = document.getElementById("video-modal");
const backdrop = document.getElementById("video-backdrop");
const video = document.getElementById("birthday-video");

function openVideoModal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      // Some browsers block autoplay with sound after modal open.
      // Controls stay visible, so user can tap play manually.
    });
  }
}

function closeVideoModal() {
  video.pause();
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openButton.addEventListener("click", openVideoModal);
closeButton.addEventListener("click", closeVideoModal);
backdrop.addEventListener("click", closeVideoModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeVideoModal();
  }
});
