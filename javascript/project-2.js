
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("fade");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}



function textValidate()
{
  var fname=document.getElementById('fname');
  var lname=document.getElementById('lname');
  var cname=document.getElementById('cname');
  var jname=document.getElementById('jname');
  
	var regexp = /^[a-zA-Z]+$/;
	if(!t1.value.match(regexp))
	{
  // alert("enter text only");
  document.getElementById('t1').innerHtml = "invalid input";
  }
}

// function selectValidate(inputtext, alertMsg) 
// {
//   var bname=document.getElementById('bname');
//   var tname=document.getElementById('tname');

//   if (s1.value == "Please Choose") 
//   {
//     alert("select a field");
//   // document.getElementById('s1').innerText = alertMsg; 
//   return false;
//   } 
//   else
//   {
//   return true;
//   }
//   }



