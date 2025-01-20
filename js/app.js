const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Kolla om användaren har ett sparat tema
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️'; // Ikon för ljust läge
}

// Växla mellan ljust och mörkt läge
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');

  // Uppdatera knappen och spara användarens val
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});







function searchFunction() {
  var input, filter, articles, article, h2, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  articles = document.querySelectorAll('.articles article'); // Alla artiklar på sidan

  for (i = 0; i < articles.length; i++) {
    article = articles[i];
    h2 = article.getElementsByTagName('h2')[0]; // Hämta titel på varje artikel
    txtValue = h2.textContent || h2.innerText;

    // Kontrollera om titeln innehåller sökordet
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      article.style.display = "";
    } else {
      article.style.display = "none";
    }
  }
}
