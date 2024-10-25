let btnColor=document.querySelector('#bg-color');
let buttonColor=document.querySelector('#bg-color');
document.querySelector('#bg-color').addEventListener('click',()=>{
    document.querySelector('body').style.backgroundColor='purple';
    btnColor.style.backgroundColor='red';
    
    
    
});

let inputField=document.querySelector('#knumber');

let inputValue=inputField.value;
let kTitle=document.querySelector('#title')

let submit=document.querySelector('#submit');
submit.addEventListener('click',()=>{

    console.log(inputValue);

})
