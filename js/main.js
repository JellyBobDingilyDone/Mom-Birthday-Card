async function loadFamily() {
  let data = {
    family: [],
  };
  try {
    const response = await fetch("data/family.json");
    data = await response.json();
  } catch {}

  const container = document.getElementById("family-container");
  container.innerHTML = "";

  data.family.forEach((member) => {
    const card = document.createElement("div");
    card.className = "member";

    card.innerHTML = `
      <div class="name">${member.name}</div>
      <div class="role">${member.role}</div>
      <div class="member-message">${member.message}</div>
    `;

    container.appendChild(card);
  });
}

loadFamily().catch((error) => {
  console.error("Failed to load family data:", error);
});
