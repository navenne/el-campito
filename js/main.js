/**
 * @author Laura Hidalgo Rivera
 */

// document.addEventListener("DOMContentLoaded", function () {
//     console.log(document.getElementById("path").getTotalLength());
// })

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("div")
    .addEventListener("click", function () {
      document.body.className = "fade_out";
      setTimeout(() => {
        window.location.assign("html/search_page.html");
      }, 400);
    });

  document
    .querySelector("span")
    .addEventListener("click", function () {
      document.body.className = "fade_out";
      setTimeout(() => {
        window.location.assign("html/search_page.html");
      }, 400);
    });
});
