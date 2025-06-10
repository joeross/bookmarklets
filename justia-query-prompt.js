// made with help from Anthropic's Claude Sonnet 4

javascript: (() => {
  let selectedText = window.getSelection().toString().trim();
  let defaultQuery = selectedText || '';
  let query = prompt('Enter your Justia search query:', defaultQuery);
  if (query !== null && query.trim() !== '') {
    let encodedQuery = encodeURIComponent(query.trim());
    window.open('https://www.justia.com/search?cx=004471346504245195276%3A-rtmxtacbgs&cof=FORID%3A10&ie=UTF-8&q=' + encodedQuery, '_blank');
  }
})();
