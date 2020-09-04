/* eslint-env browser */

// cursor names and color management   getStates():Map<number,Object<string,any>>  https://github.com/yjs/y-protocols
// try persistence too
// versioning support
// authentication based system too

import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { QuillBinding } from 'y-quill'
import Quill from 'quill'
import QuillCursors from 'quill-cursors'

import roomIdButton from './connecting/roomId'
import roomLinkButton from './connecting/roomLink'
import connectionButton from './connecting/connection'
import * as Export from './docHandling/exportDoc'

Quill.register('modules/cursors', QuillCursors)

window.addEventListener('load', () => {

  const ydoc = new Y.Doc();

  const room = window.location.search.substr(1) || ydoc.clientID;

  console.log(`connecting to room ${room}`);
  console.log(`sharing link =  ${window.location.host + window.location.pathname + "?" + room}`)

  buttonHandler(room);

  const provider = new WebrtcProvider(room, ydoc);
  console.log("provider - ",provider);
  
  const type = ydoc.getText('quill');

  const editorContainer = document.createElement('div');
  editorContainer.setAttribute('id', 'editor');
  document.body.insertBefore(editorContainer, null);

  const MODULES = {
    cursors: true,
    toolbar: [
      [{ font: [] }, { size: [] }],
      [{ align: [] } ],
      [ 'bold', 'italic', 'underline', 'strike' ],
      [{ color: [] }, { background: [] }],
      [{ script: 'super' }, { script: 'sub' }],
      ['blockquote', 'code-block' ],
      [{ list: 'ordered' }, { list: 'bullet'}, { indent: '-1' }, { indent: '+1' }],
      [ 'link', 'image', 'video' ],
      [ 'direction', 'clean' ]
    ],
    history: {
      userOnly: true
    },
  };

  var editor = new Quill(editorContainer, {
    // modules: {
    //   cursors: true,
    //   toolbar: [
    //     [{ header: [1, 2, false] }],
    //     ['font','size'],
    //     ['bold', 'italic', 'underline','strike', 'blockquote'],
    //     ['list', 'bullet', 'indent',],
    //     ['link','image', 'video', 'code-block'],
    //   ],
    //   history: {
    //     userOnly: true
    //   }
    // },
    modules:MODULES,
    placeholder: 'Start collaborating...',
    theme: 'snow' // or 'bubble'
  })

  const binding = new QuillBinding(type, editor, provider.awareness);


  // Define user name and user name
  // Check the quill-cursors package on how to change the way cursors are rendered
  // provider.awareness.setLocalStateField('user', {
  //   name: `Typing ${ydoc.clientID}`,
  //   color: 'blue'
  // })


  // @ts-ignore
  window.example = { provider, ydoc, type, binding, Y }
})


function buttonHandler(room){
  roomIdButton(room);
  roomLinkButton(room);
  connectionButton(room);
}
