document.addEventListener("DOMContentLoaded", () => {

    const API_URL = "http://localhost:8000/backend/api.php";
    const tableBody = document.querySelector("#table-categories-body");
    const formCategorie =document.querySelector("#form-categorie");
    const nomInput = document.querySelector("#cat-nom");
    const couleurInput = document.querySelector("#cat-couleur");
    const iconeInput = document.querySelector("#cat-icone");

    const sectionForm = document.querySelector("#section-form");
    const btnShowForm = document.querySelector("#btn-show-form");
    const btnCancel = document.querySelector("#btn-cancel");
    let ligneEnEdition = null;

    function chargerCategories(){
        fetch(API_URL)
        .then(Response=>Response.json())
        .then(result =>{
            tableBody.innerHTML="";
            result.data.forEach(categorie => {
             
                const ligne = document.createElement("tr");
                ligne.innerHTML = `
                <td>${categorie.id}</td>
                <td>${categorie.nom}</td>
                <td>${categorie.couleur}</td>
                <td>${categorie.icone}</td>
                <td>
                   <button class="btn-modifier">Modifier</button>
                   <button class="btn-supprimer">Supprimer</button>
                </td>
                `;
                tableBody.appendChild(ligne);

                const btnSupprimer = 
                 ligne.querySelector(".btn-supprimer");
                 btnSupprimer.addEventListener("click",()=>{
                    const id=categorie.id;
                    fetch(API_URL,{
                        method:"DELETE",
                        headers: { "Content-Type": "application/json" } ,
                        body: JSON.stringify({
                            id: id
                        })

                    })
                    .then(Response=>Response.json())
                    .then(result=>{
                        console.log(result);
                        chargerCategories();
                    })
                    .catch(error=>{
                        console.error( "Erreur suppression :",error);
                    });
                 });
                 const btnModifier=
                 ligne.querySelector(".btn-modifier");
                 btnModifier.addEventListener("click",()=>{
                    ligneEnEdition=categorie.id;

                    nomInput=categorie.nom;
                    couleurInput=categorie.couleur;
                    iconeInput=categorie.icone;

                    sectionForm.hidden=false;
                    btnShowForm.hidden=true;
                 });
            });
        })
        .catch(error =>{
            console.error("Erreur lors du chargement :",error);
        });
    }
    btnShowForm.addEventListener("click",()=>{
        sectionForm.hidden=false;
        btnShowForm.hidden=true;
    });

    btnCancel.addEventListener("click",()=>{
        sectionForm.hidden=true;
        btnShowForm.hidden=false;
        formCategorie.reset();
        ligneEnEdition=null;
    });
     formCategorie.addEventListener("submit", (event) => {

        // Empêcher le rechargement de la page
        event.preventDefault();


        // Construire l'objet
        const categorie = {

            nom: nomInput.value,

            couleur: couleurInput.value,

            icone: iconeInput.value

        };
        let method = "POST";


        // Si une catégorie est en édition
        if (ligneEnEdition !== null) {

            // Ajouter l'id
            categorie.id = ligneEnEdition;

            // Utiliser PUT
            method = "PUT";

        }


        // Envoyer vers l'API
        fetch(API_URL, {

            method: method,

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(categorie)

        })

        .then(response => response.json())

        .then(result => {

            console.log(result);


            // Fermer le formulaire
            sectionForm.hidden = true;

            btnShowForm.hidden = false;


            // Réinitialiser le formulaire
            formCategorie.reset();


            // Sortir du mode édition
            ligneEnEdition = null;


            // Actualiser le tableau
            chargerCategories();

        })

        .catch(error => {

            console.error(
                "Erreur lors de l'enregistrement :",
                error
            );

        });

    });


    // =====================================================
    // CHARGEMENT AU DÉMARRAGE
    // =====================================================

    chargerCategories();

    

});