   const API_URL = "http://localhost:8000/backend/api.php";
        const form=document.querySelector("#form-object");
        inputNom=document.querySelector("#nom");
        inputCouleur=document.querySelector("#couleur");
        inputIcone=document.querySelector("#icone");   
        const tBody=document.querySelector("#table-categories-body");
        
        function chargerCategories(){
         
            fetch(API_URL)
            .then(response => response.json())
         
            .then(result =>{
                tBody.innerHTML=""
                
                result.forEach(category => {
                    tBody.insertAdjacentHTML("beforeend", ` <tr> <td>${category.nom}</td> <td>${category.couleur}</td>  
                        <td>
                            <button class="btn-delete" data-id="${category.id}">
                                Supprimer
                            </button>
                        </td>
                        </tr> `);
                }
                );
                const buttons = document.querySelectorAll(".btn-delete");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                const id = button.dataset.id;

                fetch(API_URL, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: id })
                })
                .then(response => response.json())
                .then(result => {
                    chargerCategories();
                });

            });

        });

        })
        .catch(error => console.error("error :", error));
                }
            document.addEventListener("DOMContentLoaded", () => { 

                form.addEventListener("submit",(event)=>{
                    event.preventDefault();
                    const objet = {
                        nom: inputNom.value,
                        couleur: inputCouleur.value,
                        icone: inputIcone.value
                        };
                        fetch(API_URL,{ 
                            method:"POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(objet)} )
                        .then(response=>response.json())
                        .then(result=>{
                            
                            form.reset();
                            chargerCategories();
                        })
                })
                chargerCategories(); 
            });


      
    