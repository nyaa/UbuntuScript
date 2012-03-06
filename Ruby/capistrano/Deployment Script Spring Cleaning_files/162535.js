document.write('<link rel="stylesheet" href="https://gist.github.com/stylesheets/gist/embed.css"/>')

document.write('<div id=\"gist-162535\" class=\"gist\">\n\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n              <div class=\"gist-highlight\"><pre><div class=\'line\' id=\'LC1\'><span class=\"n\">desc<\/span> <span class=\"s2\">&quot;Shrink the js&quot;<\/span><\/div><div class=\'line\' id=\'LC2\'><span class=\"n\">task<\/span> <span class=\"ss\">:minimize_js<\/span><span class=\"p\">,<\/span> <span class=\"ss\">:roles<\/span> <span class=\"o\">=&gt;<\/span> <span class=\"ss\">:app<\/span><span class=\"p\">,<\/span> <span class=\"ss\">:except<\/span> <span class=\"o\">=&gt;<\/span> <span class=\"p\">{<\/span> <span class=\"ss\">:no_release<\/span> <span class=\"o\">=&gt;<\/span> <span class=\"kp\">true<\/span> <span class=\"p\">}<\/span> <span class=\"k\">do<\/span><\/div><div class=\'line\' id=\'LC3\'>&nbsp;&nbsp;<span class=\"nb\">require<\/span> <span class=\"s1\">&#39;lib/js_minimizer&#39;<\/span><\/div><div class=\'line\' id=\'LC4\'>&nbsp;&nbsp;<span class=\"n\">paths<\/span>  <span class=\"o\">=<\/span> <span class=\"o\">[]<\/span><\/div><div class=\'line\' id=\'LC5\'>&nbsp;&nbsp;<span class=\"n\">paths<\/span> <span class=\"o\">+=<\/span> <span class=\"no\">Dir<\/span><span class=\"o\">[<\/span><span class=\"s1\">&#39;public/javascripts/jquery.*.js&#39;<\/span><span class=\"o\">].<\/span><span class=\"n\">sort<\/span><\/div><div class=\'line\' id=\'LC6\'>&nbsp;&nbsp;<span class=\"n\">paths<\/span> <span class=\"o\">+=<\/span> <span class=\"no\">Dir<\/span><span class=\"o\">[<\/span><span class=\"s1\">&#39;public/javascripts/github.*.js&#39;<\/span><span class=\"o\">].<\/span><span class=\"n\">sort<\/span><\/div><div class=\'line\' id=\'LC7\'>&nbsp;&nbsp;<span class=\"n\">paths<\/span>  <span class=\"o\">=<\/span> <span class=\"n\">paths<\/span><span class=\"o\">.<\/span><span class=\"n\">flatten<\/span><\/div><div class=\'line\' id=\'LC8\'><br/><\/div><div class=\'line\' id=\'LC9\'>&nbsp;&nbsp;<span class=\"n\">put<\/span> <span class=\"no\">JSMinimizer<\/span><span class=\"o\">.<\/span><span class=\"n\">minimize_files<\/span><span class=\"p\">(<\/span><span class=\"o\">*<\/span><span class=\"n\">paths<\/span><span class=\"p\">),<\/span> <span class=\"s2\">&quot;<\/span><span class=\"si\">#{<\/span><span class=\"n\">release_path<\/span><span class=\"si\">}<\/span><span class=\"s2\">/public/javascripts/bundle.js&quot;<\/span><\/div><div class=\'line\' id=\'LC10\'><span class=\"k\">end<\/span><\/div><\/pre><\/div>\n          <\/div>\n\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/raw/162535/39d9c651934a42439b0b3e168a1c2a3e1d67735d/gistfile1.rb\" style=\"float:right;\">view raw<\/a>\n            <a href=\"https://gist.github.com/162535#file_gistfile1.rb\" style=\"float:right;margin-right:10px;color:#666\">gistfile1.rb<\/a>\n            <a href=\"https://gist.github.com/162535\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n          <\/div>\n        <\/div>\n<\/div>\n')
