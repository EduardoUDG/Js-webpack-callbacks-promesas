import { buscarHeroeAsync, buscarHeroe, promesaLenta } from "./promesas";


const heroesIds = ['capi', 'iron', 'spider'];


export const obtenerHeroeArr = async() => {
  return await Promise.all( heroesIds.map(buscarHeroe) );
}

export const obtenerHeroeAwait = async( id ) => {
  try {
    const heroe = await buscarHeroeAsync(id)
    return heroe;
  
  } catch( err ) {
    console.log('CATCH!!!!');
    // throw err;
    return {
      nombre: 'Sin nombre',
      poder: 'Sin poder'
    }
  }
}