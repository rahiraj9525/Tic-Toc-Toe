let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector(".reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcotainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
 let turn0=true;
 const winpaterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
     
 ];

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box wad clicked");
        if(turn0){
            box.innerText ="0";
    
            turn0 =false;
        }
        else {
            box.innerText="x";
            turn0=true;
        }
        box.disabled =true;
        checkwinner();
       
    });

 });
 // show winner
  const showWinner = (winner) => {
     msg.innerText=`congratulations , winner is ${winner}`;
     msgcotainer.classList.remove("hide");
     disabledbox();
  };
 const checkwinner= () => {
   for( let pattern of winpaterns){
    let pos1val=boxes[pattern[0]].innerText
    let pos2val=boxes[pattern[1]].innerText
    let pos3val=boxes[pattern[2]].innerText
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("Winner",pos1val);
            showWinner(pos1val);
        }
    }
   }
 };
 // ek baar winner mil gya to fir se kisi button ko click nahi ho sakta hai
 const  disabledbox = () => {
    for (let box of boxes){
        box.disabled=true;
    }
 };
 const  enabledbox = () => {
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 };
 const resetgame = () => {
    turn0=true;
    enabledbox ();
    msgcotainer.classList.add("hide");
 };
 newgamebtn.addEventListener("click", resetgame);
 resetbtn.addEventListener("click", resetgame);