 //
 let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
 let count=0
function increment(params) {
    count+=1
    countEl.innerText=count
}
function save(params) {
    let countStr=count+" - "
    saveEl.innerText+=countStr
    countEl.textContent=0
    count=0
}