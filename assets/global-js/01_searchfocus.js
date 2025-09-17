(function() {
  const search = document.querySelector('input.nav-search-bar');

  const handleKey = (e) => {
    if (e.key === '/' && document.activeElement === document.body) {
      e.preventDefault();
      search.focus();
    }
  }

  document.addEventListener('keydown', handleKey);
})();