const users = [{ name: "Abel", years: 43 }, { name: "Maria", years: 18 }, { name: "Pedro", years: 14 }, { name: "Samantha", years: 32 }, { name: "Raquel", years: 16 }];
let menor = 18;
let mayor = 18;
for (let i = 0; i < users.length; i++) {
    if (users[i].years < menor) {
        console.log("Usuario menor de edad: " + users[i].name);
    } else if (users[i].years >= mayor) {
        console.log("Usuario mayor de edad: " + users[i].name);
    }
}
