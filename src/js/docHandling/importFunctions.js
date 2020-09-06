import { QuillBinding } from "y-quill";

export default function importHandler() {
    const importer = document.getElementById('import');
    const selector = document.getElementById('file-selector');
    importer.onclick = () => {
        selector.click();
    }
    selector.onchange = (event) => {
        if (event.target.files.length == 0) return;
        console.log(event.target.files);
        const file = event.target.files[0];
        console.log(file.type);
        if (file.type != 'text/html' && file.type != 'text/plain') {
            alert('Please select an HTML or a txt file');
            return; 
        }
        const reader = new FileReader();

        reader.onloadstart = ()=>{
            console.log(`Reading`);
        }

        reader.onload = (readResult)=>{
            takeAptAction(file.type,readResult.target.result)
        }

        reader.onerror = (err)=>{
            alert(`could not read file due to error - ${err.message}. \nPlease check the contents of the file. If the contents are appropriate, please file a bug report at the github repository.`);
        }
        reader.readAsText(file);
    }
}


function takeAptAction(type,content){
    const editor = document.getElementById('editor');
    if(type == 'text/html'){
        editor.innerHTML = content;
    }
    else{
        editor.innerText = content;
    }
}