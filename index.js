const listaFechada = document.querySelectorAll('li')

    listaFechada.forEach (element => {
        element.addEventListener('click', function () {

            const elementoAtivoAtual = document.querySelector('.ativo')

            if (elementoAtivoAtual) {
            elementoAtivoAtual.classList.remove('ativo')
            }

            element.classList.add('ativo')
        })
        }
    )