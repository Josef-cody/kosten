//Get the button
var mybutton = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
// ... ... ... ... ... ... ... ... ... ... ... 

// mode change function
let btn = $("#changeMode").click(function (){
    $("#changeMode").html("DarkMode")
    $("#mode").toggleClass("modeLight")
    $(".heroText").toggleClass("heroText heroTextLight")
    $(".cardMode").toggleClass("cardMode cardModeLight")
    $(".modeText").toggleClass("modeText modeTextLight")
 
})




