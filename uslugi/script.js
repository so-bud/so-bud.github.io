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