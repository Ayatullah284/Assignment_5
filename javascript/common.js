function Alert(value){
    
    alert("Board updated Successfully")
}
function value(counTN){
    if(parseInt(counTN) == 0){
        Alert_2()
    }
}

function Alert_2(){
    alert("congrates!!! You have completed all the current task.")
}

document.getElementById("clear-btn").addEventListener("click", function (){
    const commentContainer = document.getElementById
    ("comment-container")
    commentContainer.innerText = ''
 
})