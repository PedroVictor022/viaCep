let searchCep = fetch('https://viacep.com.br/ws/01001000/json/')
   // Toda resposta que chega, e do tipo response
   
   .then(
      // Converte os dados que sao retornados em bytes
      res => res.json()
   )
   .then(
      // E referente ao dado devolvido na promise anterior
      data => console.log(data)
   )
   .catch(

   )

console.log(searchCep);