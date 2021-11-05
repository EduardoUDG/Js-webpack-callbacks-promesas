import { buscarHeroeAsync, buscarHeroe, promesaLenta } from "./promesas";


const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map( buscarHeroe );
// const heroesPromesas = heroesIds.map( id => buscarHeroe( id ) );

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


export const heroesCiclo = async() => {
  console.time('heroesCiclo');

  for await( const heroe of heroesPromesas ) {
    console.log(heroe);
  }
  
  console.timeEnd('heroesCiclo');

  // const heroes = await Promise.all( heroesPromesas );
  // heroes.forEach( heroe => console.log(heroe) );
}


export const heroeIfAwait = async(id) => {

  if( (await buscarHeroeAsync(id)).nombre === 'Ironman' ){
    console.log('Es el mejor de todos');
  } else {
    console.log('Naaa');
  }
}