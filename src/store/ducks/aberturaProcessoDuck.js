import moment from 'moment';
export const Types = {
  LOADING: 'LOADING',
  CHANGE_FORM_DADOS_GERAIS: 'CHANGE_FORM_DADOS_GERAIS',
};

const initialState = {
  form: {
    dadosGerais: {
      tipoVirtual: true,
      dataAbertura: moment().format('DD/MM/YY - h:mm'),
    },
  },
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.CHANGE_FORM_DADOS_GERAIS:
      state.form.dadosGerais = { ...state.form.dadosGerais, ...payload };

      return state;

    case Types.LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
};

export const AberturaProcessoActions = {
  loading: (bool) => (dispatch) =>
    dispatch({ type: Types.LOADING, payload: bool }),

  changeFormDadosGerais: (values) => (dispatch) =>
    dispatch({ type: Types.CHANGE_FORM_DADOS_GERAIS, payload: values }),
};
