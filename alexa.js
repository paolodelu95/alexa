function aggiorna() {

  const giorniSettimana = [
    "DOM",
    "LUN",
    "MAR",
    "MER",
    "GIO",
    "VEN",
    "SAB"
  ];

  const mesi = [
    "GEN",
    "FEB",
    "MAR",
    "APR",
    "MAG",
    "GIU",
    "LUG",
    "AGO",
    "SET",
    "OTT",
    "NOV",
    "DIC"
  ];

  const d = new Date();

  const h = d.getHours().toString().padStart(2, "0");
  const m = d.getMinutes().toString().padStart(2, "0");

  const giorno = d.getDate().toString().padStart(2, "0");
  const mese = (d.getMonth() + 1).toString().padStart(2, "0");
  const giornoSettimana = giorniSettimana[d.getDay()];
  const nomeMese = mesi[d.getMonth()];


  document.getElementById("ora").textContent = `${h}:${m}`;
  document.getElementById("data").textContent = `${giornoSettimana} ${giorno} ${nomeMese}`;
}

function aggiornaSfondo() {
  const bg = document.getElementById("bg");

  // fade-out
  bg.style.opacity = 0;

  setTimeout(() => {
    const url = "https://picsum.photos/1920/1080?random=" + Date.now();
    bg.style.backgroundImage = `url("${url}")`;

    // fade-in
    bg.style.opacity = 1;
  }, 1000); 
}

//ascolto quale bottone viene cliccato e implemento le funzioni
document.querySelectorAll("button[type='menu']").forEach(button => {
  button.addEventListener("click", () => {
    const icon = button.querySelector("i");
    if (icon.classList.contains("fa-stopwatch")) {
      document.getElementById("dialog-timer").showModal();
    } else if (icon.classList.contains("fa-music")) {
      document.getElementById("dialog-musica").showModal();
    } else if (icon.classList.contains("fa-cog")) {
      document.getElementById("dialog-impostazioni").showModal();
    }
  });
});

document.getElementById("dialog-timer").addEventListener("click", (event) => {
  if (document.getElementById("hoursUp").contains(event.target)) {
    const hoursInput = document.getElementById("hour-display");
    hoursInput.textContent = parseInt(hoursInput.textContent) + 1;
    hoursInput.textContent = Math.min(99, parseInt(hoursInput.textContent));
  } else if (document.getElementById("hoursDown").contains(event.target)) {
    const hoursInput = document.getElementById("hour-display");
    hoursInput.textContent = Math.max(0, parseInt(hoursInput.textContent) - 1);
  } else if (document.getElementById("minutesUp").contains(event.target)) {
    const minutesInput = document.getElementById("minute-display");
    minutesInput.textContent = Math.min(59, parseInt(minutesInput.textContent) + 1);
  } else if (document.getElementById("minutesDown").contains(event.target)) {
    const minutesInput = document.getElementById("minute-display");
    minutesInput.textContent = Math.max(0, parseInt(minutesInput.textContent) - 1);
  } else if (document.getElementById("secondsUp").contains(event.target)) {
    const secondsInput = document.getElementById("second-display");
    secondsInput.textContent = Math.min(59, parseInt(secondsInput.textContent) + 1);
  } else if (document.getElementById("secondsDown").contains(event.target)) {
    const secondsInput = document.getElementById("second-display");
    secondsInput.textContent = Math.max(0, parseInt(secondsInput.textContent) - 1);
  }
});



aggiorna();
aggiornaSfondo();
setInterval(aggiorna, 1000);
setInterval(aggiornaSfondo, 30000);
