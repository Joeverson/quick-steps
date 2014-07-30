/*
* padronizações - param => qual a palavra que vai ser buscada para testar a função que esta em 'take'
*
* */
var actions = {
    // comandos de voz para finalizar sistema de voz
    close_speech: {
        term: 'finalizar',
        take: function (s) {
            s.stop();
            s.onend = function () {
                $('#logoHear').css({ display: 'none' });
            }
        }
    },
    startSpeech: {
        term: '',
        take: function (s) {
            s.start();
            s.onstart = function () {
                $('#logoHear').css({display: 'block'});
            }
        }
    },
    abort_speech: 'silencio',

    file: {
        term: 'subir arquivo',
        take: ''
    },
    // comandos de voz do login
    login: {
        user: {
            term: 'login',
            take: ''
        },
        go: {
            term: 'entrar',
            take: ''
        },
        cls: {
            term: 'limpar',
            take: ''
        }
    },
    menu: {
        close: {
            term: 'esconder menu',
            take: function () {
                $('#menu').css({ display:'none' }).removeClass('col-md-3');
                $('#tela-principal').removeClass('col-md-9').addClass('col-md-12');
            }
        },
        show: {
            term: 'aparecer menu',
            take: function () {
                $('#menu').css({display: 'block'}).addClass('col-md-3');
                $('#tela-principal').removeClass('col-md-12').addClass('col-md-9');
            }
        }
    }

};

