class Veiculo {
    constructor(distanciaPercorrida, tempo, nPassageiros){
        this.velocidade = 0
        this.distanciaPercorrida = distanciaPercorrida
        this.tempo = tempo
        this.nPassageiros = nPassageiros
    }

    calculoVelocidade(){
        this.velocidade = this.distanciaPercorrida/this.tempo
        console.log("Velocidade: " + this.velocidade)
    }
}

class Carro extends Veiculo {
    constructor(distanciaPercorrida, tempo, nPassageiros, gasolinaGasta){
        super(distanciaPercorrida, tempo, nPassageiros)
        this.gasolinaGasta = gasolinaGasta
        this.consumoCalculado = 0
    }

    consumo(){
        switch (this.nPassageiros){
            case 0:
                console.log("Ninguém esta dirigindo")
                break
            case 1:
                this.consumoCalculado = this.distanciaPercorrida/this.gasolinaGasta
                console.log("Consumo para 1 pessoa: " + this.consumoCalculado + " km/l")
                break
            case 2:
                this.consumoCalculado = (this.distanciaPercorrida/this.gasolinaGasta)*0.9
                console.log("Consumo para 2 pessoas: " + this.consumoCalculado + " km/l")
                break
        }
    }
}



const onix = new Carro(2, 1, 1, 1)
onix.consumo();

