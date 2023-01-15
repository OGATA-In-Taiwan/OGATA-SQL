var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.plyr.io/3.7.3/plyr.css';
  document.head.appendChild(css);

document.write('<script src="https://cdn.plyr.io/3.7.3/plyr.js"></script>'); //注意,此處須為相對於index.html的絕對路徑
