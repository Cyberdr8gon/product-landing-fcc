

// menu click event handlers
(function(){
  let menuOpen = false;

  document.getElementById('menu-trigger').addEventListener('click', function() {
    let element = document.getElementById('nav-root');

    if(!menuOpen) {
      element.classList.add('nav-is-visible');
      menuOpen = true;
    } else {
      element.classList.remove('nav-is-visible');
      menuOpen = false;
    }
  });

})();
