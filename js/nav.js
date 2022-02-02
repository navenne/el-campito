/**
 * @author Laura Hidalgo Rivera
 */

{
  document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementsByTagName("nav")[0];
    document
      .getElementsByClassName("menu")[0]
      .addEventListener("click", function () {
        nav.style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      });

    document.getElementById("close").addEventListener("click", function () {
      nav.style.width = "0";
      document.body.style.backgroundColor = "white";
    });
  });
}
