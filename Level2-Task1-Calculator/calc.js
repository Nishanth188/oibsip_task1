//Get the variables by id
let textbox=document.getElementById('result');
let buttons=document.querySelectorAll('button');
let str="";
//All the buttons are stored in arr
let arr=Array.from(buttons);
//The forEach arr element has an each buttons and when click the button it will be target what button we clicked
arr.forEach(button=>{
    button.addEventListener('click',(e)=>
    {
       if(e.target.innerHTML=='=')
       {
        str=eval(str);
        textbox.value=str;
       }
       else if(e.target.innerHTML=='Clear')
       {
        str="";
        textbox.value=str;
       }
       else{
        str+=e.target.innerHTML;
        textbox.value=str;
       }
    })
})                                                                     