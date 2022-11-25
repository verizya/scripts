// this is a script i can run from a bookmark in school to unblock a website hopefully
// i could make this more readable or efficent but im not a javascript dev

let url = prompt("Enter URL:");

let page = window.open();
page.document.open();
page.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
<title>Classes</title>
</head>
<body>
  <<iframe id="embed"></iframe>
</body>
</html>`);

let iframe = page.document.getElementById('embed');
iframe.width = "1280";
iframe.height = "720";
iframe.src = url;

/*
bookmarklet

javascript:fetch('https://raw.githubusercontent.com/verizya/scripts/main/unblock.js').then(response => response.text()).then(script => eval(script));

*/
