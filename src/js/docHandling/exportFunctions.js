export default function exportHandler(){
    console.log("Am i  even going here");
    const button1 = document.getElementById('epdf');
    const button2 = document.getElementById('ehtml');
    console.log('initiating connections here');
    button1.onclick = ()=>{
        console.log("setting on click");
        generatePDF(document.getElementById('editor').innerHTML);
    };
    button2.onclick = ()=>{
        console.log("setting on click");
        generateHTML(document.getElementById('editor').innerHTML);
    };
}



function generatePDF(HTML) {
    var printWindow = window.open("", "MsgWindow", "resizable=off,scrollbars=no,width=100,height=100");
    printWindow.document.write(HTML);
    printWindow.print();
    printWindow.close();
}

function generateHTML(HTML){
    // // Download HTML
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(HTML));
    const cd = new Date();
    const name = ('DOC - ' + cd.toLocaleString(undefined, {
        timeStyle: 'short',
        dateStyle: 'short'
    }) + '.html');
    console.log(Date.now());
    element.setAttribute('download', name);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}