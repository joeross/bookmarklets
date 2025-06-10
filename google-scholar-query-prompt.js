// made with help from Anthropic's Claude Sonnet 4

javascript: (() => {
  let selectedText = window.getSelection().toString().trim();
  let defaultQuery = selectedText || '';
  let query = prompt('Enter your Google Scholar search query:', defaultQuery);
  if (query !== null && query.trim() !== '') {
    let encodedQuery = encodeURIComponent(query.trim());
    window.open('https://scholar.google.com/scholar?as_sdt=6,31&q=' + encodedQuery, '_blank');
  }
})();
