fetch('http://localhost:8000/backend/categories.php')
.then(response=>response.json())
.then(categories => {
    const ul = document.getElementById("list_category");
    
    categories .forEach(categorie => {
        const li =document.createElement('li');
        li.textContent = categorie.nom ;
        ul . appendChild(li);
        
    });
})
.catch(erreur => console.error("Erreur de communication :", erreur));