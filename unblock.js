// this is a script i can run from a bookmark in school to unblock a website hopefully

let url = promt("Enter URL:");

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
iframe.width = "100%";
iframe.height = "100%";
iframe.src = url;
