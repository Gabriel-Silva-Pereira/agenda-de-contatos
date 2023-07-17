const formContato = document.querySelector('#form-contato');
const tabelaContatos = document.querySelector('#tabela-contatos');
const tbody = tabelaContatos.querySelector('tbody');
const inputNome = document.querySelector('#nome');
const inputTelefone = document.querySelector('#telefone');

inputTelefone.addEventListener('input', formatarTelefone);

formContato.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = inputNome.value.trim();
    const telefone = inputTelefone.value.trim();

    if (nome !== '' && telefone !== '') {
        adicionarContato(nome, telefone);
        limparCampos();
    }
});

function adicionarContato(nome, telefone) {
    const newRow = tbody.insertRow();
    const cellNome = newRow.insertCell(0);
    const cellTelefone = newRow.insertCell(1);

    cellNome.textContent = nome;
    cellTelefone.textContent = telefone;
}

function limparCampos() {
    inputNome.value = '';
    inputTelefone.value = '';
}

function formatarTelefone() {
    let numero = inputTelefone.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formatado = '';

    if (numero.length > 0) {
        formatado += '(' + numero.substring(0, 2) + ')';

        if (numero.length > 2) {
            formatado += ' ' + numero.substring(2, 3);

            if (numero.length > 3) {
                formatado += ' ' + numero.substring(3, 7);

                if (numero.length > 7) {
                    formatado += '-' + numero.substring(7, 11);
                }
            }
        }
    }

    inputTelefone.value = formatado;
}
