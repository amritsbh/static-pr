document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay (e.g., 2 seconds) to show the loading animation
    setTimeout(function () {
        hideLoadingScreen();
    }, 700); // Adjust the delay to match your intro duration
});

function hideLoadingScreen() {
    var loaderContainer = document.querySelector(".loader-container");
    var contentContainer = document.querySelector(".content-container");

    // Apply fade-out animation to the loader container
    loaderContainer.style.opacity = "0";

    setTimeout(function () {
        // Hide the loader container and show the content container with fade-in animation
        loaderContainer.style.display = "none";
        contentContainer.style.display = "block";

        // Apply fade-in animation to the content container
        contentContainer.style.opacity = "1";
    }, 500); // Adjust this delay to match your transition duration
}

document.addEventListener("DOMContentLoaded", function () {
    var slogans = [
        "Turning Pixels into Profits",
        "Connecting Brands, Creating Fans",
        "Driving Digital Excellence",
        "Digital Mastery, Real ROI",
        "Elevate Your Online Presence",
        "Transforming Your Brand Digitally",
        "Crafting Your Digital Destiny",
        "Your Success, Our Strategy",
        "Driving Growth in the Digital Age"
    ];
    var sloganIndex = 0;
    var typingContent = document.getElementById("typing-content");

    function typeSlogan() {
        var slogan = slogans[sloganIndex];
        var sloganLength = slogan.length;
        var currentLength = 0;
        var isTyping = true;

        function updateContent() {
            typingContent.textContent = slogan.slice(0, currentLength);

            if (isTyping) {
                currentLength++;
                if (currentLength <= sloganLength) {
                    setTimeout(updateContent, 10); // 1-second typing
                } else {
                    isTyping = false;
                    setTimeout(function() {
                        setTimeout(updateContent, 30); // 3-second break after typing
                    }, 1000); // 1-second break before erasing
                }
            } else {
                currentLength--;
                if (currentLength >= 0) {
                    setTimeout(updateContent, 10); // 1-second erasing
                } else {
                    isTyping = true;
                    sloganIndex = (sloganIndex + 1) % slogans.length;
                    setTimeout(typeSlogan, 100); // 1-second break between slogans
                }
            }
        }

        updateContent();
    }

    typeSlogan();
});
