document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener ('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const messege = document.getElementById('messege').value;

        if(name && email && messege){
            alert('Formulario enviado com sucesso.');
            form.reset();
        } else {
            alert ('Por favor preencha todos os cantos');
        }
    });
});