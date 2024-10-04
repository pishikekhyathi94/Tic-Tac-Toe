let boxes=document.querySelectorAll(".box");
let restbutton=document.querySelector("#reset");
let newbutton=document.querySelector("#newgame");
let p=document.querySelector(".hide");
const arey=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let player1="player1"
let player2 ="player2"
let turn =player1;
let count=0;
for(let box of boxes){
    box.addEventListener("click",()=>{
        count++;
        if(turn==player1){
            box.textContent="X";
            turn=player2
        }
        else{
            box.textContent="0";
            turn=player1;
        }
       box.disabled=true;
       checkwinners();
    })

}
const disablebuttons=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enablebuttons=()=>{
    count=0;
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        p.classList.add("hide");
        newbutton.classList.add("hide");
        
    }
}


let checkwinners=()=>{
    for (let but of arey){
      pos1=boxes[but[0]].innerText;
      pos2=boxes[but[1]].innerText;
      pos3=boxes[but[2]].innerText;
      if(pos1!== "" && pos2!== "" && pos3!== ""){
        if(pos1==pos2 && pos2==pos3 && pos3==pos1){
            showwinner(pos1);
            disablebuttons();
        }
        if(count==9){
            count=0;
            console.log("hello");
            nowinner();
        }
      }
       }
       
    }
restbutton.addEventListener("click",enablebuttons);
newbutton.addEventListener("click",enablebuttons);

let showwinner=(winner)=>{
      p.classList.remove("hide");
      newbutton.classList.remove("hide");
      p.innerText=`congratulations, ${winner}`;
      
}
let nowinner=()=>{
    p.classList.remove("hide");
    newbutton.classList.remove("hide");
    p.innerText="No Winner for this game";  
}
    


