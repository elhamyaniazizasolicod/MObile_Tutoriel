document.addEventListener("DOMContentLoaded",()=>{
const btnShow=document.querySelector("#btn-show-form");
const sectionForm=document.querySelector("#section-form");
const nomInput=document.querySelector("#cat-nom");
const couleurInput=document.querySelector("#cat-couleur");
const btnCancel=document.querySelector("#btn-cancel");
const tbody=document.querySelector("#tbody");
    btnShow.addEventListener("click",()=>{
        sectionForm.hidden=false;
        btnShow.hidden=true;
    })
    sectionForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        sectionForm.hidden=false;
        btnShow.hidden=true;
        const tr =document.createElement("tr");
        tr.innerHTML =`
        <td>${nomInput.value}</td>
        <td>${couleurInput.value}</td>
        `;
        tbody.appendChild(tr);
    });

   })