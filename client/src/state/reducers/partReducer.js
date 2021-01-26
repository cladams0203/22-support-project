import { LOADING, PART_SUCCESS, ERROR } from "../actions/partActions";

const initialState = {
  parts: {},
  loading: false,
  error: "",
};

export function partReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case PART_SUCCESS:
      return {
        ...state,
        loading: false,
        parts: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
