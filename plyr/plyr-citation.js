var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.plyr.io/3.7.3/plyr.css';
  document.head.appendChild(css);

function addScript(url){
  document.write('<script src="https://cdn.plyr.io/3.7.3/plyr.js"></script>');
}
