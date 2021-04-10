(function() {

    const App = {
        init: function(){

            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });

            console.log("-----Problema Fizz Buzz-------")

            readline.question('Ingrese un numero N: ', (numero) => {
                //console.log(numero);
                //const arrayNumeros = [];
                for(i=1; i <= numero; i++){
                    console.log(`${i}:${ App.fizz_buzz(i)}`);
                    //arrayNumeros.push(App.fizz_buzz(i));
            
                }
                //console.log(arrayNumeros);
                
                readline.close();
            })

        },
        fizz_buzz: function(num){

            let valor = 0;

            if(num % 3 == 0) {
                if (num % 5 == 0){
                    valor = 'Fizz Buzz';
                    return valor;
                }
                valor = 'Fizz';
                return valor;
            }
            if (num % 5 == 0){
                if (num % 3 == 0){
                    valor = 'Fizz Buzz';
                    return valor;
                }
                valor = 'Buzz';
                return valor
        
            }
            valor = num;
            return valor;

        }
    }

    App.init();

})();