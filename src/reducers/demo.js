/*jshint esversion: 6 */
import Immutable from 'seamless-immutable';
import {PROBAR_REDUX} from '../types/demo';

const demoModel = Immutable({prueba: ''});

export default function demo(state = demoModel, action = {}) {
  switch (action.type) {
    case PROBAR_REDUX:
      return state.merge({
        prueba: 'Esto es una prueba redux',
      });
    default:
      return state;
  }
}
