document.addEventListener("DOMContentLoaded", () => {

    // URL de l'API
    const API_URL = "http://localhost:8000/backend/api.php";


    // Récupérer les éléments HTML
    const formCategorie =
        document.querySelector("#form-categorie");

    const nomInput =
        document.querySelector("#cat-nom");

    const couleurInput =
        document.querySelector("#cat-couleur");

    const iconeInput =
        document.querySelector("#cat-icone");

    const tableBody =
        document.querySelector("#table-categories-body");


    // ========================================
    // AFFICHER LES CATÉGORIES
    // GET
    // ========================================

    function chargerCategories() {

        fetch(API_URL)

            .then(response => response.json())

            .then(result => {

                // Vider le tableau
                tableBody.innerHTML = "";


                // Parcourir les catégories
                result.data.forEach(categorie => {

                    const ligne = `
                        <tr>
                            <td>${categorie.id}</td>
                            <td>${categorie.nom}</td>
                            <td>${categorie.couleur}</td>
                            <td>${categorie.icone}</td>
                        </tr>
                    `;


                    // Ajouter la ligne
                    tableBody.insertAdjacentHTML(
                        "beforeend",
                        ligne
                    );

                });

            })

            .catch(error => {

                console.error(
                    "Erreur :",
                    error
                );

            });
    }


    // ========================================
    // AJOUTER UNE CATÉGORIE
    // POST
    // ========================================

    formCategorie.addEventListener(
        "submit",
        (event) => {

            // Empêcher le rechargement
            event.preventDefault();


            // Créer l'objet
            const categorie = {

                nom: nomInput.value,

                couleur: couleurInput.value,

                icone: iconeInput.value

            };


            // Envoyer au backend
            fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(categorie)

            })

            .then(response => response.json())

            .then(result => {

                console.log(result);


                // Vider le formulaire
                formCategorie.reset();


                // Actualiser le tableau
                chargerCategories();

            })

            .catch(error => {

                console.error(
                    "Erreur :",
                    error
                );

            });

        }
    );


    // ========================================
    // CHARGEMENT INITIAL
    // ========================================

    chargerCategories();

});