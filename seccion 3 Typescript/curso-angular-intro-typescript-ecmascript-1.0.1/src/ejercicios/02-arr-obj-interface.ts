/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ["bash", "counter"];

interface Personaje {
  nombre: "Strider";
  hp: 100;
  habilidades: ["bash", "counter"];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: "Strider",
  hp: 100,
  habilidades: ["bash", "counter"],
};

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);
