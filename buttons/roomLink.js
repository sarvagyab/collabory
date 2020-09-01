import copyLink from '../copyLink';

export default function roomIdButton(room){
    const button1 = document.getElementById('roomLink');
    button1.addEventListener('click',()=>{
        copyLink(window.location.host + window.location.pathname + "?" + room);
    });
}