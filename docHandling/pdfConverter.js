import { jsPDF } from 'jspdf';


export default function generatePDF(HTML) {
    var doc = new jsPDF();
    HTML = String(HTML);
    console.log(HTML);

    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write(HTML);
    // var specialElementHandlers = {
    //     '#elementH': function (element, renderer) {
    //         return true;
    //     }
    // };
    // doc.html('this is my text').then(()=>{console.log("got it")}).catch((err)=>{console.log(err);});
    // doc.fromHTML(myhtml);
    // doc.html(HTML).then(()=>doc.save('sampledoc.pdf')).catch(err=>console.log(err));
    // Save the PDF
    // doc.save('sample-document.pdf');
}