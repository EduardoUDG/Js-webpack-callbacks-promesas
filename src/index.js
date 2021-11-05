
import { obtenerHeroeArr } from './js/await'

console.time('await');

obtenerHeroeArr()
  .then( heroes => {
    console.table(heroes);
    console.timeEnd('await');
  });


