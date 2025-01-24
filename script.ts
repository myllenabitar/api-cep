 
const buscarCep = async (): Promise<void> => {
    const cep = (document.getElementById('cep') as HTMLInputElement).value;

        if(cep?.length === 8 && !isNaN(Number(cep))){
            try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
                    const pegarValor = document.getElementById('id') as HTMLInputElement;
                    
                    pegarValor.value = data.logradouro;
                    pegarValor.value = data.bairro;
                    pegarValor.value = data.localidade;
                    pegarValor.value = data.uf;

            } catch (error) {
                throw new Error('Erro na API');
             }

        } else if (cep?.length !==8 && cep?.length === null) {
            alert('Digite um cep válido!');
        }
        }
        

document.getElementById('cep')?.addEventListener('focusout', buscarCep);   

