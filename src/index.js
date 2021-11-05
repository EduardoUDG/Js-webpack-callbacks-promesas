
import { obtenerHeroeArr, obtenerHeroeAwait } from './js/await'

console.time('await');

obtenerHeroeAwait('capi2')
  .then( heroe => {
    console.log(heroe);
  })
  .catch( err => {
    console.warn( err );
  })
  .finally(() => {
    console.timeEnd('await');
  });


