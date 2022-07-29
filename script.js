async function searchCepFN(cepData) {
   try {
      let searchCep = await fetch(`https://viacep.com.br/ws/${cepData}/json/`)
      // Toda resposta que chega, e do tipo response

      // Converte os dados que sao retornados em bytes
      let conversionJson = await searchCep.json()

      if (conversionJson.erro) {
         throw Error('Adress does not exist');
      }

      console.log(conversionJson);
      return conversionJson;

   } catch (erro) {
      console.log(erro);
   } 
}

const ceps = ['35700284', '35700263', '35700212' ]
const conjunto = ceps.map( values => searchCepFN(values))
Promise.all(conjunto).then(res => console.log(res))