// made with help from Anthropic's Claude Sonnet 4

javascript: (() => {
  let selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    let encodedQuery = encodeURIComponent(selectedText);
    window.open(`https://www.google.com/search?q=site:justia.com ${encodedQuery}`, '_blank');
  } else {
    let query = prompt('No text selected. Enter your Justia search query:');
    if (query !== null && query.trim() !== '') {
      let encodedQuery = encodeURIComponent(query.trim());
      window.open(`https://www.google.com/search?q=site:justia.com ${encodedQuery}`, '_blank');
    }
  }
})();
