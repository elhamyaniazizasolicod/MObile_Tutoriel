const API_URL='http://localhost:8000/controllers/CategorieController.php';
const Button = document.getElementById('button');
const Form = document.getElementById('form');
function setLoadingState(isLoading) {
    
    if (isLoading) {
        Button.disabled = true;
        Button.textContent = 'Enregistrement…';
    } else {
        Button.disabled = false;
        Button.textContent = 'Enregistrer';
    }
}

Form.addEventListener('submit', function(event) {
    event.preventDefault();
    setLoadingState(true);
    fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nom: document.getElementById('nom').value,
            couleur: document.getElementById('couleur').value,
            icone: document.getElementById('icone').value
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data); 
        Form.reset();
   
    })
    .catch(error => {
        setLoadingState(false);
        console.error('Error:', error);
    }).finally(() => {
        setLoadingState(false);
    })
});