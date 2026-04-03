const NEXT_BUTTON_ID = "sotam-next-phase-button";
const NEXT_BUTTON_CONTAINER_ID = "sotam-next-phase-button-container";

function createNextPhaseButton() {
    if (document.getElementById(NEXT_BUTTON_CONTAINER_ID))
        return;

    const container = document.createElement("div");
    container.id = NEXT_BUTTON_CONTAINER_ID;
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.position = "fixed";
    container.style.right = "24px";
    container.style.bottom = "24px";
    container.style.zIndex = "2147483647";
    container.style.pointerEvents = "auto";
    container.style.fontFamily = "Arial, sans-serif";

    const button = document.createElement("button");
    button.id = NEXT_BUTTON_ID;
    button.type = "button";
    button.textContent = "Next";
    button.style.cursor = "pointer";
    button.style.padding = "14px 22px";
    button.style.fontSize = "16px";
    button.style.fontWeight = "600";
    button.style.border = "none";
    button.style.borderRadius = "12px";
    button.style.background = "#1a73e8";
    button.style.color = "#fff";
    button.style.boxShadow = "0 10px 24px rgba(0, 0, 0, 0.2)";
    button.style.transition = "transform 0.15s ease, opacity 0.2s ease";

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-1px)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });
    button.addEventListener("click", () => {
        window.location.href = "/pages/desenvolvimento-corredor.html";
    });

    container.appendChild(button);
    document.body.appendChild(container);
}

function showNextPhaseButton() {
    createNextPhaseButton();
    const container = document.getElementById(NEXT_BUTTON_CONTAINER_ID);
    if (container) {
        container.style.display = "flex";
    }
}

function hideNextPhaseButton() {
    const container = document.getElementById(NEXT_BUTTON_CONTAINER_ID);
    if (container) {
        container.style.display = "none";
    }
}

window.showSotamNextButton = showNextPhaseButton;
window.hideSotamNextButton = hideNextPhaseButton;

window.addEventListener("DOMContentLoaded", () => {
    createNextPhaseButton();
});
