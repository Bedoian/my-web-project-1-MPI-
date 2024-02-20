
const seatClasses = document.getElementsByClassName('Seat')
let count = 0;
let count2 = 40;
for (let seatClass of seatClasses) {
    seatClass.addEventListener('click', function (e) {
        seatClass.classList.add('bg-green-500', 'text-white')
        // hide
        setClassListByIdHide('demo1')
        setClassListByIdHide('demo2')
        // dynamic seat name & price
        const seatName = e.target.innerText;
        const seatPrice = 550;
        const seatType = 'Economy'
        // append child
        append(seatName, seatPrice, seatType)
        

        //condition
        let length = document.getElementById('added').childNodes.length;
        console.log(length)
        if (length ===2) {
            let value = 550
            setInnertextValue('aTotal', value)
            setInnertextValue('gTotal',value )
        }
        else if (length ===3) {
            setInnertextValue('aTotal', 550 * 2)
            setInnertextValue('gTotal', 550 * 2)
        }
        else if (length ===4) {
            setInnertextValue('aTotal', 550 * 3)
            setInnertextValue('gTotal', 550 * 3)
        }
        else if (length ===5) {
            setInnertextValue('aTotal', 550 * 4)
            setInnertextValue('gTotal', 0)
            document.getElementById('apply').removeAttribute('disabled')
            document.getElementById('main').classList.add('hidden')
            document.getElementById('warning').classList.remove('hidden')
        }
       
        // change Selected seat value
        count = count + 1
        setInnertextValue('Selected-Seat', count)
        //set available set value
        count2 = count2 - 1
        setInnertextValue('set-left', count2)


    })

}

// success section
function clickHere() {
    setClassListByIdHide('main')
    setClassListByIdShow('success')
}
function oncilik() {
    setClassListByIdHide('success')
    setClassListByIdShow('main')
}
// btn disbled section

document.getElementById('apply').addEventListener('click',function(){
    const value=document.getElementById('copon').value
    if(value=='NEW15'){
        setInnertextValue('gTotal',1870)
    }
    else if(value=='Couple20'){
        setInnertextValue('gTotal',1760)
    }
})