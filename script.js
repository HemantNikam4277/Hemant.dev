// dorkmode 
function darkmode(){
    let setTheme=document.body;
    setTheme.classList.toggle("darkmode");
    let mode = document.getElementById("mode");
    if(mode.className == "fa-solid fa-moon"){
        mode.className = "fa-solid fa-sun"
    }else if(mode.className == "fa-solid fa-sun"){
        mode.className = "fa-solid fa-moon"
    }
}
// scroll top 
let scrolltop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrolltop.classList.toggle('active', window.scrollY > 0);
});

const more = document.getElementById('more')
const btn_seemore = document.getElementById('seemore')
const btn_seeless = document.getElementById('seeless')

function seemore() {
    more.style.display= "grid"
    btn_seeless.style.display = 'block'
    btn_seemore.style.display = 'none'
}
function seeless() {
    more.style.display= "none"
    btn_seeless.style.display = 'none'
    btn_seemore.style.display = 'block'
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
