
var sectionDeux = document.getElementById('maSectionDeux');





/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
var mots = new Array('Pour', 'la', 'horde', 'non!');

var pointeur = 0;

function ChangerMot(){
  document.getElementById("mots").innerHTML ="&nbsp;" + mots[pointeur];

  if(pointeur < mots.length - 1){
    pointeur++;
  }else{
    pointeur = 0;
  }
  setTimeout("ChangerMot()", 2000)
}

// Charge la fonction
window.onload = function(){
  ChangerMot();
}




/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Un tableau qui va contenir toutes tes images.

function myDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  
  var navbar = document.getElementById("navbar");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  
  myFunction()
  var scroll = window.scrollY;

  if(scroll >= 15){
    
    navbar.classList.add("fade-out");
    
    
  }else{
    navbar.classList.add("fade-in");
    navbar.classList.remove("fade-out");
  }


  if(scroll > 650){
        
    sectionDeux.classList.add("fade-in");
    sectionDeux.style.display = "flex";
    document.getElementById("anim").classList.add("animGauche");
    document.getElementById("anim2").classList.add("animDroite");
    document.getElementById("monImage").classList.add("animTop");
}

};



var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var contenu = document.getElementById("container");

var visible = false;
function myFunctions(){

  

  if(visible == false){
    document.getElementById('monMenu').classList.add("active");
    document.getElementById('monMenu').style.left ="0%";
    document.getElementById("body").style.overflowY = "hidden";
    contenu.style.marginLeft = "50%";
    visible = true;
  }else if(visible == true){
    document.getElementById('monMenu').classList.remove("active");
    document.getElementById('monMenu').style.left ="-100%";
    document.getElementById("body").style.overflowY = "scroll";
    contenu.style.marginLeft = "0%";
    visible = false;
  }


  
}