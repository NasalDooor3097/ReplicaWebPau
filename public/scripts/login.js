function validar(event) {
    event.preventDefault();

    const contrasena = document.getElementById('contraseña').value;
    const correo = document.getElementById('correo').value;
    const name = document.getElementById('name').value;
    const comentario = document.getElementById('commit').value;


    if (!correo || !name || !contrasena || !comentario) {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor, ingrese todos los datos requeridos.'
        });
        return false;
    }


    const longitudMinima = /.{6,}/;
    const mayuscula = /[A-Z]/;
    const minuscula = /[a-z]/;
    const numero = /\d/;
    


    if (!longitudMinima.test(contrasena)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña inválida',
            text: 'La contraseña debe tener al menos 6 caracteres.'
        });
        return false;  
    }
    if (!mayuscula.test(contrasena)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña inválida',
            text: 'La contraseña debe contener al menos una letra mayúscula.'
        });
        return false;
    }
    if (!minuscula.test(contrasena)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña inválida',
            text: 'La contraseña debe contener al menos una letra minúscula.'
        });
        return false;
    }
    if (!numero.test(contrasena)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña inválida',
            text: 'La contraseña debe contener al menos un número.'
        });
        return false;
    }
    


    if (comentario.length > 50) {
        Swal.fire({
            icon: 'error',
            title: 'Comentarios demasiado largos',
            text: 'El comentario no debe exceder los 50 caracteres.'
        });
        return false;
    }

    
    Swal.fire({
        icon: 'success',
        title: '¡Inicio de sesión exitoso!',
        text: 'Has iniciado sesión correctamente.'
    }).then(() => {

        document.querySelector(".formulario").reset();
    });

    return true;
}
