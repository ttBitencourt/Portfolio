


document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active");
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    showSlide(currentSlide);
  });





  
  var counter = 1;
  setInterval(function(){
    document.getElementById('radio'+ counter).checked =true;
    counter ++;
    if(counter >4){
        counter = 1;
    }
  }, 5000);





  function selectLink(index) {
    const links = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('selected');
    }
    links[index].classList.add('selected');
  }

  const links = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      selectLink(i);
    });
  }