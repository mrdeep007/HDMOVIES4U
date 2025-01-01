// Search functionality
document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.trim();

  if (query) {
    alert(`Searching for: ${query}`);
    // In a real app, this is where you'd call a backend or search API
  } else {
    alert('Please enter a search term');
  }
});
