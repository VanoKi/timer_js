const countDownEl = document.getElementById('countdown')
let time = 0

// setInterval(updateCounDown, 1000)

function updateCounDown(){
  const minutes = Math.floor(time / 60)
  let seconds = time % 60;
  seconds = seconds < 10 ? `0${seconds}` :seconds
  countDownEl.innerHTML = `${minutes}:${seconds}`
  time++
}

const btn = document.querySelector('.start')
btn.addEventListener('click', setInterval(updateCounDown, 1000))