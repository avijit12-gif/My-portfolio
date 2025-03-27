// EmailJS Initialization
(function() {
    emailjs.init("MbGpTe6TvSZMKDVsx"); // Public Key
})();

// Function to handle tab switching
function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active-tab");
    }
    let activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add("active-tab");
    }
}

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm("service_pgzjedx", "template_y56y33u", this)
        .then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset(); // Clear form after success
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
});
