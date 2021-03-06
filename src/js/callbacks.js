import { call } from "file-loader";

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


export const buscarHeroe = ( id, callback ) => {

  const heroe = heroes[id]; // heroes['capi']
  if( heroe ) {
    callback( null, heroe );
  } else {
    // error
    callback(`No existe un héroe con el id ${id}`);
  }
}