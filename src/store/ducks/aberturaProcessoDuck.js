export const Types = {
  LOADING: 'LOADING'
};

const initialState = {
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
};

export const SideBarActions = {
  loading: bool => dispatch => dispatch({ type: Types.LOADING, payload: bool })
};
