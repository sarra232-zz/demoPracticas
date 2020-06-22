/*jshint esversion: 6 */
import Immutable from 'seamless-immutable';

import {
  GET_CONFIGURATION_SUCCESS,
  GET_CONFIGURATION_FAILED,
  GET_CONFIGURATION_REQUEST,
} from '../types/configuration';

const defaultState = Immutable({
  identifiers: {
    primary: {
      'GLOBAL-LLAVECLIENTE': {
        lastDate: '2020-06-21',
        scope: 'GLOBAL',
        type: 'LLAVECLIENTE',
        filters: ['APPSFLYER', 'GOOGLEANALYTICS'],
      },
      'GLOBAL-CEDULAHASH': {
        lastDate: '2020-06-21',
        scope: 'GLOBAL',
        type: 'CEDULAHASH',
        filters: ['APPSFLYER', 'GOOGLEANALYTICS'],
      },
      'GLOBAL-CII': {
        lastDate: '2020-06-21',
        scope: 'GLOBAL',
        type: 'CII',
        filters: ['GOOGLEANALYTICS', 'APPSFLYER'],
      },
    },
    secondary: {
      HOTJARID: {
        lastDate: '2020-06-21',
        type: 'HOTJARID',
        filters: ['APPSFLYER', 'GOOGLEANALYTICS'],
      },
    },
    device: {
      APPSFLYERID: {
        lastDate: '2020-06-21',
        type: 'APPSFLYERID',
        filters: ['APPSFLYER', 'GOOGLEANALYTICS'],
      },
      COOKIEGA: {
        lastDate: '2020-06-21',
        type: 'COOKIEGA',
        filters: ['GOOGLEANALYTICS', 'APPSFLYER'],
      },
    },
  },
  filters: {
    GOOGLEANALYTICS: {
      lastDate: '2020-06-20',
      hasChild: true,
      child: {
        WEB: {
          lastDate: '2020-06-20',
          hasChild: true,
          child: {
            Solicitud: {
              lastDate: '2020-06-20',
              hasChild: true,
              child: {
                Documentos: {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
                'Inscribir Cuentas': {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
                Configuración: {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
                'Configuraciones de seguridad': {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
              },
            },
            Informacion: {
              lastDate: '2020-06-20',
              hasChild: true,
              child: {
                'pagina vista': {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
              },
            },
            Transacciones: {
              lastDate: '2020-06-20',
              hasChild: true,
              child: {
                Avance: {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
                Desembolsos: {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
                Transferencias: {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
                'Pagos (Productos)': {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
              },
            },
            Información: {
              lastDate: '2020-06-20',
              hasChild: true,
              child: {
                Simulación: {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
              },
            },
            Conslultas: {
              lastDate: '2020-06-20',
              hasChild: true,
              child: {
                Productos: {
                  lastDate: '2020-06-20',
                  hasChild: false,
                },
              },
            },
          },
        },
      },
    },
    APPSFLYER: {
      lastDate: '2020-06-20',
      hasChild: true,
      child: {
        'BANCOLOMBIA APP PERSONAS': {
          lastDate: '2020-06-20',
          hasChild: false,
        },
        PYME: {
          lastDate: '2020-06-20',
          hasChild: false,
        },
        PYMES: {
          lastDate: '2020-06-20',
          hasChild: false,
        },
      },
    },
  },
  error: '',
  fetching: false,
});

export default function configInfo(state = defaultState, action = {}) {
  switch (action.type) {
    case GET_CONFIGURATION_SUCCESS:
      return state.merge({
        info: defaultState,
        error: '',
        fetching: false,
      });
    case GET_CONFIGURATION_FAILED:
      return state.merge({
        info: {},
        error: action.payload,
        fetching: false,
      });
    case GET_CONFIGURATION_REQUEST:
      return state.merge({
        info: {},
        error: '',
        fetching: true,
      });
    default:
      return state;
  }
}
