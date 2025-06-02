let slideIndex = [1,1,1,1,1,1,1,1,1,1];
let slideId = ["mySlides01", "mySlides02", "mySlides03", "mySlides04", "mySlides05", "mySlides06", "mySlides07", "mySlides08", "mySlides09", "mySlides10"] /* add the outstanding slides here  ["mySlides1", "mySlides2", "mySlides3", "mySlides4" etc*/

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);

/*add the new slider*/
/*showSlides(1, 3) if have more than 3;*/

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}