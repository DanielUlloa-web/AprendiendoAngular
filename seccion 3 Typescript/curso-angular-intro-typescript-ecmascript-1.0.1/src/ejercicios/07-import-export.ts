/*
    ===== Código de TypeScript =====
*/
import { Producto } from "../ejercicios/06-desestructuracion-arg";
import { calculaISV } from "../ejercicios/06-desestructuracion-arg";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total,isv] = calculaISV(carritoCompras);

console.log('Total:',total)
console.log('ISV:',isv)