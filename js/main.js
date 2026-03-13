async function loadFamily() {
  let data = {
    family: [
      {
        name: "Любимый",
        role: "Папа",
        message:
          "Моя любимая жена!\nПоздравить я хочу тебя,\nТы с каждым годом все прекрасней,\nЛюбовь моя к тебе не гаснет!\nЖелаю я эмоций ярких,\nОни важней любых подарков,\nТепла и солнечного света,\nМоей любовью будь согрета,\nЗдоровья, милая моя,\nЧтобы росла наша семья,\nИ обойди хоть полстраны,\nЧудесней в мире нет жены!",
      },
      {
        name: "Артём",
        role: "Сын",
        message:
          "Моя мамочка родная,\nС днем рождения тебя!\nУлыбайся, дорогая.\nБереги, прошу, себя.\n\nПожелать хочу здоровья,\nСчастья, силы красоты!\nПусть глаза твои не плачут.\nИ поменьше суеты!\n\nБудь всегда такой красивой,\nСамой нежной и родной!\nОбойдут тебя пусть беды,\nЗимний ветер, летний зной!",
      },
      {
        name: "Оля",
        role: "Невестка",
        message:
          "Поздравляю Вас с Днём Рождения! Желаю Вам быть счастливой, чтобы Ваши родные окружали Вас заботой, теплом и любовью!",
      },
      {
        name: "Соня",
        role: "Дочь",
        message: "Спасибо тебе за поддержку, доброту и бесконечную любовь.",
      },
      {
        name: "Алика",
        role: "Сын",
        message:
          "Мама с днем рождения, мы поздравляем тебя всей семьёй мы желаем тебе счастье, любви, здоровья и много много всего что бы ты не в чём не нуждалась мы тебя очень пре-очень любим с днем рождения!❤️",
      },
    ],
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

  const appearTimeout = 2200;

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
      }, index * appearTimeout);
    });

    const totalTime = data.family.length * appearTimeout + appearTimeout / 2;

    setTimeout(() => {
      videoButton.classList.remove("hidden");
    }, totalTime);
  }, 1800);
}

loadFamily();
