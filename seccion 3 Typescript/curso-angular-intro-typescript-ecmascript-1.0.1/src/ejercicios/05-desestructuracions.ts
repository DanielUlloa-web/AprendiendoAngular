/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    anio: 2015,
  },
};

const { volumen, segundo, cancion, detalles: {autor: autorDetalle} } = reproductor;
//const { autor } = detalles;

const dbz: string[] = ['Goku','Vegeta','Trunks'];
const [p1,p2,p3] = dbz;

