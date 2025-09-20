(function() {
  const THEME_KEY = 'theme'
  const select = document.querySelector('select#theme-switcher.menu');

  const isValidTheme = (theme) => {
    switch (theme) {
      case 'light dark':
      case 'light':
      case 'dark':
        return true;
    }
    return false;
  }

  const handleChange = () => {
    const selectedOption = select.options[select.selectedIndex];
    const theme = selectedOption.value;

    if (isValidTheme(theme)) {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem(THEME_KEY, theme);
    }
  }

  const theme = localStorage.getItem(THEME_KEY) || 'light dark';
  if (isValidTheme(theme)) {
    for (const option of select.options) {
      if (option.value === theme) option.selected = true;
    }
  }
  
  select.addEventListener('change', handleChange);
})();