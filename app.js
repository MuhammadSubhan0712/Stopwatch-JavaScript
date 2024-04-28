// Declaring Variables globally
const display = document.querySelector("#display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

// ----------------------------------------------------------

// Watch start function
function start() {
  if (!isrunning) {
    starttime = Date.now() - elapsedtime;
    timer = setInterval(update, 10);
    isrunning = true;
  }
}

// ----------------------------------------------------------

// Watch stop function

function stop() {
  if (isrunning) {
    clearInterval(timer);
    elapsedtime = Date.now() - starttime;
    isrunning = false;
  }
}

// ----------------------------------------------------------

// Watch reset function

function reset() {
  clearInterval(timer);
  let starttime = 0;
  let elapsedtime = 0;
  let isrunning = false;
  display.innerHTML = "00:00:00:00";
}

// ----------------------------------------------------------

// Watch update function

function update() {
  const currenttime = Date.now();
  elapsedtime = currenttime - starttime;

  //   declaring variables with method
  let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
  let min = Math.floor((elapsedtime / (1000 * 60)) % 60);
  let sec = Math.floor((elapsedtime / 1000) % 60);
  let millisec = Math.floor((elapsedtime % 1000) / 10);

  //   Reassigning values using string method to make watch (00:00) like
  hours = String(hours).padStart(2, "0");
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  millisec = String(millisec).padStart(2, "0");

  display.innerHTML = `${hours}:${min}:${sec}:${millisec}`;
}
