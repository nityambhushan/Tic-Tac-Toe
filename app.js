let boxes = document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let newbtn= document.querySelector(".new-game");
let para= document.querySelector(".winner");
let content= document.querySelector(".winner-content");
let turn=true;
let winningCondn=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const checkWinner=() =>{
    winningCondn.forEach((pattern)=>{
        let posn0= boxes[pattern[0]].innerText;
        let posn1= boxes[pattern[1]].innerText;
        let posn2= boxes[pattern[2]].innerText;
        if(posn1 !== "" && posn0 !== "" && posn2!== ""){
            if(posn1=== posn2 && posn1=== posn0){
                para.innerText= ` Congratulations !, Winner is Player ${posn1}`;
                for(box of boxes){
                    box.disabled=true;
                }
                content.classList.remove("hidden");
            }

        }
    })
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText==="") {
            if(turn) box.innerText="O";
            else box.innerText="X";
            box.disabled=true;
            turn=1-turn;
            checkWinner();
         }
    })
})

const start= ()=>{
    turn=true;
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }                
    content.classList.add("hidden");
}
reset.addEventListener("click",()=>{
    turn=true;
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    content.classList.add("hidden");
})
newbtn.addEventListener("click",start);

