// Perplexity helped with this: https://www.perplexity.ai/page/Can-I-Make-PNF8co1xRLy23ax0JPPDlA
javascript:(function() {
    var selection = window.getSelection().toString();
    if (selection.length > 0) {
        var encodedText = encodeURIComponent(selection);
        var url = "https://perplexity.ai/search?q=" + encodedText;
        window.open(url, "_blank");
    }
})();
