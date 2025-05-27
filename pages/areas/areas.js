document.addEventListener('DOMContentLoaded', async function() {
    const area = "Mistieri";
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/areas/${area}`, {
        method: 'GET',
        readers: {
            'Content-Type': 'application/json',
        },
        authorization: `Bearer` + token
        });

        const data = await response.json();

});
