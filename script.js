"use strict";
const buscaroCep = async () => {
    const cep = document.getElementById('cep').value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    document.getElementById('endereco').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.uf;
};
document.getElementById('cep')?.addEventListener('focusout', buscaroCep);
