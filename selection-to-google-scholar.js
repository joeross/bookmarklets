// made with help from Anthropic's Claude Sonnet 4

javascript: (() => {
  let selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    let encodedQuery = encodeURIComponent(selectedText);
    window.open('https://scholar.google.com/scholar?as_sdt=6,31&q=' + encodedQuery, '_blank');
  } else {
    let query = prompt('No text selected. Enter your Google Scholar search query:');
    if (query !== null && query.trim() !== '') {
      let encodedQuery = encodeURIComponent(query.trim());
      window.open('https://scholar.google.com/scholar?as_sdt=6,31&q=' + encodedQuery, '_blank');
    }
  }
})();
