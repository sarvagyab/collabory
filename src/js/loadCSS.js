
const cssFiles = ['export.css','button.css','editor.css'];

export default function cssLoader() {
    const head = document.getElementsByTagName('HEAD')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    const path = window.location.pathname.substr(0, window.location.pathname.length - String("collabory.html").length);
    for(let css of cssFiles){
        link.href = path + `styles/${css}`;
        head.appendChild(link);
    }
}