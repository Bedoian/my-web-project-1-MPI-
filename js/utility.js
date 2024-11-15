// get textElementById//
function getTextElementById(elementId) {
    const textElementId = document.getElementById(elementId)
    return textElementId
}
// get innerText by id
function getInnerTextById(elementId) {
    const textElementBy = getTextElementById(elementId)
    const elementInnerText = textElementBy.innerText
    return elementInnerText;

}
// add ClassList
function addClassOnObject(className) {
    const id = getInnerTextById(className)

}
// set innertext Value
function setInnertextValue(ElementId, value) {
    const innerId = document.getElementById(ElementId);
    innerId.innerText = value
    
}

//Add Classlist by id
function setClassListByIdHide(elementId) {
    const id = getTextElementById(elementId)
    const addID = id.classList.add('hidden')
    return addID
}
function setClassListByIdShow(elementId) {
    const id = getTextElementById(elementId)
    const addID = id.classList.remove('hidden')
    return addID
}

// append child in div

function append(seatName,seatPrice,seatType){
    
    const div=document.createElement('div')
        
    const container = document.getElementById('added')
    const h1 = document.createElement('h1')
    h1.innerText = seatName;
    div.appendChild(h1)
    const h2 = document.createElement('h1')
    h2.innerText = seatType
    div.appendChild(h2)
    const p = document.createElement('h1')
    p.innerText = seatPrice;
    div.appendChild(p)
    div.classList.add('flex','justify-around','text-xl','text-gray-500')
    container.appendChild(div)
}

