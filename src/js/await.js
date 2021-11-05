import { buscarHeroeAsync, buscarHeroe, promesaLenta } from "./promesas";


const heroesIds = ['capi', 'iron', 'spider'];


export const obtenerHeroeArr = async() => {
  return await Promise.all( heroesIds.map(buscarHeroe) );
}

// const heroesArr = [];

// for( const id of heroesIds){
//   heroesArr.push( buscarHeroe( id ) );
// }
// return await Promise.all(heroesArr);
