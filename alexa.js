function aggiorna() {

    const giorniSettimana = [
        "Dom",
        "Lun",
        "Mar",
        "Mer",
        "Gio",
        "Ven",
        "Sab"
      ];

    const d = new Date();
  
    const h = d.getHours().toString().padStart(2, "0");
    const m = d.getMinutes().toString().padStart(2, "0");
  
    const giorno = d.getDate().toString().padStart(2, "0");
    const mese = (d.getMonth() + 1).toString().padStart(2, "0");
    const giornoSettimana = giorniSettimana[d.getDay()];
  
    document.getElementById("ora").textContent = `${h}:${m}`;
    document.getElementById("data").textContent = `${giornoSettimana} ${giorno}/${mese}`;
  }

  function aggiornaSfondo() {
    const url = "https://picsum.photos/1920/1080?random=" + Date.now();
    document.body.style.backgroundImage = `url("${url}")`;
  }
  
  aggiorna();
  aggiornaSfondo();
  setInterval(aggiorna, 1000);
  setInterval(aggiornaSfondo, 30000);
  