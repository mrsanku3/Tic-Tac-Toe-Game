let Cell = document.querySelectorAll(".cell");
let resetbtn = document.querySelector("#reset-button")
let turn0 = true;
const patterns = [[0,1,2], //Possible outcomes of Winning Tic-Tac-Toe
                 [3,4,5],
                 [6,7,8],
                 [0,3,6],
                 [1,4,7],
                 [2,5,8],
                 [0,4,8],
                 [2,4,6]];
Cell.forEach((cell)=>{ //Apply Clicking in every cell
    cell.addEventListener("click", () => {
        console.log("Clicked")
        if(turn0==true){
            cell.innerText = "O" //Player 1
             turn0 = false}//if turn0 = true it again returns O
        else{
            cell.innerText = "X" //player 2
            turn0 = true;//if turn0 = false it returns x 
        }
        cell.disabled = true //After assigning a value to the one box or each boxes disable the clicking pattern to not overwrite the chances
        checkpattern()

        }
    )

    }
)
const checkpattern= () =>{// It checks the Pattrn is exactly matches with Winning Pattern or not 
    for(let pattern of patterns){
        let pos1 = Cell[pattern[0]].innerText
        let pos2 = Cell[pattern[1]].innerText 
        let pos3 = Cell[pattern[2]].innerText 
        if(pos1 !="" && pos2 != "" && pos3 !=""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("Winner",pos1)
                console.log(alert("Congratulations !!",pos1))
                

                const disablegame = () =>{ //This will Disable the user to further Play the Game after the Declaration of Winner
    for(let box of Cell){
            box.disabled=true;}}
disablegame()


    }
}
            }
        }
const enableGame = () => { //This will Reset the game.
    for (let box of Cell) {
         box.disabled = false;
         box.innerText = "";}}
const reset = ()=>{
    turn0 = true;
    enableGame()
   }
resetbtn.addEventListener("click", reset)
