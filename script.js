const countDownEl = document.getElementById('countdown')
let time = 0
    timeRun = false
    intervalID = 0;

// setInterval(updateCounDown, 1000)

function updateCountDown(){
  const minutes = Math.floor(time / 60)
  let seconds = time % 60;
  seconds = seconds < 10 ? `0${seconds}` :seconds
  countDownEl.innerHTML = `${minutes}:${seconds}`
  time++
}

function start(){
  if (!timeRun) {
    clearInterval(intervalID)
    time = 0
    intervalID = setInterval(updateCountDown, 1000)
    timeRun = true
  }else{
    clearInterval(intervalID)
    timeRun = false
  }
}

const btn = document.querySelector('.start')
btn.addEventListener('click', start)