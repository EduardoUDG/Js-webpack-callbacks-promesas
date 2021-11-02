import { buscarHeroe, buscarHeroeAsync } from './js/promesas'


buscarHeroe('capi')
  .then( console.log )
  .catch( console.warn )

buscarHeroeAsync('iron')
  .then( console.log )
  .catch( console.warn )

