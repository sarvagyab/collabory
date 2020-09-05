

import {generatePDF,generateHTML} from './exportFunctions'

const button1 = document.getElementById('export');
button1.addEventListener('click', () => {
    showPopupForDifferentExportingOptions();
});


function showPopupForDifferentExportingOptions(){
    const doc = document.getElementById('editor').innerHTML;
    console.log(doc);
    generatePDF(doc);
}