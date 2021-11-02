const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero'
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reaccion alergica a las picaduras'
  },
};



const buscarHeroe = ( id ) => {

  const heroe = heroes[id]; 

  return new Promise((resolve, reject) => {

    if( heroe ) {
      resolve( heroe );
    } else {
      reject(`No existe el héroe con el id ${id}`);
    }
  });
}


/*---------------------------------------*/
//* async */
/*---------------------------------------*/
export const buscarHeroeAsync = async( id ) => {

  const heroe = heroes[id]; 
  if( heroe ) {
    return heroe;
  } else {
    // throw `No existe el héroe con el id ${id}`;
    throw `No existe el héroe con el id ${id}`;
  }
}


const promesaLenta = new Promise((res, rej) => {
  setTimeout(() => res('Promesa lenta'), 2000);
});

const promesaMedia = new Promise((res, rej) => {
  setTimeout(() => res('Promesa Mediana'), 1500);
});

const promesaRapida = new Promise((res, rej) => {
  setTimeout(() => res('Promesa Rápida'), 1000);
});

export {
  promesaLenta,
  promesaMedia,
  promesaRapida,
  buscarHeroe
}