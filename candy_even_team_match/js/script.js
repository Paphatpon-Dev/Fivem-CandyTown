let totalSeconds = 5 * 60; // ⏳ ตั้งเวลา เช่น 5 นาที

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");

  if (totalSeconds <= 0) {
    clearInterval(timer);
    return;
  }

  totalSeconds--;
}

updateTimer();
const timer = setInterval(updateTimer, 1000);