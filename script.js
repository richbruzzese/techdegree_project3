const nameField = document.getElementById('name')
nameField.focus();

const jobRole = document.getElementById('title')
const otherJob = document.getElementById('other-job-role')
otherJob.style.visibility = "hidden" 

const tshirtDesign = document.getElementById('design')
const tshirtColor = document.getElementById('color')
const colorOptions = tshirtColor.children

tshirtColor.disabled = true

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
