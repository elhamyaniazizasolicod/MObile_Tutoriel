
fetch("http://localhost:8000/backend/categories.php")
.then(Response=>Response.json())
.then(categories =>{
    const ul=document.getElementById("liste_category");
    categories.forEach(category=> {
        const li =document.createElement("li");
        li.textContent=category.nom;
        ul.appendChild(li);
        
    });

})
.catch(error =>console.error(error));
