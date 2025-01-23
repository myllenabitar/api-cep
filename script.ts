 
const buscaroCep = (): void => {
    const cep = document.getElementById('cep') as HTMLInputElement;
    console.log('cep');
}

document.getElementById('cep')?.addEventListener('focus', buscaroCep);   

