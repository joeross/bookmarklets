// Copy what's after the colon to a new bookmark: javascript:(function(){'use strict';var w=window,d=document,s=w.getSelection().toString(),u='',domain=w.location.hostname.replace(/^www\./,''),comment='';if(s.length>0){u='https://micro.blog/post?bookmarklet=true&text=>%20'+encodeURIComponent(s)+encodeURIComponent('\n\n[%F0%9F%94%97 *'+domain+'*]('+w.location.href+')')}else{comment=prompt('Add your comment:','');if(comment!==null){comment=comment.trim();u='https://micro.blog/post?bookmarklet=true&text='+encodeURIComponent(comment)+encodeURIComponent('\n\n[%F0%9F%94%97 *'+domain+'*]('+w.location.href+')')}}if(u)w.open(u,'Post to Micro.blog','location=0,links=0,scrollbars=0,toolbar=0,width=594,height=615')})();

javascript:(function() {
    'use strict';
    
    var w = window,
        d = document,
        s = w.getSelection().toString(),
        u = '',
        domain = w.location.hostname.replace(/^www\./, ''),
        comment = '';
    
    if (s.length > 0) {
        // If text is selected, quote it
        u = 'https://micro.blog/post?bookmarklet=true&text=>' + 
            '%20' + encodeURIComponent(s) + 
            encodeURIComponent('\n\n[🔗 *' + domain + '*](' + w.location.href + ')');
    } else {
        // If no text selected, prompt for comment
        comment = prompt('Add your comment:', '');
        if (comment !== null) {
            comment = comment.trim();
            u = 'https://micro.blog/post?bookmarklet=true&text=' + 
                encodeURIComponent(comment) + 
                encodeURIComponent('\n\n[🔗 *' + domain + '*](' + w.location.href + ')');
        }
    }
    
    if (u) {
        w.open(u, 'Post to Micro.blog', 'location=0,links=0,scrollbars=0,toolbar=0,width=594,height=615');
    }
})();


