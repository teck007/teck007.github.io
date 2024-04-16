document.addEventListener('DOMContentLoaded', function () {
    const form_contacto = document.getElementById('form_contacto');
    const btn_enviar = document.getElementById('btn_enviar');
    const nombre = document.getElementById('form_nombre');
    const correo = document.getElementById('form_correo');
    const mensaje = document.getElementById('form_mensaje');

    function campo_invalido(elemento) {
        elemento.classList.add('alert');
        elemento.classList.remove('valid');
    }

    function campo_valido(elemento) {
        elemento.classList.add('valid');
        elemento.classList.remove('alert');
    }
    function validar_correo(correo) {
        const expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (expresion.test(correo.value)) {
            campo_valido(correo);
            return true;
        }
        else {
            campo_invalido(correo);
            return false;
        }
    }

    function validar_vacio(elementos) {
        valid = 0;
        for (const elemento of elementos) {
            if (elemento.value == '') {
                campo_invalido(elemento);
            } else {
                campo_valido(elemento);
                valid += 1;
            }
        }
        if (valid == 3) {
            return true;
        }
        else {
            return false;
        }
    }
    btn_enviar.addEventListener('click', function () {
        const elementos = [nombre, correo, mensaje];
        if (validar_vacio(elementos)) {
            if (validar_correo(correo)){
                form_contacto.submit();
            }   
        }
    });

    correo.addEventListener("focusout", function () {
        validar_correo(correo);
    });
    // btn_enviar.onclick = enviar_form;
})

