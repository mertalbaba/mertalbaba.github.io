document.getElementById('toggleTheme').addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  });