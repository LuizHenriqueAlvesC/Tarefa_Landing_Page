const form = document.getElementById('cadastro');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();
    
    const nomeUsuario = document.getElementById('nome');
    const emailUsuario = document.getElementById('email');
    const telefoneUsuario = document.getElementById('telefone');
    const mensagemUsuario = document.getElementById('mensagem');
    
    formEValido = validaNome(nomeUsuario.value)
    if (formEValido) {
        alert('Cadastro feito com sucesso, verifique a caixa de e-mail para mais informações');

        nomeUsuario.value = '',
        emailUsuario.value = '',
        telefoneUsuario.value = '';
        mensagemUsuario.value = '';
    }else {
        alert('o nome não esta completo');
    }
});

document.querySelectorAll('#todos-os-cursos-section a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    });
});

$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu email.',
            mensagem: 'Por favor, insira uma mensagem.',
        }
    })
})

