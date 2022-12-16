// this is a script i can run from a bookmark in school to unblock a website hopefully
// i could make this more readable or efficent but im not a javascript dev

let url = prompt("Enter URL:");
fetch(url)
.then(response => response.text())
.then(text => let contents = text);

let page = window.open();
page.document.open();
page.document.write(contents);

/*
bookmarklet

javascript:fetch('https://raw.githubusercontent.com/verizya/scripts/main/unblock.js').then(response => response.text()).then(script => eval(script));

*/
