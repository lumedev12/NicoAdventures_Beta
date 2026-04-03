const video = document.getElementById("introVideo");
const nextBtn = document.getElementById("nextBtn");
const skipBtn = document.getElementById("skipBtn");

// Acelera o vídeo
video.playbackRate = 1.25;

video.onended = function(){
    skipBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
};

function skipVideo(){
    video.currentTime = video.duration;
    nextBtn.style.display = "inline-block";
    skipBtn.style.display = "none";
}

function next(){
    window.location.href = "/sotam/"
}

function backToMenu(){
    window.location.href = "/"
}