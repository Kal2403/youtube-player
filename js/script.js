let menuIcon = document.querySelector('.menu');
let sidebar = document.querySelector('.sidebar');

menuIcon.onclick = function () {
    sidebar.classList.toggle('small-sidebar');
}