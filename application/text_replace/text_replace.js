let tarea=document.querySelector('textarea');
let findipt=document.querySelector('#findtxt');
let repipt=document.querySelector('#reptxt');
let btn=document.querySelector('button');
let elem=document.querySelector('p');
btn.addEventListener('click', ()=>{
    let findtxt=findipt.value;
    let reptxt=repipt.value;
    let tagtxt=tarea.value;
    findtxt=new RegExp(findtxt, 'g');
    tagtxt=tagtxt.replace(findtxt, reptxt);
    elem.innerText=tagtxt;
});
