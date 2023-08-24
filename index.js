const box = document.querySelectorAll(".box")
const button = document.getElementById("button")
const l = "X"
var turn = l[0]
var board = [[0,1,2],[4,5,6],[7,8,9]]
var time = 0

box.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        let a = e.target.id
        if (a<4){
            board[0][a-1] = turn
        }
        else if (a<7){
            board[1][a-4] = turn
        }
        else{
            board[2][a-7] = turn
        }
    })
    item.addEventListener("click",()=>addXO(item),{once: true })
    item.addEventListener("click",()=>winCon(board))
    item.addEventListener("click",()=>{
        if (time==9){
            document.getElementById("message").innerText = `It's a draw`
            document.getElementById("result").style.visibility = "visible"
        }
    })
})

function addXO(item){
    item.innerHTML = `<h1>${turn}<h1>`
    turn = turn == "X" ? "O":"X"
    time ++
    console.log(time)
}

function winCon(arr){
    if ((arr[0][0]+arr[0][1]+arr[0][2]=="XXX") || (arr[1][0]+arr[1][1]+arr[1][2]=="XXX") ||(arr[2][0]+arr[2][1]+arr[2][2]=="XXX") || (arr[0][0]+arr[1][0]+arr[2][0]=="XXX") || (arr[0][1]+arr[1][1]+arr[2][1]=="XXX") || (arr[0][2]+arr[1][2]+arr[2][2]=="XXX") || (arr[0][0]+arr[1][1]+arr[2][2]=="XXX") || (arr[0][2]+arr[1][1]+arr[2][0]=="XXX")){
        document.getElementById("message").innerText = `"X" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
    else if ((arr[0][2]+arr[1][1]+arr[2][0]=="OOO") || (arr[0][0]+arr[1][1]+arr[2][2]=="OOO") || (arr[0][2]+arr[1][2]+arr[2][2]=="OOO") || (arr[0][1]+arr[1][1]+arr[2][1]=="OOO") || (arr[0][0]+arr[1][0]+arr[2][0]=="OOO") || (arr[2][0]+arr[2][1]+arr[2][2]=="OOO") || (arr[1][0]+arr[1][1]+arr[1][2]=="OOO") || (arr[0][0]+arr[0][1]+arr[0][2]=="OOO")){
        document.getElementById("message").innerText = `"O" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
}

button.addEventListener("click",()=>{
    location.reload()
})