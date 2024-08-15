class User {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height
    }
    introduce() {
        console.log(`Olá, meu nome é ${this.name}, tenho ${this.age} anos e possuo ${this.height} metros de altura.`);
    }  
}

const user1 = new User ('João', 16 , 1.8);
user1.introduce();

const user2 = new User ('André', 17, 1.61);
user2.introduce();

