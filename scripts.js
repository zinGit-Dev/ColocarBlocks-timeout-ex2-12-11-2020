

function handleClickAddDivButton(){
    
        const stackContainer= document.querySelector("#stack")
        
        let t = document.createElement("div");
       
        t.className= "block"
        t.id= "blockId"
        stackContainer.append(t);
   
}
//segun el profe t.id= "blockId" no es necesario, ya que estoy metiendo el parent child(pendiente de comprobación)
const addDivButton= document.querySelector("#addDiv")
addDivButton.addEventListener("click",handleClickAddDivButton)



function handleClickRemoveDivButton(){
    setTimeout(() => {
        const elem = document.getElementById("blockId");
        elem.parentNode.removeChild(elem);
        
    }, 200);

}

const removeDivButton = document.querySelector("#removeDiv")

removeDivButton.addEventListener("click",handleClickRemoveDivButton)

