/**
 * @author Laura Hidalgo Rivera
 */

{
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector("input[type='submit']").addEventListener("click", function(e) {
            e.preventDefault();
            window.location.assign("filter_page.html");
        });
    })
}