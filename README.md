# Bookmarklets

A collection of JavaScript bookmarklets designed to streamline legal research by providing quick access to major legal databases and search engines.

## What are Bookmarklets?

Bookmarklets are small JavaScript programs stored as bookmarks in your browser. When clicked, they execute JavaScript code on the current webpage, allowing you to perform actions like searching selected text or opening search prompts.

## Installation

1. Copy the entire JavaScript code from any bookmarklet file
2. Create a new bookmark in your browser
3. Paste the code as the bookmark URL/location
4. Give the bookmark a descriptive name
5. Save the bookmark to your bookmarks bar for easy access

## Micro.blog Bookmarklets

<strong>Post Link to Micro.blog</strong>
<br>
<ul>
<li><strong>Primary function</strong>: Posts selected text as blockquote to Micro.blog with domain link</li>
<li><strong>Fallback</strong>: Prompts for commentary if no text is selected</li>
<li><strong>Target</strong>: Micro.blog posting interface</li>
<li><strong>Link format</strong>: Includes <code>🔗 <em>domain.com</em></code> link without www prefix</li>
<li><strong>Installation</strong>: Copy the code below and create a new bookmark with this as the URL</li>
</ul>

<pre><code>javascript:(function(){'use strict';var w=window,d=document,s=w.getSelection().toString(),u='',domain=w.location.hostname.replace(/^www\./,''),comment='';if(s.length>0){u='https://micro.blog/post?bookmarklet=true&text=>%20'+encodeURIComponent(s)+encodeURIComponent('\n\n[🔗 *'+domain+'*]('+w.location.href+')')}else{comment=prompt('Add your comment:','');if(comment!==null){comment=comment.trim();u='https://micro.blog/post?bookmarklet=true&text='+encodeURIComponent(comment)+encodeURIComponent('\n\n[🔗 *'+domain+'*]('+w.location.href+')')}}if(u)w.open(u,'Post to Micro.blog','location=0,links=0,scrollbars=0,toolbar=0,width=594,height=615')})();</code></pre>

## Legal Research Bookmarklets

### Selection-Based Bookmarklets (Instant Search)

These bookmarklets instantly search for any text you have selected on a webpage. If no text is selected, they'll prompt you to enter a search query.

#### `google-scholar-selection.js`
**Google Scholar Case Law Search**
- **Primary function**: Searches selected text in Google Scholar with legal document filtering
- **Fallback**: Prompts for search query if no text is selected
- **Target**: Academic papers, case law, and legal documents
- **Search parameters**: Includes `as_sdt=6,31` for legal document filtering

#### `courtlistener-selection.js`
**CourtListener Selection Search**
- **Primary function**: Searches selected text in CourtListener's federal case database
- **Fallback**: Prompts for search query if no text is selected
- **Target**: Federal court opinions, briefs, and oral arguments
- **Best for**: US federal case law research

#### `justia-selection.js`
**Justia Selection Search**
- **Primary function**: Searches selected text within Justia's legal resources
- **Fallback**: Prompts for search query if no text is selected
- **Target**: Cases, statutes, regulations, and legal resources
- **Method**: Uses Google site search (`site:justia.com`) for reliable results

### Prompt-Based Bookmarklets (Always Ask for Input)

These bookmarklets always open a search prompt, with smart pre-population if you have text selected.

#### `google-scholar-prompt.js`
**Google Scholar Query Prompt**
- **Function**: Always prompts for search input with selected text pre-filled
- **Smart feature**: Auto-populates prompt with selected text as default
- **Target**: Academic papers, case law, and legal documents
- **Benefit**: Allows editing of search terms before searching

#### `courtlistener-prompt.js`
**CourtListener Query Prompt**
- **Function**: Always prompts for search input with selected text pre-filled
- **Smart feature**: Auto-populates prompt with selected text as default
- **Target**: Federal court opinions, briefs, and oral arguments
- **Benefit**: Perfect for refining case name searches

#### `justia-prompt.js`
**Justia Query Prompt**
- **Function**: Always prompts for search input with selected text pre-filled
- **Smart feature**: Auto-populates prompt with selected text as default
- **Target**: Cases, statutes, regulations, and legal resources
- **Benefit**: Ideal for complex or multi-term legal searches

## Usage Examples

### Quick Case Law Research
1. Select a case name on any webpage
2. Click the `google-scholar-selection.js` bookmarklet
3. Instantly see Google Scholar results for that case

### Refining Search Terms
1. Select approximate text (e.g., "Miranda warning")
2. Click the `courtlistener-prompt.js` bookmarklet
3. Edit the pre-filled text to "Miranda v. Arizona" 
4. Search with refined terms

### Research Without Selection
1. Click any prompt-based bookmarklet
2. Type your search query from scratch
3. Search across your chosen legal database

## Database Coverage

| Database | Selection Bookmarklet | Prompt Bookmarklet | Content Focus |
|----------|----------------------|-------------------|---------------|
| **Google Scholar** | ✅ | ✅ | Academic papers, case law, citations |
| **CourtListener** | ✅ | ✅ | Federal cases, briefs, oral arguments |
| **Justia** | ✅ | ✅ | Cases, statutes, regulations, legal resources |

## Features

- **Opens in new tab**: All searches open in new tabs, preserving your current page
- **Smart text handling**: Automatically trims whitespace from selections
- **Graceful cancellation**: Handles cancelled prompts without errors
- **URL encoding**: Properly encodes special characters in search queries
- **Cross-browser compatibility**: Works in all modern browsers

## Tips for Effective Use

- **For quick lookups**: Use selection-based bookmarklets
- **For refined searches**: Use prompt-based bookmarklets
- **Case names**: Select just the case name for best results
- **Legal terms**: Select specific legal terminology for focused results
- **Statutes**: Include section numbers when searching for specific provisions

### Firefox Keywords (Highly Recommended)

Firefox supports **keywords** for bookmarks, allowing you to trigger bookmarklets by typing short commands in the address bar. This is incredibly efficient for legal research:

#### Setup Instructions:
1. Save any bookmarklet as a bookmark
2. Right-click the bookmark → "Properties" 
3. Add a short keyword (e.g., `gs` for Google Scholar)
4. Save the changes

#### Keyword Suggestions:
- `gs` - Google Scholar (selection or prompt)
- `cl` - CourtListener 
- `jus` - Justia
- `gsp` - Google Scholar Prompt (if you have both versions)
- `cls` - CourtListener Selection

#### Usage:
Just type your keyword in the Firefox address bar and press Enter. No mouse clicking required!

**Example workflow:**
1. Select case name: "Miranda v. Arizona"
2. Type `gs` in address bar + Enter
3. Instant Google Scholar search in new tab

### Other Browser Alternatives

**Chrome/Edge**: While they don't have native keyword support, you can:
- Pin bookmarklets to the bookmarks bar for one-click access
- Use extensions like "Shortkeys" for keyboard shortcuts
- Create custom search engines in settings (for prompt-based functionality)

**Safari**: Similar to Chrome - use bookmarks bar or create custom search engines

## Browser Compatibility

These bookmarklets work in:
- Chrome
- Firefox
- Safari
- Edge
- All Chromium-based browsers

## Contributing

Feel free to submit issues or pull requests to improve these bookmarklets or add support for additional legal databases.

## License

MIT License - Feel free to use, modify, and distribute these bookmarklets.

---

*Happy legal researching! 📚⚖️*

_Made with help from Anthropic's Claude Sonnet 4 by [joeross](https://joeross.me)_
