const text=document.getElementById("text")
const speed=document.getElementById("speed")

const sentence= "I love Programming...😍"

let index = 1

const num = 400
let time = num/speed.value

printtext()

function printtext(){
    text.innerHTML = sentence.slice(0,index)

    index++;

    if(index>sentence.length){
        index=1
    }

    setTimeout(printtext,time)

}

speed.addEventListener("input",(e)=> {time = num/e.target.value
    
})