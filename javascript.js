
let color="black";
let click = false;

document.querySelector("body").addEventListener("click",function(e){
    if(e.target.targetName != "BUTTON"){
        click = !click;
        let draw = document.querySelector("#draw");
        if(click){
            draw.innerHTML = "YOUR PEN IS ENABLED";
        }else{
            draw.innerHTML = "YOUR PEN IS DISABLED";
        }
    }
})

function createBoard(size){
    const board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    



    let numDivs = size * size;

    for ( let i = 0; i<numDivs; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = "white";
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
 }

createBoard(16);

function getSize(input){
        
    let message = document.getElementById("message")
    if(input >=2 && input <=100){
        createBoard(input);
    }
    else if (input == "" || input < 2 ||input > 100 ){
        message.innerHTML = "Provide a number between 2 and 100"
    };
    }

function colorDiv(){
    if(click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = "black";
        }
    }

}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll('.board div');
    divs.forEach((div)=>div.style.backgroundColor = "white")
}