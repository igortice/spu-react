import ProcessoService from '~/services/ProcessoService';
import moment from 'moment';
export const Types = {
  LOADING: 'LOADING',
  FETCH_TIPOS: 'FETCH_TIPOS',
  FETCH_PRIORIDADES: 'FETCH_PRIORIDADES',
  FETCH_ASSUNTOS: 'FETCH_ASSUNTOS',
  CHANGE_FORM_DADOS_GERAIS: 'CHANGE_FORM_DADOS_GERAIS',
};

const initialState = {
  form: {
    dadosGerais: {
      tipoVirtual: true,
      dataAbertura: moment().format('DD/MM/YY - h:mm'),
      tipoAssunto: [],
      destinoProcesso: null,
      destinosCopias: null,
      prioridade: null,
      dataPrazo: null,
      corpoProcesso: null,
      destinoCirculares: null,
      numeroOrigem: null,
      observacaoCapa: null,
    },
    manifestante: {},
  },

  prioridadesProcesso: [],
  tiposAssuntos: [],
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.CHANGE_FORM_DADOS_GERAIS:
      state.form.dadosGerais = { ...state.form.dadosGerais, ...payload };

      return state;

    case Types.FETCH_TIPOS:
      return { ...state, tiposAssuntos: payload };

    case Types.FETCH_ASSUNTOS:
      const index = state.tiposAssuntos.findIndex(
        (tipo) => tipo.value === payload.tipo_id
      );

      if (index !== -1) {
        state.tiposAssuntos[index].children = payload.assuntos;
      }

      return state;

    case Types.FETCH_PRIORIDADES:
      return { ...state, prioridadesProcesso: payload };

    case Types.LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
};

export const AberturaProcessoActions = {
  loading: (bool) => (dispatch) =>
    dispatch({ type: Types.LOADING, payload: bool }),

  fetchTipos: (_) => async (dispatch) => {
    dispatch(AberturaProcessoActions.loading(true));
    const tipos = await ProcessoService.tipos()
      .then((res) => res.data)
      .then((tipos) => tipos.map((tipo) => ({ ...tipo, isLeaf: false })));

    dispatch(AberturaProcessoActions.loading(false));
    dispatch({ type: Types.FETCH_TIPOS, payload: tipos });
  },

  fetchAssuntos: (tipo_id) => async (dispatch) => {
    const assuntos = await ProcessoService.assuntos(tipo_id).then(
      (res) => res.data
    );

    dispatch({ type: Types.FETCH_ASSUNTOS, payload: { tipo_id, assuntos } });
  },

  fetchPrioridades: (_) => async (dispatch) => {
    const prioridades = await ProcessoService.prioridades().then(
      (res) => res.data
    );

    dispatch({ type: Types.FETCH_PRIORIDADES, payload: prioridades });
  },

  changeFormDadosGerais: (values) => (dispatch) =>
    dispatch({ type: Types.CHANGE_FORM_DADOS_GERAIS, payload: values }),
};
