window.addEventListener('load', () => {
    initializeYearFooter();
});

function initializeYearFooter() {
    const curretDate = new Date();
    document.getElementById("currentYear").innerText = curretDate.getFullYear();
}