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



export const buscarHeroe = ( id ) => {

  const heroe = heroes[id]; 

  return new Promise((resolve, reject) => {

    if( heroe ) {
      resolve( heroe );
    } else {
      reject(`No exite el héroe con el id ${id}`);
    }
  });
}