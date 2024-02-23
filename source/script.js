document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navList = document.getElementById('navList');

    menuIcon.addEventListener('click', function () {
        if (navList.style.maxHeight) {
            navList.style.maxHeight = null;
        } else {
            navList.style.maxHeight = navList.scrollHeight + "px";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const imageOverlayH3 = document.querySelector('.image-overlay h3');

    function updateTextContent() {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth <= 900) {
            imageOverlayH3.textContent = "USŁUGI REMONTOWO-BUDOWLANE\nWYPOŻYCZALNIA SPRZĘTU BUDOWLANEGO";
            imageOverlayH3.style.whiteSpace = "pre-line";
        } else {
            imageOverlayH3.textContent = "USŁUGI REMONTOWO-BUDOWLANE | WYPOŻYCZALNIA SPRZĘTU BUDOWLANEGO";
            imageOverlayH3.style.whiteSpace = "normal";
        }
    }

    updateTextContent();
    window.addEventListener('resize', updateTextContent);
});