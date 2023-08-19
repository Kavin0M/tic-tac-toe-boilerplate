const box = document.querySelectorAll(".box")
const button = document.getElementById("button")
const l = ["X","O"]
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
    item.addEventListener("click",()=>addXO(item),{ once: true })
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
    if (turn == l[0]){
        turn = l[1]
    }
    else{
        turn = l[0]
    }
    time ++
    console.log(time)
}

function winCon(arr){
    if ((arr[0][0]=="X" && arr[0][1]=="X" && arr[0][2]=="X") || (arr[0][0]=="O" && arr[0][1]=="O" && arr[0][2]=="O")){
        document.getElementById("message").innerText = `"${arr[0][0]}" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
    else if ((arr[1][0]=="X" && arr[1][1]=="X" && arr[1][2]=="X") || (arr[1][0]=="O" && arr[1][1]=="O" && arr[1][2]=="O")){
        document.getElementById("message").innerText = `"${arr[1][0]}" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
    else if ((arr[2][0]=="X" && arr[2][1]=="X" && arr[2][2]=="X") || (arr[2][0]=="O" && arr[2][1]=="O" && arr[2][2]=="O")){
        document.getElementById("message").innerText = `"${arr[2][0]}" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
    else if ((arr[0][0]=="X" && arr[1][0]=="X" && arr[2][0]=="X") || (arr[0][0]=="O" && arr[1][0]=="O" && arr[2][0]=="O")){
        document.getElementById("message").innerText = `"${arr[0][0]}" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
    else if ((arr[0][1]=="X" && arr[1][1]=="X" && arr[2][1]=="X") || (arr[0][1]=="O" && arr[1][1]=="O" && arr[2][1]=="O")){
        document.getElementById("message").innerText = `"${arr[0][1]}" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
    else if ((arr[0][2]=="X" && arr[1][2]=="X" && arr[2][2]=="X") || (arr[0][2]=="O" && arr[1][2]=="O" && arr[2][2]=="O")){
        document.getElementById("message").innerText = `"${arr[0][2]}" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
    else if ((arr[0][0]=="X" && arr[1][1]=="X" && arr[2][2]=="X") || (arr[0][0]=="O" && arr[1][1]=="O" && arr[2][2]=="O")){
        document.getElementById("message").innerText = `"${arr[0][0]}" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
    else if ((arr[0][2]=="X" && arr[1][1]=="X" && arr[2][0]=="X") || (arr[0][2]=="O" && arr[1][1]=="O" && arr[2][0]=="O")){
        document.getElementById("message").innerText = `"${arr[0][2]}" Won the game !`
        document.getElementById("result").style.visibility = "visible"
    }
}

button.addEventListener("click",()=>{
    location.reload()
})