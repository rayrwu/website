if (performance.navigation.type == 1) {
    location.href="#home";
  } else {
    console.log( "Not reloaded");
  }

  history.pushState('', '', window.location.pathname);
