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
    document.getElementById("intro").style.setProperty('background-color','white')
    document.getElementById("introdiv").style.setProperty('background-color','white')
    document.getElementById("intro2").style.setProperty('background-color','white')
    document.getElementById("nav").style.setProperty('background-color','white')


  }})}

const changes_about = document.querySelectorAll("#intro2")
const observer_about = new IntersectionObserver(callback_about, {threshold: 0})

changes_about.forEach(change => {
  observer_about.observe(change);
})



const callback_about2 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      document.getElementById("workintro2").style.setProperty('background-color','black')
      document.getElementById("space3").style.setProperty('background-color','black')
      document.getElementById("space3text").style.setProperty('color','white')
      document.getElementById("space23").style.setProperty('background-color','black')




    }
      else {


    document.getElementById("workintro2").style.setProperty('background-color','white')
    document.getElementById("space3").style.setProperty('background-color','white')
    document.getElementById("space3text").style.setProperty('color','black')
    document.getElementById("space23").style.setProperty('background-color','white')


  }})}

const changes_about2 = document.querySelectorAll("#space23")
const observer_about2 = new IntersectionObserver(callback_about2, {threshold: 0})

changes_about2.forEach(change => {
  observer_about2.observe(change);
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


const observer_fade2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
console.log(entry)
if (entry.isIntersecting) {
  entry.target.classList.add('show2');
} else {
  entry.target.classList.remove('show2');
}
});
});
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer_fade2.observe(el))



const observer_fade3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
console.log(entry)
if (entry.isIntersecting) {
  entry.target.classList.add('show3');
} else {
  entry.target.classList.remove('dontremove');
}
});
});
const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el) => observer_fade3.observe(el))


const observer_fade4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
console.log(entry)
if (entry.isIntersecting) {
  entry.target.classList.add('show4');
} else {
  entry.target.classList.remove('show4');
}
});
});
const hiddenElements4 = document.querySelectorAll('.hidden4');
hiddenElements4.forEach((el) => observer_fade4.observe(el))