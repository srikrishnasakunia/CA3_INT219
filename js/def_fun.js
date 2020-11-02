var modal = document.getElementById("booking-form");
var btn = document.getElementById("btn btn-primary btn-lg");
var span = document.getElementById();

btn.onclick = function(){
    modal.style.display = "block";
}
window.onclick = function(event){
    if(event.target == modal) {
        modal.style.display = "none";
    }
}