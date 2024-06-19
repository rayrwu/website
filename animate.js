if (performance.navigation.type == 1) {
    location.href="#home";
  } else {
    console.log( "Not reloaded");
  }

  history.pushState('', '', window.location.pathname);

  window.addEventListener('scroll', this.handleScroll, true);

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
};


    function scrollToSection(event, sectionId) {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }



const callback_about = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {


      document.getElementById("intro").style.setProperty('background-color','black')
      document.getElementById("introdiv").style.setProperty('background-color','black')
      document.getElementById("intro2").style.setProperty('background-color','black')
      document.getElementById("footer").style.setProperty('background-color','black')
      document.getElementById("nav").style.setProperty('background-color','black')


    }
      else {
    document.getElementById("intro").style.setProperty('background-color','#F7F5F4')
    document.getElementById("introdiv").style.setProperty('background-color','#F7F5F4')
    document.getElementById("intro2").style.setProperty('background-color','#F7F5F4')
    document.getElementById("nav").style.setProperty('background-color','#F7F5F4')


  }})}

const changes_about = document.querySelectorAll("#intro2")
const observer_about = new IntersectionObserver(callback_about, {threshold: 0})

changes_about.forEach(change => {
  observer_about.observe(change);
})


const observer_fade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
console.log(entry)
if (entry.isIntersecting) {
  entry.target.classList.add('show');
} else {
  entry.target.classList.remove('show');
}
});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer_fade.observe(el))
