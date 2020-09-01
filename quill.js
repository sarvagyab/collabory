/* eslint-env browser */

import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { QuillBinding } from 'y-quill'
import Quill from 'quill'
import QuillCursors from 'quill-cursors'

import roomIdButton from './buttons/roomId'
import roomLinkButton from './buttons/roomLink'
import connectionButton from './buttons/connection'

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

  var editor = new Quill(editorContainer, {
    modules: {
      cursors: true,
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ],
      history: {
        userOnly: true
      }
    },
    placeholder: 'Start collaborating...',
    theme: 'snow' // or 'bubble'
  })

  const binding = new QuillBinding(type, editor, provider.awareness);

  /*
  // Define user name and user name
  // Check the quill-cursors package on how to change the way cursors are rendered
  provider.awareness.setLocalStateField('user', {
    name: 'Typing Jimmy',
    color: 'blue'
  })
  */


  // @ts-ignore
  window.example = { provider, ydoc, type, binding, Y }
})


function buttonHandler(room){
  roomIdButton(room);
  roomLinkButton(room);
  connectionButton(room);
}
