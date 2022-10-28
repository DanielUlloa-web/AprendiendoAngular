/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}
const sumarFlecha = (a: number, b: number): number => {
  return a - b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

const resultado = multiplicar(10, 31);

console.log(resultado);

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
  console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Batman",
  pv: 50,
  mostrarHP() {
    console.log(this.pv);
  },
};

curar(nuevoPersonaje, 20);
