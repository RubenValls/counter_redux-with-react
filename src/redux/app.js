import store from './store.js';
import { add, reduce } from './actions.js';

// Puedes suscribirte manualmente a los cambios, o conectar tu vista
// directamente
store.subscribe(() => {
    console.log(store.getState());
});


const numberAddReduce = 8;
// La única forma de modificar el estado interno es despachando acciones.
// Las acciones pueden ser serializadas, registradas o almacenadas luego para
// volver a ejecutarlas.
store.dispatch(add(numberAddReduce));

store.dispatch(reduce(numberAddReduce));

store.dispatch(add(numberAddReduce));
