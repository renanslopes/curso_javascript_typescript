function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliqueBotoes(); // Inicia o evento que caputra os cliques nos botões
            this.pressionaEnter();
        },

        pressionaEnter() {
            document.addEventListener('keypress', e => {
                this.display.focus();
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            this.display.focus();
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert("Conta inválida!");
                    return;
                }
                this.display.value = conta;
            }
            catch (e) {
                alert("Conta inválida!");
                return;
            }
        },

        clearDisplay() {
            this.display.value = ''; // Limpa o display da calculadora
        },

        apagaUm() {
            if (this.display.value == "") {
                alert("O display encontra-se vazio!");
            } else {
                this.display.value = this.display.value.slice(0, -1)
            }

        },


        cliqueBotoes() {

            document.addEventListener('click', e => {
                this.display.focus();
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                };
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();