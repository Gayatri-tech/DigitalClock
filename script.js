let hours = document.querySelector(".hTime");
let minutes = document.querySelector(".mTime");
let seconds = document.querySelector(".sTime");
setInterval(() => {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  if (h < 10) {
    hours.innerHTML = `0${h}`;
  } else {
    hours.innerHTML = h;
  }
  if (m < 10) {
    minutes.innerHTML = `0${m}`;
  } else {
    minutes.innerHTML = m;
  }
  if (s < 10) {
    seconds.innerHTML = `0${s}`;
  } else {
    seconds.innerHTML = s;
  }
}, 1000);
