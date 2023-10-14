const textAreaEl = document.getElementById("textarea");

const characterEl = document.getElementById("countCharacter");

const remainingEl = document.getElementById("remainingCharacter");

textAreaEl.addEventListener("keyup",()=>{
    updateChange()
})

function updateChange(){
 characterEl.innerText = textAreaEl.value.length ;
 remainingEl.innerText =  50 - characterEl.innerText ;
}