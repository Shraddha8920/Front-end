 const colors = ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed','#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0']


const container  = document.getElementById("container")

const SQUARES = 400

for(let i=0;i<SQUARES;i++){
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover",()=> setColor(square))
    square.addEventListener("mouseout",()=> removeColor(square))

    container.appendChild(square)
}

function setColor(element){
    const color = randomColor()

    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 7px ${color}`

}

function removeColor(element){
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 3px #000"
}
function randomColor(){
    const index = Math.trunc(Math.random()*colors.length)
    return colors[index]
}