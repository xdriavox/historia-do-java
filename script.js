let currentMenu = null;

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    

    if (currentMenu && currentMenu !== menu) /* se um menu estiver aberto e não for oq vc quer abrir ele fechara o aberto */{
        currentMenu.style.display = 'none';
    }


    if (menu.style.display === "block") {
        menu.style.display = "none";
        currentMenu = null;
    } else {
        menu.style.display = "block";
        currentMenu = menu;
    }
}
