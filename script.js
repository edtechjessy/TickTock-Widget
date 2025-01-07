// Function to update the CT time clock
function updateCTTime() {
    const ctTimeElement = document.getElementById('ctTime').querySelector('.time');
    const ctTime = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', hour12: false });
    ctTimeElement.textContent = ctTime;
}

// Function to update the São Paulo time clock
function updateSPTime() {
    const spTimeElement = document.getElementById('spTime').querySelector('.time');
    const spTime = new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo', hour12: false });
    spTimeElement.textContent = spTime;
}

// Update the clocks every second
setInterval(function() {
    updateCTTime();
    updateSPTime();
}, 1000);

// Initial call to set the time immediately
updateCTTime();
updateSPTime();
