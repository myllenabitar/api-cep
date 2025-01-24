 
const buscaroCep = async (): Promise<void> => {
    const cep = (document.getElementById('cep') as HTMLInputElement).value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    
        (document.getElementById('endereco') as HTMLInputElement).value = data.logradouro;
        (document.getElementById('bairro') as HTMLInputElement).value = data.bairro;
        (document.getElementById('cidade')as HTMLInputElement).value = data.localidade;
        (document.getElementById('estado') as HTMLInputElement).value = data.uf;
    }
document.getElementById('cep')?.addEventListener('focusout', buscaroCep);   

