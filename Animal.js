function Animal(Idade, Peso){
        this.Idade = Idade;
        this.Peso = Peso;
}

function Cachorro(Idade, Peso, Raca){
        Animal.call(this, Idade, Peso);
        this.Raca = Raca;

        if(Idade >= 7){
            console.log("Adotar!")
        }
}

function Gato(Idade, Peso, Raca){
        Animal.call(this, Idade, Peso);
        this.Raca = Raca;

         if(Idade <= 5){
            console.log("Adotar!")
        }
}

const dog1 = new Cachorro(8, 10, 'Rotweiller');
const dog2 = new Cachorro(5, 14, 'Pastor Alemão');
const cat1 = new Gato(1, 4, 'Persa');

