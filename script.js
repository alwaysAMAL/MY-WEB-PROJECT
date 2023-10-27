function showSidebar(){
    const sidebar = document.querySelector('.navbar');
    const navburger = document.querySelector('.nav-burger');
    sidebar.style.display = 'flex';
    navburger.style.visibility = 'hidden';
}
function hideSidebar(){
    const sidebar = document.querySelector('.navbar');
    const navburger = document.querySelector('.nav-burger');
    sidebar.style.display = 'none';
    navburger.style.visibility = 'visible';
}