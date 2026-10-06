document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#btn-show-form").hidden=false;
    document.querySelector("#section-form").hidden=true;
    document.querySelector("#btn-show-form").addEventListener("click",()=>{
    document.querySelector("#btn-show-form").hidden=true;
    document.querySelector("#section-form").hidden=false;
    })

    
})