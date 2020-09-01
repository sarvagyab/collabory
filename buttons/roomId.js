import copyLink from '../copyLink';

export default function roomIdButton(room){
    const button1 = document.getElementById('roomID');
    button1.addEventListener('click',()=>{
        copyLink(room);
    });
}