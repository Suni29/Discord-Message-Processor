let formatMessage = (id) => {
    let result = '';
    result = document.getElementById(`message-content-${id}`).innerHTML.replace(/<strong>/g, '**').replace(/<\/strong>/g, '**').replace(/<\/em>/g, '_').replace(/<\em>/g, '_').replace(/<span class=\"spoilerText-27bIiA hidden-3B-Rum\" aria-label=\"Spoiler\" aria-expanded=\"false\" tabindex=\"0\" role=\"button\"><span aria-hidden=\"true\" class=\"inlineContent-2YnoDy\">/g, '||').replace(/<\/span><\/span>/g, '||').replace(/<\/u>/g, '__').replace(/<\u>/g, '__').replace(/<div class=\"blockquoteContainer-3VtvI1\"><div class=\"blockquoteDivider-363utW\"><\/div><blockquote>/g, '> ').replace(/<\/blockquote><\/div>/g, '').replace(/<s>/g, '~~').replace(/<\/s>/g, '~~').replace(/<pre><code class=\"scrollbarGhostHairline-2LpzZ9 scrollbar-3vVt8d hljs\">/g, '```').replace(/<\/code><\/pre>/g, '```').replace(/<code class=\"inline\">/g, '`').replace(/<\/code>/g, '`');
    let processedResult = result.replace(/ <span class=\"timestamp-p1Df1m\"><time aria-label=\"/g, '<<<EDITCUT>>>').split('<<<EDITCUT>>>')[0];
    return processedResult;
}
