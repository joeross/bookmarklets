// made with help from Anthropic's Claude Sonnet 4

javascript: (() => {
  let selectedText = window.getSelection().toString().trim();
  let defaultQuery = selectedText || '';
  let query = prompt('Enter your CourtListener search query:', defaultQuery);
  if (query !== null && query.trim() !== '') {
    let encodedQuery = encodeURIComponent(query.trim());
    window.open('https://www.courtlistener.com/?q=' + encodedQuery, '_blank');
  }
})();
