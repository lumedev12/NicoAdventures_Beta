const video = document.getElementById("introVideo");
const nextBtn = document.getElementById("nextBtn");

// Acelera o vídeo
video.playbackRate = 1.25;

video.onended = function(){
    nextBtn.style.display = "inline-block";
};

function next(){
    window.location.href = "/fases/Fase_beta/ratinho_beta";
}