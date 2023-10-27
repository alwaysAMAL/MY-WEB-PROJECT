function showSidebar(){
    const sidebar = document.querySelector('.navbar');
    const navburger = document.querySelector('.nav-burger');
    sidebar.style.transform = 'translateY(0px)';
    navburger.style.visibility = 'hidden';
}
function hideSidebar(){
    const sidebar = document.querySelector('.navbar');
    const navburger = document.querySelector('.nav-burger');
    sidebar.style.transform = 'translateY(-400px)';
    navburger.style.visibility = 'visible';
}