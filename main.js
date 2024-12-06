document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-output", {
        strings: ["a Programmer", "an Intern", "a Web Developer" ],
        typeSpeed: 100, 
        backSpeed: 60, 
        loop: true     
    });
  });
  
  
  
  const sections = document.querySelectorAll('section[id]')
  
  function scrollActive() {
  const scrollY = window.scrollY;
  
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 150,
      sectionId = current.getAttribute('id')
  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
  
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  
    }  else {
  
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  
    }
  })
  }
  
  window.addEventListener('scroll', scrollActive)