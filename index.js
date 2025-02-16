// Definir o nome e XP do herói
var nomeHeroi = "Willian";
var experiencia = 8500;

var nivel; // Variável para armazenar o nível do herói

// Estrutura de decisão para classificar o nível do herói
if (experiencia < 1000) {
    nivel = "Ferro"; // Menos de 1000 XP
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze"; // Entre 1001 e 2000 XP
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata"; // Entre 2001 e 5000 XP
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro"; // Entre 5001 e 7000 XP
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina"; // Entre 7001 e 8000 XP
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente"; // Entre 8001 e 9000 XP
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal"; // Entre 9001 e 10000 XP
} else if (experiencia >= 10001) {
    nivel = "Radiante"; // 10001 ou mais XP
}

// Exibir a mensagem final
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
