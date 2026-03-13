async function loadFamily() {
  let data = {
    family: [],
  };

  try {
    const response = await fetch("data/family.json");
    data = await response.json();
  } catch {}

  const introText = document.getElementById("intro-text");
  const container = document.getElementById("family-container");
  const videoButton = document.getElementById("open-video-btn");

  container.innerHTML = "";

  introText.classList.remove("hidden");

  setTimeout(() => {
    introText.classList.add("show");
  }, 150);

  setTimeout(() => {
    data.family.forEach((member, index) => {
      const card = document.createElement("div");
      card.className = "member";

      card.innerHTML = `
<div class="name">${member.name}</div>
<div class="role">${member.role}</div>
<div class="member-message">${member.message}</div>
`;

      container.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 900);
    });

    const totalTime = data.family.length * 900 + 900;

    setTimeout(() => {
      videoButton.classList.remove("hidden");
    }, totalTime);
  }, 1800);
}

loadFamily();
