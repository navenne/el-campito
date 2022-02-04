/**
 * @author Laura Hidalgo Rivera
 */

{
  document.addEventListener("DOMContentLoaded", function () {
    const filters = document.getElementById("filters");
    const map = document.querySelector("aside img");
    let isFiltersOpen = false;
    let isMapOpen = map.style.display == "none";
      document
      .getElementById("open_filters")
      .addEventListener("click", function () {
        if (isFiltersOpen) {
            isFiltersOpen = false;
            filters.style.height = "0";
            filters.style.paddingTop = "0"
        } else {
            isFiltersOpen = true;
            filters.style.height = "145px";
            filters.style.paddingTop = "20px"
        }
      });
      document
      .getElementById("open_map")
      .addEventListener("click", function () {
        if (isMapOpen) {
          isMapOpen = false;
          map.className = "fade_out";
          setTimeout(() => {
            map.style.display = "none";
          }, 500);
      } else {
        isMapOpen = true;
          map.style.display = "block";
          map.className = "fade_in";
      }
      });
  });
}
