const name = document.getElementById('name')
const jobRole = document.getElementById('title')
const otherJob = document.getElementById('other-job-role')
otherJob.style.visibility = "hidden" 
const tshirtDesign = document.getElementById('design')
const tshirtColor = document.getElementById=('color')
name.focus();
console.log(tshirtColor).children
// tshirtColor.children.style.visibility="hidden"
jobRole.addEventListener("change", (e) =>{
    if(e.target.value === "other"){
otherJob.style.visibility = "visible"
    }else{otherJob.style.visibility="hidden"

    }
})