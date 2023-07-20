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