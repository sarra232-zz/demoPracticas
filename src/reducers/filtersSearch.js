/*jshint esversion: 6 */
import Immutable from 'seamless-immutable';
import {LOAD_FILTERS} from '../types/filterSearchs';

const filtersSearcModel = Immutable({
  identifiers: {
    primary: [
      {
        scope: 'GLOBAL',
        type: 'CC',
      },
      {
        scope: 'GLOBAL',
        type: 'CEDULAHASH',
      },
      {
        scope: 'GLOBAL',
        type: 'CII',
      },
      {
        scope: 'GLOBAL',
        type: 'PASAPORTE',
      },
      {
        scope: 'GLOBAL',
        type: 'LLAVECLIENTE',
      },
    ],
    secondar: [
      {
        type: 'BLUEKAIID',
      },
      {
        type: 'HOTJARID',
      },
    ],
    device: [
      {
        type: 'COOKIEGA',
      },
      {
        type: 'APPSFLYERID',
      },
      {
        type: 'HOTJARID',
      },
      {
        type: 'BLUEKAIID',
      },
    ],
  },
  filters: {
    APPSFLYER: {
      hasChild: true,
      child: {
        'APP PERSONAS': {
          hasChild: false,
        },
        PYME: {
          hasChild: false,
        },
        PYMES: {
          hasChild: false,
        },
      },
    },
    GOOGLEANALYTICS: {
      hasChild: true,
      child: {
        WEB: {
          hasChild: true,
          child: {
            Conslultas: {
              hasChild: true,
              child: {
                Productos: {
                  hasChild: false,
                },
              },
            },
            Informacion: {
              hasChild: true,
              child: {
                'pagina vista': {
                  hasChild: false,
                },
                Simulación: {
                  hasChild: false,
                },
              },
            },
            PAGE: {
              hasChild: true,
              child: {
                VIEW: {
                  hasChild: false,
                },
              },
            },
            Solicitud: {
              hasChild: true,
              child: {
                Configuración: {
                  hasChild: false,
                },
                'Configuraciones de seguridad': {
                  hasChild: false,
                },
                Documentos: {
                  hasChild: false,
                },
                'Inscribir Cuentas': {
                  hasChild: false,
                },
              },
            },
            Transacciones: {
              hasChild: true,
              child: {
                Avance: {
                  hasChild: false,
                },
                Desembolsos: {
                  hasChild: false,
                },
                'Pagos (Productos)': {
                  hasChild: false,
                },
                Transferencias: {
                  hasChild: false,
                },
              },
            },
          },
        },
      },
    },
  },
});
export default function filtersSearch(state = filtersSearcModel, action = {}) {
  switch (action.type) {
    case LOAD_FILTERS:
      return state.merge({
        filtersSearch: filtersSearcModel,
      });
    default:
      return state;
  }
}
