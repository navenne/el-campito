/**
 * @author Laura Hidalgo Rivera
 */

{
  document.addEventListener("DOMContentLoaded", function () {
    const filters = document.getElementById("filters");
    let isFiltersOpen = false;
      document
      .getElementById("open_filters")
      .addEventListener("click", function () {
        if (isFiltersOpen) {
            isFiltersOpen = false;
            filters.style.height = "0";
        } else {
            isFiltersOpen = true;
            filters.style.height = "125px";
        }
      });
  });
}
