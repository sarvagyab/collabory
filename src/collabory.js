/* eslint-env browser */

// cursor names and color management   getStates():Map<number,Object<string,any>>  https://github.com/yjs/y-protocols
// try persistence too
// versioning support
// authentication based system too

import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { QuillBinding } from 'y-quill'

import initializeEditor from './js/editor'
import roomIdButton from './js/connecting/roomId'
import roomLinkButton from './js/connecting/roomLink'
import exportHandler from './js/docHandling/exportFunctions'
import importHandler from './js/docHandling/importFunctions'

window.onload = () => {

  const ydoc = new Y.Doc();

  const room = window.location.search.substr(1) || ydoc.clientID;
  
  console.log(`connecting to room ${room}`);
  console.log(`sharing link =  ${window.location.host + window.location.pathname + "?" + room}`)
  
  const provider = new WebrtcProvider(room, ydoc);
  console.log("provider - ",provider);
  
  const type = ydoc.getText('quill');
  
  const editor = initializeEditor();
  
  const binding = new QuillBinding(type, editor, provider.awareness);
  
  buttonHandler(room);
  
  // Define user name and user name
  // Check the quill-cursors package on how to change the way cursors are rendered
  // provider.awareness.setLocalStateField('user', {
  //   name: `Typing ${ydoc.clientID}`,
  //   color: 'blue'
  // })


  // @ts-ignore
  window.example = { provider, ydoc, type, binding, Y }
}


function buttonHandler(room){
  roomIdButton(room);
  roomLinkButton(room);
  exportHandler();
  importHandler();
}
