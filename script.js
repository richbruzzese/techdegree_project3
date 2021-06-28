const nameField = document.getElementById('name')
    nameField.focus();

const jobRole = document.getElementById('title')
const otherJob = document.getElementById('other-job-role')
    otherJob.style.visibility = "hidden" 

const tshirtDesign = document.getElementById('design')
const tshirtColor = document.getElementById('color')
const colorOptions = tshirtColor.children

    tshirtColor.disabled = true

const registration = document.getElementById('activities')
const activitiesCost = document.getElementById('activities-cost')
let totalCost = 0

const paymentSelection = document.getElementById('payment')
    paymentSelection.children[1].setAttribute('selected', true)
const creditCard = document.getElementById('credit-card')
const paypal = document.getElementById('paypal')
    paypal.hidden = true;
const bitcoin = document.getElementById('bitcoin')
    bitcoin.hidden = true;

jobRole.addEventListener("change", (e) =>{
    if(e.target.value === "other"){
otherJob.style.visibility = "visible"
    }else{otherJob.style.visibility="hidden"

    }
})

tshirtDesign.addEventListener('change', (e) =>{
    tshirtColor.disabled = false
    let designSelection = e.target.value
    for(let i=0; i<colorOptions.length; i++){
       let colorSelection = colorOptions[i].getAttribute("data-theme")
        if(designSelection == colorSelection){
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute('selected', true)
        }else{
            colorOptions[i].hidden = true;
            colorOptions[i].removeAttribute('selected', false)
        }
    }
})

registration.addEventListener('change', (e) =>{
    let price = e.target.getAttribute("data-cost") 
    price = +price
    if(e.target.checked == true){
        totalCost = totalCost + price
    }else if(e.target.checked == false){
        totalCost = totalCost - price
    }
    activitiesCost.innerHTML= `Total: $${totalCost}`
})

paymentSelection.addEventListener('change', (e)=>{
    switch(e.target.value){
        case 'credit-card':
            creditCard.hidden = false;
            paypal.hidden = true
            bitcoin.hidden = true
            break;
        case 'paypal':
            paypal.hidden = false
            creditCard.hidden = true
            bitcoin.hidden = true
            break;
        case 'bitcoin':
            bitcoin.hidden = false
            creditCard.hidden = true
            paypal.hidden = true

    }
})