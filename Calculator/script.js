let input=document.getElementById('input');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);

        if(buttonText == 'x'){
            buttonText='*';
            screenValue += buttonText;
            input.value = screenValue;
        }
        else if(buttonText == '÷'){
            buttonText='/';
            screenValue += buttonText;
            input.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = " ";
            input.value = screenValue;
        }
        else if(buttonText == '='){
            input.value=eval(screenValue);
            screenValue=" ";
        }
        else{
            screenValue += buttonText;
            input.value = screenValue;
        }
    })
}