$(document).ready(function () {
    $('.carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle()
    });

    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')
    $('#cpf').mask('000.000.000-00')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Digite seu telefone com DDD',
            email: 'Digite seu email',
            cpf: 'Digite seu CPF',
            mensagem: 'Descreva aqui, como podemos lhe ajudar! '
        },

        sumitHandler: function (form) {
            console.log(form)
        },

        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})
/*mascara para campo em formulario/modelo para telefone*/