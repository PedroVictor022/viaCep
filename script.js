// `https://viacep.com.br/ws/${cepData}/json/`

let input_value = document.getElementById('inpt-value');

function searchCep() {
   console.log(input_value.length)
   
   if(input_value.value < 0) {
      console.log('Campo está invalido!')
   } else {
      console.log(`${input_value.value}`)
   }

}

// Rever o conteudo acima