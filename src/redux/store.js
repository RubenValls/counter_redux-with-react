import {counter} from './reducer.js'
import {createStore} from 'redux'

// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.
const store = createStore(counter);

export default store;