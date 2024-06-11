// based on https://stanford.edu/~jugander/bookmarklets/scholarfy.html

(function() {
  let selectedText = window.getSelection().toString();
  let query = encodeURIComponent(selectedText);

  if (selectedText) {
    window.location = 'https://scholar.google.com/scholar?as_sdt=6,31&q=' + query;
  } else {
    alert('No text is selected.');
  }
})();
