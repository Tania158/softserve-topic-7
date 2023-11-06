function updateWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const sizeText = `Window width: ${width}px, height: ${height}px`;

  const sizeElement = document.getElementById("windowSize");
  sizeElement.textContent = sizeText;
}

window.addEventListener("resize", updateWindowSize);
window.addEventListener("DOMContentLoaded", updateWindowSize);
