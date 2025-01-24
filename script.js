"use strict";
const buscaroCep = async () => {
    const cep = document.getElementById('cep').value;
    if (cep?.length === 8 && !isNaN(Number(cep))) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            document.getElementById('endereco').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        }
        catch (error) {
            alert('CEP NÃO ENCONTRADO!');
        }
    }
    else {
        alert('Digite um cep válido!');
    }
};
document.getElementById('cep')?.addEventListener('focusout', buscaroCep);
