document.addEventListener("DOMContentLoaded", function() {
    var eventsBar = document.querySelector("#nav-links li");
    eventsBar.addEventListener("click", function() {
        var sublist = this.querySelector("ul");
        if (sublist) {
            sublist.style.display = (sublist.style.display === "block") ? "none" : "block";
        }
    });
});


const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function() {
  localStorage.setItem('toggleState', toggle.checked);
});