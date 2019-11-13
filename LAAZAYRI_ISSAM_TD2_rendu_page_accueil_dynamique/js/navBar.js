var section = document.getElementById("monTitre");
var sectionDeux = document.getElementById('maSectionDeux');

window.onload = function (){
  document.getElementById("monTitre").classList.add("fade-in");
  console.log("test");

};

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  
  myFunction()
  var scroll = window.scrollY;


  if(scroll >= 15){
    
    navbar.classList.add("fade-out");
    navbar.classList.remove("fade-in");
    setTimeout(() =>{
      document.getElementById("navbar").style.display = "none";
    }, 2000);
  }else{
    setTimeout(() =>{
      document.getElementById("navbar").style.display = "block";
    }, 2000);
    navbar.classList.add("fade-in");
    navbar.classList.remove("fade-out");

  }


  if(scroll > 750){
        
    sectionDeux.classList.add("fade-in");
    sectionDeux.style.display = "flex";
}

};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


var visible = false;
function myFunctions(){

  

  if(visible == false){
    document.getElementById('monMenu').classList.add("active");
    document.getElementById('monMenu').style.left ="0%";
    visible = true;
  }else if(visible == true){
    document.getElementById('monMenu').classList.remove("active");
    document.getElementById('monMenu').style.left ="-100%";
    visible = false;
  }


  
}