
// import Quill from 'quill'
import QuillCursors from 'quill-cursors'

Quill.register('modules/cursors', QuillCursors)

const MODULES = {
    cursors: true,
    toolbar: [
        [{ header: [1, 2, false] }, { font: [] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script: 'super' }, { script: 'sub' }],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['direction', 'clean']
    ],
    history: {
        userOnly: true
    },
};

const editorSettings = {
    modules: MODULES,
    placeholder: 'Start collaborating...',
    theme: 'snow' // or 'bubble'
}

export default function initializeEditor() {
    const editorContainer = document.createElement('div');
    editorContainer.setAttribute('id', 'editor');
    document.body.insertBefore(editorContainer, null);

    const editor = new Quill(editorContainer, editorSettings);
    return editor;
}