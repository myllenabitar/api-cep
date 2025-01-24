 
const buscaroCep = async (): Promise<void> => {
    const cep = (document.getElementById('cep') as HTMLInputElement).value;

        if(cep?.length === 8 && !isNaN(Number(cep))){
            try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
    
                (document.getElementById('endereco') as HTMLInputElement).value = data.logradouro;
                (document.getElementById('bairro') as HTMLInputElement).value = data.bairro;
                (document.getElementById('cidade')as HTMLInputElement).value = data.localidade;
                (document.getElementById('estado') as HTMLInputElement).value = data.uf;
            }catch (error) {
                alert('CEP NÃO ENCONTRADO!');
             }

        } else {
            alert('Digite um cep válido!');
        }
        }
        


document.getElementById('cep')?.addEventListener('focusout', buscaroCep);   

