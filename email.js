const btn = document.getElementById('form_button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_0c8andm';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Muchas gracias por tu consulta! se estará respondiendo a la brevedad",
            footer: '<a href="../pages/shop.html">Seguir comprando</a>',
            confirmButtonColor: "#088178"
        });
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});