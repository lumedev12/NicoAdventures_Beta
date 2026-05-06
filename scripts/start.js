function startGame() {
  const btn = document.getElementById("startBtn");
  const loading = document.getElementById("loadingContainer");
  const progress = document.getElementById("loadingProgress");

  // Esconde botão
  btn.style.display = "none";

  // Mostra loading
  loading.style.display = "block";

  let width = 0;

  const interval = setInterval(() => {
    width += Math.random() * 12;

    if (width >= 100) {
      width = 100;
      clearInterval(interval);

      setTimeout(() => {
        window.location.href = "pages/video.html";
      }, 500);
    }

    progress.style.width = width + "%";
  }, 200);
}

/* SUAS OUTRAS FUNÇÕES (mantidas) */

function corredornext() {
  window.location.href = "/pages/desenvolvimento-cozinha.html";
}

function cozinharnext() {
  window.location.href = "/pages/custscene2_preBossFight.html";
}