const rebours = document.querySelector(".Compte_rebours");
const etat = document.querySelector(".Etat");
let c = 0;
let s = 80;
let soc;
let so = false;

const On = () => {
  etat.innerHTML = `<p>ON</p>`;
  etat.style.background = "green";
};
const Off = () => {
  etat.innerHTML = `<p>OFF</p>`;
  etat.style.background = "red";
};
const DisplaySoC = () => {
  rebours.innerHTML = `<p>SoC :<br>${s}%</p><p>AC Loads:<br>${c}W</p>`;
};

function readHtml() {
  DisplaySoC();
  if (c > 200) {
    console.log("ok");
  }
  if (!soc || c > 1000) {
    Off();
  } else {
    On();
  }
}
function getNumbers() {
  if (s <= 80) {
    so = false;
  }
  if (s > 99) {
    so = true;
  }
  if (!so) {
    s++;
  } else {
    s--;
  }
  c = Math.floor(Math.random() * 200);

  if (s >= 95) {
    soc = true;
  }
  if (s < 90) {
    soc = false;
  }

  readHtml();
}

setInterval(getNumbers, 300);
