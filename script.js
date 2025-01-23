"use strict";
const buscaroCep = () => {
    const cep = document.getElementById('cep');
    console.log('cep');
};
document.getElementById('cep')?.addEventListener('focus', buscaroCep);
