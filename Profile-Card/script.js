function showTime() {
  const timeInMs = Date.now();
  document.querySelector('[data-testid="test-user-time"]').textContent = `Current Time: ${timeInMs} ms`;
}

showTime();
setInterval(showTime, 1000);