const febHolidays = [
    "Dear Anchal Mausi,",
    "First of all, Itna gussa kyu?",
    "You're a good girl",
    "You are an elder",
    "And of course...",
    "Must forgive me.😁",
    "I know i am annoying",
    "Still you should forgive me🥰",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive.",
    "In one word, you're just perfect.😍",
    "Anchal- perfect name",
    "Itni mehnat karke banaya hai.",
    "Ab maan bhi jao🥺",
    "You are the special 😉",
    "I don't want you to be angry",
    "And trust me I didn't do it intentionally",
    "Itni tareef ki hai.",
    "Ab maan bhi jao yarr 😅",
    "Tabiyat kharab thi isliye nahi apaya online",
    "Itna bhi naraz nahi hote",
    "Maaf karna seekho",
    "Mai chota baccha hu abhi",
    "Also thoda khana idhar bhi bhej diya karo",
    "Akele akele sab kha jaati ho",
    "Chalo ab gussa bhul jao",
    "Aapne abhi tak kurkure bhi nahi khilaye",
    "Aaj subeh se kya kiya?",
    "Sorry once again buddy",
    "Iss mehnat ka fal dedo aur maaf kardo🥴",
    "Online bhi ajana"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  