function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function (match, pos, originalText) {
        switch (match) {
            case "<": return "&lt;"
            case ">": return "&gt;"
            case "&": return "&amp;"
            case "\"": return "&quot;"
        }
    });
}

console.info(htmlEscape("<p class=\"greeting\">hello world</p>"))