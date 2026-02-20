window.onload = function () {
  // ждёт загрузки документа
  var menu = document.getElementById("menu");
  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
};
