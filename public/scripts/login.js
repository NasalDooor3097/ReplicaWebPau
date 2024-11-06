const password = document.getElementById('contraseña');
const comentario = document.getElementById('commit');

const BtnIngresa = document.getElementById('')
let commitMensaje = comentario.value;
let cantidad = 50;


function validar_datos_del_login()
{
    if (commitMensaje.length > cantidad)
        {
            let nombre = 'No se puede exceder de 50 caracteres'; 
            alert(nombre);
        }
}
