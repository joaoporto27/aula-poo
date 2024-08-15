class Pizza {
    constructor(base, molho, cobertura , queijo) {
        this.base = base;
        this.molho = molho;
        this.cobertura = cobertura;
        this.queijo = queijo
    }
    getDescription() {
        return `Uma pizza deliciosa com massa ${this.base}, molho de ${this.molho}, cobertura de ${this.cobertura} e o queijo ${this.queijo} `;
    }
}

const minhaPizza = new Pizza('Fina', 'Tomate', 'Bacon', 'Mussarela');
console.log(minhaPizza.getDescription());
