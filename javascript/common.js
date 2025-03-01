function Alert(value){
    
    alert("board updated successful")
}
function value(countNum){
    if(parseInt(countNum) == 6){
        Alert_2()
    }
}

function Alert_2(){
    alert("congrates!!!  you have completed all the current task.")
}

document.getElementById("clear-btn").addEventListener("click", function (){
    const commentContainer = document.getElementById
    ("comment-container")
    commentContainer.innerText = ''
 
})