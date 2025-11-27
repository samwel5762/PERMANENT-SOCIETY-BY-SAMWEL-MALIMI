// Function to ensure the copyright year is current
function setCopyrightYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Function to handle the CTA button click
function handleCtaClick() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            // Smooth scroll to the Archive section
            document.getElementById('archive').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// Function to update dynamic content
function updateDynamicContent() {
    const statusElement = document.getElementById('contributionStatus');
    if (statusElement) {
        // Simulating a dynamic update from a server/API
        setTimeout(() => {
            statusElement.innerHTML = 'We currently accept submissions on **Open Source Protocols** and **Essential Cultural Texts**. <br> <a href="#">Click here to read the Submission Guidelines.</a>';
        }, 1500);
    }
}
document.getElementById("hamburger").onclick = function() {
    document.getElementById("navLinks").classList.toggle("show");
}
document.getElementById("hamburger").onclick = function() {
    document.getElementById("navLinks").classList.toggle("show");
}
