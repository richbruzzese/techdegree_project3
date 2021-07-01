/*
Variables for Name form fields color options
Name Field is focused in on, other job field is hidden from view
and Color selector is disabled by default
*/ 
const nameField = document.getElementById('name')
    nameField.focus();

const jobRole = document.getElementById('title')
const otherJob = document.getElementById('other-job-role')
    otherJob.hidden = true 

const tshirtDesign = document.getElementById('design')
const tshirtColor = document.getElementById('color')
const colorOptions = tshirtColor.children

    tshirtColor.disabled = true
const emailAddress = document.getElementById('email')
const cardNumber = document.getElementById('cc-num')
const zipCode = document.getElementById('zip')
const cvv = document.getElementById('cvv')
const formSubmit = document.querySelector('form') 

/*
Variables for Registration checkboxes and Payments.  Credit card field selected 
by default. PayPal and Bitcoin divs hidden by default.
*/
const registration = document.getElementById('activities')
const activitiesCost = document.getElementById('activities-cost')
const activityBox = document.getElementById('activities-box')
const activityChildren = activityBox.children
let totalCost = 0
const jsLibsCheckbox = activityChildren[1].firstElementChild
const nodeCheckbox = activityChildren[2].firstElementChild
const jsFrameCheckbox = activityChildren[3].firstElementChild
const buildToolsCheckbox = activityChildren[4].firstElementChild


const paymentSelection = document.getElementById('payment')
    paymentSelection.children[1].setAttribute('selected', true)
const creditCard = document.getElementById('credit-card')
const paypal = document.getElementById('paypal')
    paypal.hidden = true;
const bitcoin = document.getElementById('bitcoin')
    bitcoin.hidden = true;



/*
Event Handlers:

Job role - display field if other is selected
*/

jobRole.addEventListener("change", (e) =>{
    if(e.target.value === "other"){
otherJob.hidden = false
    }else{otherJob.hidden = true

    }
})
/*
Tshirt selector - enable the color selector and filter options based on
user shirt selection
*/
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
/*
Registration - Add up the price of the checked boxes or subtract price
if class is unchecked
*/
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
/*
Payment section - Swap out which div is visible based on the user selection
*/
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

/*
Checking the Activity Checkboxes to ensure that events that fall within same
date and time are unable to be selected together.
*/ 
activityBox.addEventListener('click', (e) =>{
    click = e.target.tagName == 'INPUT';
    if(jsLibsCheckbox.checked == true){
        jsFrameCheckbox.disabled = true
    }else{
        jsFrameCheckbox.disabled=false
    }
    if(jsFrameCheckbox.checked == true){
        jsLibsCheckbox.disabled = true
    }else{
        jsLibsCheckbox.disabled = false
    }
    if(nodeCheckbox.checked == true){
        buildToolsCheckbox.disabled = true
    }else{
        buildToolsCheckbox.disabled = false
    }
    if(buildToolsCheckbox.checked == true){
        nodeCheckbox.disabled = true
    }else{
        nodeCheckbox.disabled = false
    }
})
/* 
Email Address check.  This will check in real time whether the email address meets
the necessary requirments prior to submission.
*/
emailAddress.addEventListener('change', (e)=>{
    let emailInput = e.target.value
    let reEmail = /^[^@]+@[^@]+\.[^@\.]+$/i
    let inputTest = reEmail.test(emailInput)
        if(inputTest == false ){
            e.target.classList.add("not-valid")
            e.target.classList.remove("valid")
            e.target.parentElement.lastElementChild.style.display = "inline"
            e.target.parentElement.lastElementChild.style.color = "red"
            e.target.parentElement.lastElementChild.innerHTML = 'Email Invalid. Check entry and try again'
            validate(inputTest, emailAddress.parentElement)
            if(emailInput == ''){
                e.target.parentElement.lastElementChild.innerHTML = "Email Invalid:<br> Email can't be blank"
            }else if(!emailInput.includes('@')){
                e.target.parentElement.lastElementChild.innerHTML = "Email Invalid:<br> Email must contain an @"
            }
        }else{
            e.target.classList.add("valid")
            e.target.classList.remove("not-valid")
            e.target.parentElement.lastElementChild.style.display = "inline"
            e.target.parentElement.lastElementChild.style.color = "green"
            validate(inputTest, emailAddress.parentElement)
        }
})

/*
Form Validation function to add styling depending on if field returns true or false
event listener to check for values of fields and test against a regex
*/
function validate(field, element){
    if(field === false){
        element.classList.add("not-valid")
        element.classList.remove("valid")
        element.lastElementChild.style.display = 'inline'
    }else{
        element.classList.add("valid")
        element.classList.remove("not-valid")
        element.lastElementChild.style.display = "none"
    }
}

formSubmit.addEventListener('submit', (e)=>{
// Validation for name field
    let userName = nameField.value
    let reName = /^[a-zA-Z ]{2,50}$/
    let testName = reName.test(userName)
    validate(testName, nameField.parentElement);
// Validation for email
    let userEmail = emailAddress.value
    let reEmail = /^[^@]+@[^@]+\.[^@\.]+$/i
    let testEmail = reEmail.test(userEmail)
    validate(testEmail, emailAddress.parentElement)

//Validation for Activity selection 
    let userActivity
        if(totalCost > 0){
            userActivity = true
        }else{
            userActivity = false
        }
    validate(userActivity, registration.firstElementChild)
//Validation for credit card details
    let userCard = cardNumber.value
    let reCard = /^\d{13,16}$/
    let testCard =  reCard.test(userCard)
    
    let userZip = zipCode.value
    let reZip = /^\d{5}$/
    let testZip = reZip.test(userZip);

    let userCvv = cvv.value
    let reCvv = /^\d{3}$/
    let testCvv = reCvv.test(userCvv)

    if(paymentSelection.value === "credit-card"){
        validate(testCard, cardNumber.parentElement)
        validate(testZip, zipCode.parentElement)
        validate(testCvv, cvv.parentElement)
    }else{
        testZip = true
        testCard = true
        testCvv = true
    }
//If any issues in validation throw an alert and prevent page from refreshing.
    if(
        testEmail == false ||
        testName == false ||
        testZip == false ||
        testCard == false ||
        testCvv == false ||
        userActivity == false
        ){ 
            e.preventDefault();
        }

})
// Accessibility for focus on activities
let active = document.querySelectorAll('#activities input')
for(let i=0; i<active.length; i++){
    active[i].addEventListener('blur', ()=>{
        active[i].parentElement.classList.remove('focus')
    })
    active[i].addEventListener('focus', () =>{
        active[i].parentElement.classList.add('focus')
    })
}