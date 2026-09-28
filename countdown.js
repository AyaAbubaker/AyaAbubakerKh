const graduationDate = new Date("2026-10-04T10:45:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();
  const distance = graduationDate - now;

  if (distance <= 0) {
    setAll("00", "00", "00", "00");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  setAll(days, hours, minutes, seconds);

}


function setAll(d, h, m, s) {

  document.getElementById("cd-days").textContent =
    String(d).padStart(2,"0");

  document.getElementById("cd-hours").textContent =
    String(h).padStart(2,"0");

  document.getElementById("cd-mins").textContent =
    String(m).padStart(2,"0");

  document.getElementById("cd-secs").textContent =
    String(s).padStart(2,"0");

}


window.addEventListener("load", () => {

  updateCountdown();

  document.querySelector(".countdown-grid")
    .classList.add("ready");

  setInterval(updateCountdown,1000);

});